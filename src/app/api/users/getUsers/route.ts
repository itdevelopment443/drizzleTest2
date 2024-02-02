import { db } from "@/database/connections/pool";
import { users } from "@/database/schemas/schema";

export async function GET() {
  const result = await db.select().from(users);
  return new Response(JSON.stringify(result));
}
