import { db } from "@/database/connections/pool";
import { posts } from "@/database/schemas/schema";

export async function GET() {
  const result = await db.select().from(posts);
  return new Response(JSON.stringify(result));
}
