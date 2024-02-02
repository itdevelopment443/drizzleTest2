import { users } from "@/database/schemas/schema";
import { db } from "@/database/connections/pool";
import { eq } from "drizzle-orm";

export async function DELETE() {
  const result = await db
    .delete(users)
    .where(eq(users.firstName, "Kris"))
    .returning({ deletedId: users.id, deletedName: users.firstName });

  return new Response(JSON.stringify(result));
}
