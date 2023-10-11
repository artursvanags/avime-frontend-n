import { readObjects } from "@/lib/spaces-auth";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const folder = searchParams.get("folder") || "";

  try {
    const { data, error } = await readObjects(folder);

    if (error) {
      // Handle the error gracefully and return an appropriate response
      return new Response(JSON.stringify({ error }), { status: 500 });
    }
    // Assuming data is an array of objects, you can return it as JSON
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    // Handle unexpected errors, such as network issues or unhandled exceptions
    console.error("Error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
