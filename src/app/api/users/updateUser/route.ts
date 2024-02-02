import { users } from "@/database/schemas/schema";
import { db } from "@/database/connections/pool";
import { eq } from "drizzle-orm";
import { json } from "stream/consumers";

export async function PUT() {
  const result = await db
    .update(users)
    .set({ firstName: "Kris" })
    .where(eq(users.firstName, "Kris"))
    .returning({ idUpdated: users.id, updatedName: users.firstName });

  return new Response(JSON.stringify(result));
}
