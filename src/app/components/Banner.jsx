"use client";
import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="w-full bg-gradient-to-r from-violet-500 to-purple-700 py-16 px-6 md:px-16 flex flex-col-reverse md:flex-row items-center md:justify-between">
      
      <div className="text-white md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold my-6">
          THE Westmire A56 Headset
        </h1>
        <Link href="/explore">
          <button className="bg-white text-violet-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition">
            Explore
          </button>
        </Link>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <img src="https://i.ibb.co.com/kVzPjkhs/headphone.png" alt="Headset"width={350} height={350}className="object-contain"/>
      </div>
    </section>
  );
};

export default Banner;
