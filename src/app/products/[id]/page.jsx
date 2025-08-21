"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const ProductDetails = () => {
    const { id } = useParams();
    const router = useRouter();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/items/${id}`);
                const data = await res.json();
                setProduct(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <div className="min-h-screen"><p className="text-center mt-10">Loading...</p></div>;
    if (!product) return <p className="text-center mt-10 text-red-500">Product not found.</p>;

    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="flex flex-col gap-6">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full md:w-1/2 h-96 mx-auto object-cover rounded"
                />
                <div className=" flex flex-col">
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <p className="text-violet-600 font-semibold text-xl mt-2">${product.price}</p>
                    <p className="mt-4 text-gray-700">{product.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
