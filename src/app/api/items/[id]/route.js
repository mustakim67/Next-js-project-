import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
    // params.id comes from the dynamic route 
    const { id } = params;

    try {
        const db = await dbConnect("products");
        const product = await db.findOne({ _id: new ObjectId(id) });

        if (!product) {
            return new Response(JSON.stringify({ error: "Product not found" }), {
                status: 404,
            });
        }

        // Convert _id to string 
        product._id = product._id.toString();

        return new Response(JSON.stringify(product), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
        });
    }
}
