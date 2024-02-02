import { db } from "./pool";
import { migrate } from "drizzle-orm/node-postgres/migrator";

// PUSH SCHEMA TO DATABASE

const runMigration = async () => {
  try {
    console.log("Migration started...");
    // Perform migrtion ( Pool connection / History stored in drizzle folder)
    await migrate(db, { migrationsFolder: "drizzle" });
    console.log("Migration completed successfully...");
  } catch (err) {
    // Handle error ( Migration failed )
    console.error("Error druing migration:", err);
  } finally {
    // End connection ( Otherwise the script runs )
    process.exit(0);
  }
};

runMigration();
