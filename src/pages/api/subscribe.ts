import type { APIRoute } from "astro";
import { db, Subscriber } from "astro:db";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const email = data.get("email");
  const name = data.get("name");
  if (
    !email ||
    !name ||
    typeof email !== "string" ||
    typeof name !== "string"
  ) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 },
    );
  }
  await db.insert(Subscriber).values({ email, name });
  return new Response(
    JSON.stringify({
      message: "Subscribed to newsletter",
    }),
  );
};
