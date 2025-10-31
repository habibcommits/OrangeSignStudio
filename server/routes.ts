// routes.ts
import type { Express } from "express";
import path from "path";
import { createServer, type Server } from "http";
import multer from "multer";
import { storage } from "./storage";
import { insertContactSchema, insertProjectSchema } from "@shared/schema";

import {
  hashPassword,
  comparePassword,
  generateToken,
  authenticateToken,
  type AuthRequest,
} from "./auth";

const upload = multer({
  storage: multer.diskStorage({
    destination: "client/public/uploads/",
    filename: (req, file, cb) => {
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      cb(null, `${uniqueSuffix}${path.extname(file.originalname)}`);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (_req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extOk = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeOk = allowedTypes.test(file.mimetype);
    if (extOk && mimeOk) {
      cb(null, true);
    } else {
      cb(new Error("Only image files (jpeg, jpg, png, gif, webp) are allowed"));
    }
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  // --------------------------------------------------------------
  // 1. Public: Contact form
  // --------------------------------------------------------------
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(data);
      res.json({ success: true, contact });
    } catch (err) {
      res.status(400).json({ error: "Invalid contact data" });
    }
  });

  // --------------------------------------------------------------
  // 2. Public: Get all projects
  // --------------------------------------------------------------
  app.get("/api/projects", async (_req, res) => {
    try {
      const projects = await storage.getProjects();
      res.json(projects);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch projects" });
    }
  });

  // --------------------------------------------------------------
  // 3. Admin login (hard-coded – replace with DB in prod!)
  // --------------------------------------------------------------
  app.post("/api/admin/login", async (req, res) => {
    try {
      const { email, password } = req.body as { email?: string; password?: string };

      if (email === "orangesign@gmail.com" && password === "admin@123") {
        const token = generateToken("admin-user");
        res.json({ success: true, token });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } catch (err) {
      res.status(500).json({ error: "Login failed" });
    }
  });

  // --------------------------------------------------------------
  // 4. Protected: Create project + image upload
  // --------------------------------------------------------------
  app.post(
    "/api/projects",
    authenticateToken,
    upload.single("image"),
    async (req: AuthRequest, res) => {
      try {
        const { title, description } = req.body as {
          title?: string;
          description?: string;
        };

        if (!req.file) {
          return res.status(400).json({ error: "Image is required" });
        }

        const imageUrl = `/public/uploads/${req.file.filename}`;

        const data = insertProjectSchema.parse({
          title,
          description,
          imageUrl,
        });

        const project = await storage.createProject(data);
        res.json({ success: true, project });
      } catch (err) {
        res.status(400).json({ error: "Invalid project data" });
      }
    }
  );

  // --------------------------------------------------------------
  // 5. Protected: Delete project
  // --------------------------------------------------------------
  app.delete("/api/projects/:id", authenticateToken, async (req: AuthRequest, res) => {
    try {
      const { id } = req.params;
      const deleted = await storage.deleteProject(id);

      if (deleted) {
        res.json({ success: true });
      } else {
        res.status(404).json({ error: "Project not found" });
      }
    } catch (err) {
      res.status(500).json({ error: "Failed to delete project" });
    }
  });

  // --------------------------------------------------------------
  // 6. Create & return HTTP server (used by index.ts)
  // --------------------------------------------------------------
  const httpServer = createServer(app);
  return httpServer;
}