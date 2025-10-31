import type { Express } from "express";
import { createServer, type Server } from "http";
import multer from "multer";
import path from "path";
import { storage } from "./storage";
import { insertContactSchema, insertProjectSchema } from "@shared/schema";
import { hashPassword, comparePassword, generateToken, authenticateToken, type AuthRequest } from "./auth";

const upload = multer({
  storage: multer.diskStorage({
    destination: "attached_assets/uploads/",
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + path.extname(file.originalname));
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed"));
    }
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ success: true, contact });
    } catch (error) {
      res.status(400).json({ error: "Invalid contact data" });
    }
  });

  // Get all projects
  app.get("/api/projects", async (req, res) => {
    try {
      const projects = await storage.getProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch projects" });
    }
  });

  // Admin login
  app.post("/api/admin/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      
      // Hardcoded admin credentials
      if (email === "orangesign@gmail.com" && password === "admin@123") {
        const token = generateToken("admin-user");
        res.json({ success: true, token });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } catch (error) {
      res.status(500).json({ error: "Login failed" });
    }
  });

  // Create project (protected route)
  app.post("/api/projects", authenticateToken, upload.single("image"), async (req: AuthRequest, res) => {
    try {
      const { title, description } = req.body;
      
      if (!req.file) {
        return res.status(400).json({ error: "Image is required" });
      }

      const imageUrl = `/attached_assets/uploads/${req.file.filename}`;
      
      const validatedData = insertProjectSchema.parse({
        title,
        description,
        imageUrl,
      });

      const project = await storage.createProject(validatedData);
      res.json({ success: true, project });
    } catch (error) {
      res.status(400).json({ error: "Invalid project data" });
    }
  });

  // Delete project (protected route)
  app.delete("/api/projects/:id", authenticateToken, async (req: AuthRequest, res) => {
    try {
      const { id } = req.params;
      const deleted = await storage.deleteProject(id);
      
      if (deleted) {
        res.json({ success: true });
      } else {
        res.status(404).json({ error: "Project not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to delete project" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
