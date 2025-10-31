// drizzle.config.ts
// ---------------------------------------------------------------
// 1. Load .env with ESM import (works because we set type: "module")
// ---------------------------------------------------------------
import "dotenv/config";

// ---------------------------------------------------------------
// 2. Guard – same message you want
// ---------------------------------------------------------------
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL, ensure the database is provisioned");
}

// ---------------------------------------------------------------
// 3. Import Drizzle-Kit and export as ESM
// ---------------------------------------------------------------
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
  verbose: true,
});