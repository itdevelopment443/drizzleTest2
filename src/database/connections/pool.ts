import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "@/database/schemas/schema";
import "dotenv/config";

// CONECTION WITH DATABASE
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// AD SCHEMA FOR TYPESCRIPT
export const db = drizzle(pool, { schema: schema });
