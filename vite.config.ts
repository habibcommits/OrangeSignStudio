// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import path from "path";

// Replit plugins – only import them when they are actually needed
let replitPlugins: any[] = [];
if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
  const { cartographer } = require("@replit/vite-plugin-cartographer");
  const { devBanner } = require("@replit/vite-plugin-dev-banner");
  replitPlugins = [cartographer(), devBanner()];
}

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...replitPlugins,
  ],

  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },

  // -----------------------------------------------------------------
  // 1. Root → client folder (your React app lives here)
  // -----------------------------------------------------------------
  root: path.resolve(import.meta.dirname, "client"),

  // -----------------------------------------------------------------
  // 2. Copy everything from client/public (including the uploads folder)
  // -----------------------------------------------------------------
  publicDir: path.resolve(import.meta.dirname, "client", "public"),

  // -----------------------------------------------------------------
  // 3. Build output – matches what server/vite.ts expects
  // -----------------------------------------------------------------
  build: {
    outDir: path.resolve(import.meta.dirname, "dist", "public"),
    emptyOutDir: true,
  },

  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});