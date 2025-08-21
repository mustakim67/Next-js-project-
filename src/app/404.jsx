"use client";

import React from "react";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
            <h1 className="text-6xl font-bold text-violet-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Page Not Found
            </h2>
            <p className="text-gray-600 mb-6 text-center max-w-sm">
                The page you are looking for might have been removed, had its name
                changed, or is temporarily unavailable.
            </p>
            <Link href="/" className="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition">
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;
