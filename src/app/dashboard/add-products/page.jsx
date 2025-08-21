"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";

const Page = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !price || !description || !image) {
            Swal.fire({
                icon: "warning",
                title: "Incomplete Data",
                text: "Please fill all fields",
            });
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("/api/items", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, price, description, image }),
            });

            const data = await res.json();

            if (data.success) {
                Swal.fire({
                    icon: "success",
                    title: "Product Added",
                    text: "Your product has been added successfully!",
                    timer: 2000,
                    showConfirmButton: false,
                });

                setName("");
                setPrice("");
                setDescription("");
                setImage("");
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: data.error,
                });
            }
        } catch (err) {
            console.error(err);
            Swal.fire({
                icon: "error",
                title: "Failed",
                text: "Failed to add product",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="max-w-md w-full p-6 border border-gray-300 rounded shadow bg-white">
                <h1 className="text-2xl font-bold mb-4 text-center">Add Product</h1>

                <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
                    <input
                        type="text"
                        placeholder="Product Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border px-3 py-2 rounded"
                        required
                    />

                    <input
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="border px-3 py-2 rounded"
                        required
                    />

                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border px-3 py-2 rounded"
                        required
                    />

                    <input
                        type="text"
                        placeholder="Image URL"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="border px-3 py-2 rounded"
                        required
                    />

                    <button
                        type="submit"
                        className="bg-black text-white py-2 rounded hover:bg-gray-800 transition"
                        disabled={loading}
                    >
                        {loading ? "Adding..." : "Add Product"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Page;
