"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Featured = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/api/items?limit=4")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold mb-8 text-center">Product Highlights</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden bg-white flex flex-col"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="h-40 w-full object-cover border-b border-gray-200"
                        />
                        <div className="p-4 flex flex-col flex-1">
                            <h3 className="font-semibold text-lg">{product.name}</h3>
                            <p className="text-sm text-gray-600 line-clamp-2 mt-1 flex-1">
                                {product.description}
                            </p>
                            <Link
                                href={`/products/${product._id}`}
                                className="mt-3 inline-block bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700 transition text-center"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-8">
                <Link
                    href="/products"
                    className="inline-block border border-violet-600 text-violet-600 px-6 py-2 rounded hover:bg-violet-600 hover:text-white transition"
                >
                    View All Products
                </Link>
            </div>
        </section>
    );
};

export default Featured;
