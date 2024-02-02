import { db } from "@/database/connections/pool";
import { users } from "@/database/schemas/schema";

type NewUser = typeof users.$inferInsert;

export async function POST(): Promise<Response> {
  const newUser: NewUser = {
    firstName: "Kris",
    lastName: "Kavčič",
    phoneNumber: "070555666",
  };

  try {
    const result = await db.insert(users).values(newUser);

    return new Response("User added successfully");
  } catch (err) {
    console.error(err);
    throw new Error("Failed to insert user");
  }
}
