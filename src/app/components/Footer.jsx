"use client";

import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200  py-10">
      <div className="flex flex-col items-center  max-w-md mx-auto px-4 space-y-2">
        {/* Logo */}
        <Link href="/">
          <img
            src="https://i.ibb.co.com/zHXsbLSG/brand-removebg-preview.png"
            alt="TechOrbit Logo"
            className="h-12 w-auto"
          />
        </Link>

        {/* Links */}
        <div className="flex gap-5 items-center">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/products" className="hover:text-white transition">
            Products
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4">
          <a href="https://www.facebook.com" className="hover:text-white transition">
            <FaFacebookF size={20} />
          </a>
          <a href="https://www.youtube.com" className="hover:text-white transition">
            <FaTwitter size={20} />
          </a>
          <a href="https://www.instagram.com" className="hover:text-white transition">
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-4 text-center">
          &copy; {new Date().getFullYear()} Shop Swift. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
