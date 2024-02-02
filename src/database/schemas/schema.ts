import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

// USER TABLE
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  phoneNumber: varchar("phone_Number", { length: 256 }),
});

// POST TABLE
export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: text("title"),
  description: varchar("description", { length: 256 }),
});
