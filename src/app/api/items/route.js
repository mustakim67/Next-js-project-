import dbConnect from "@/lib/dbConnect";

// GET
export async function GET() {
  try {
    const collection = await dbConnect("products");
    const items = await collection.find({}).toArray();

    return new Response(JSON.stringify(items), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// POST
export async function POST(req) {
  try {
    const data = await req.json(); 
    const collection = await dbConnect("products");

    const result = await collection.insertOne({
      ...data,
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ success: true, itemId: result.insertedId }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
