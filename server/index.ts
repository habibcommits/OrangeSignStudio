// server/index.ts
import "dotenv/config";                     // ← loads .env
import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { seedProjects } from "./seed";
import type { Server } from "http";

const app = express();

// ---------------------------------------------------------------
// 1. rawBody for Stripe / webhooks
// ---------------------------------------------------------------
declare global {
  namespace Express {
    interface Request {
      rawBody?: Buffer;
    }
  }
}

// ---------------------------------------------------------------
// 2. Body parsers
// ---------------------------------------------------------------
app.use(
  express.json({
    verify: (req: Request, _res: Response, buf: Buffer) => {
      req.rawBody = buf;
    },
  })
);
app.use(express.urlencoded({ extended: false }));

// ---------------------------------------------------------------
// 3. API logger (only /api)
// ---------------------------------------------------------------
app.use((req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  const path = req.path;
  let captured: any;

  const orig = res.json;
  res.json = function (body) {
    captured = body;
    return orig.call(this, body);
  };

  res.on("finish", () => {
    if (!path.startsWith("/api")) return;
    const ms = Date.now() - start;
    let line = `${req.method} ${path} ${res.statusCode} ${ms}ms`;
    if (captured) line += ` :: ${JSON.stringify(captured)}`;
    if (line.length > 80) line = line.slice(0, 79) + "…";
    log(line);
  });

  next();
});

// ---------------------------------------------------------------
// 4. Bootstrap
// ---------------------------------------------------------------
(async () => {
  const server: Server = await registerRoutes(app);

  // Seed only in dev
  if (app.get("env") === "development") {
    await seedProjects();
    log("Seeded 7 projects");
  }

  // Global error handler
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status ?? err.statusCode ?? 500;
    res.status(status).json({ message: err.message ?? "Server error" });
    if (app.get("env") === "development") throw err;
  });

  // Vite (dev) or static files (prod)
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ---------------------------------------------------------------
  // 7. LISTEN – **Windows/Node 22 fix**
  // ---------------------------------------------------------------
  const port = Number.parseInt(process.env.PORT ?? "5000", 10);

  // **Remove host & reusePort** → fixes ENOTSUP on Windows
  server.listen(port, () => {
    log(`serving on http://localhost:${port}`);
  });
})();