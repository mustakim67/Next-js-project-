"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const NavBar = ({ user, onLogout }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-base-100 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/">
                            <h1 className="text-2xl font-bold">MyLogo</h1>
                        </Link>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex md:space-x-6">
                        <Link href="/" className="hover:text-primary font-medium">Home</Link>
                        <Link href="/about" className="hover:text-primary font-medium">About</Link>
                        <Link href="/services" className="hover:text-primary font-medium">Services</Link>
                    </div>

                    {/* Desktop Login/Logout */}
                    <div className="hidden md:flex md:items-center">
                        {user ? (
                            <button onClick={onLogout} className="btn btn-primary">Logout</button>
                        ) : (
                            <Link href="/login" className="btn btn-primary">Login</Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
                            {isOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-base-100 px-4 pt-2 pb-4 space-y-2">
                    <Link href="/" className="block hover:text-primary font-medium">Home</Link>
                    <Link href="/about" className="block hover:text-primary font-medium">About</Link>
                    <Link href="/services" className="block hover:text-primary font-medium">Services</Link>
                    {user ? (
                        <button onClick={onLogout} className="btn btn-primary w-full">Logout</button>
                    ) : (
                        <Link href="/login" className="btn btn-primary w-full">Login</Link>
                    )}
                </div>
            )}
        </nav>
    );
};

export default NavBar;
