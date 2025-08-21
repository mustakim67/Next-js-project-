"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch products from API
    const fetchProducts = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/items");
            const data = await res.json();
            setProducts(data);
        } catch (err) {
            console.error(err);
            alert("Failed to fetch products");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-6 min-h-screen">

            {loading ? (
                <div className="min-h-screen">
                    <p className="text-center">Loading...</p>
                </div>

            ) : (
                <>
                    <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {products.map((product) => (
                            <div
                                key={product._id}
                                className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden bg-white flex flex-col"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-48 w-full object-cover p-3 border-b border-b-gray-300"
                                />
                                <div className="p-4 flex flex-col flex-1">
                                    <h2 className="font-bold text-lg">{product.name}</h2>
                                    <p className="text-violet-600 font-semibold mt-1">${product.price}</p>
                                    <Link
                                        href={`/products/${product._id}`}
                                        className="mt-auto inline-block bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700 transition"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </>

            )}
        </div>
    );
};

export default Page;
