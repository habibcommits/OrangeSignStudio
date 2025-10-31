// server/routes.ts
import type { Express } from "express";
import path from "path";
import { createServer, type Server } from "http";
import multer from "multer";
import { storage } from "./storage.js";
import { insertContactSchema, insertProjectSchema } from "@shared/schema.js";
import {
  generateToken,
  authenticateToken,
  type AuthRequest,
} from "./auth.js";

// ---------------------------------------------------------------------
// 1. Multer – memory storage
// ---------------------------------------------------------------------
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
  fileFilter: (_req, file, cb) => {
    const allowed = /jpeg|jpg|png|gif|webp/;
    const extOk = allowed.test(path.extname(file.originalname).toLowerCase());
    const mimeOk = allowed.test(file.mimetype);

    if (extOk && mimeOk) {
      cb(null, true);
    } else {
      // FIX: Bypass strict TS type with `as any`
      (cb as any)(
        new Error("Only image files (jpeg, jpg, png, gif, webp) are allowed"),
        false
      );
    }
  },
});

// ---------------------------------------------------------------------
// 2. Upload helper – Vercel Blob (prod) | local disk (dev)
// ---------------------------------------------------------------------
async function getImageUrl(file: Express.Multer.File): Promise<string> {
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      const { put } = await import("@vercel/blob");
      const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}${path.extname(file.originalname)}`;
      const { url } = await put(`uploads/${filename}`, file.buffer, {
        access: "public",
        token: process.env.BLOB_READ_WRITE_TOKEN,
      });
      return url;
    } catch (err) {
      console.error("Blob upload failed – using local fallback:", err);
    }
  }

  const fs = await import("fs");
  const uploadDir = path.resolve(import.meta.dirname, "..", "client", "public", "uploads");
  await fs.promises.mkdir(uploadDir, { recursive: true });

  const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}${path.extname(file.originalname)}`;
  const filePath = path.join(uploadDir, filename);
  await fs.promises.writeFile(filePath, file.buffer);

  return `/uploads/${filename}`;
}

// ---------------------------------------------------------------------
// 3. Routes
// ---------------------------------------------------------------------
export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(data);
      res.json({ success: true, contact });
    } catch {
      res.status(400).json({ error: "Invalid contact data" });
    }
  });

  app.get("/api/projects", async (_req, res) => {
    try {
      const projects = await storage.getProjects();
      res.json(projects);
    } catch {
      res.status(500).json({ error: "Failed to fetch projects" });
    }
  });

  app.post("/api/admin/login", async (req, res) => {
    try {
      const { email, password } = req.body as { email?: string; password?: string };
      if (email === "orangesign@gmail.com" && password === "admin@123") {
        const token = generateToken("admin-user");
        res.json({ success: true, token });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } catch {
      res.status(500).json({ error: "Login failed" });
    }
  });

  app.post(
    "/api/projects",
    authenticateToken,
    upload.single("image"),
    async (req: AuthRequest, res) => {
      try {
        const { title, description } = req.body;
        if (!req.file) return res.status(400).json({ error: "Image is required" });

        const imageUrl = await getImageUrl(req.file);
        const data = insertProjectSchema.parse({ title, description, imageUrl });
        const project = await storage.createProject(data);
        res.json({ success: true, project });
      } catch (err: any) {
        res.status(400).json({ error: err.message || "Invalid project data" });
      }
    }
  );

  app.delete("/api/projects/:id", authenticateToken, async (req: AuthRequest, res) => {
    try {
      const { id } = req.params;
      const deleted = await storage.deleteProject(id);
      deleted ? res.json({ success: true }) : res.status(404).json({ error: "Project not found" });
    } catch {
      res.status(500).json({ error: "Failed to delete project" });
    }
  });

  return createServer(app);
}