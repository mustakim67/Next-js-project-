"use client";

import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const router = useRouter();
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "authenticated") {
            const hasShown = sessionStorage.getItem("loginAlertShown");
            if (!hasShown) {
                sessionStorage.setItem("loginAlertShown", "true");
                Swal.fire({
                    icon: "success",
                    title: "Login Successful",
                    text: `Welcome, ${session.user.name || "User"}!`,
                    timer: 2000,
                    showConfirmButton: false,
                }).then(() => {
                    router.push("/products");
                });
            }
        }
    }, [status, session, router]);

    // Logout handler
    const handleLogout = async () => {
        sessionStorage.removeItem("loginAlertShown");
        await Swal.fire({
            icon: "success",
            title: "Logged Out",
            text: "You have successfully logged out.",
            timer: 2000,
            showConfirmButton: false,
        });
        signOut({ callbackUrl: "/" });
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/">
                            <img
                                src="https://i.ibb.co/PsJY60BW/brand.png"
                                className="max-w-22 py-1"
                                alt="Brand"
                            />
                        </Link>
                    </div>

                    {/* Links */}
                    <div className="hidden md:flex md:space-x-6">
                        <Link href="/" className="hover:text-primary font-medium">
                            Home
                        </Link>
                        <Link href="/products" className="hover:text-primary font-medium">
                            Products List
                        </Link>
                        {session ? (<><Link href="/dashboard/add-products" className="hover:text-primary font-medium">
                            Add Products
                        </Link></>) : (<></>)
                        }
                    </div>

                    {/*Login/Logout */}
                    <div className="hidden md:flex md:items-center">
                        {session ? (
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 bg-black text-white rounded-lg cursor-pointer"
                            >
                                Logout
                            </button>
                        ) : (
                            <Link href="/login"><button className="w-full px-4 py-2 bg-black text-white rounded-lg">
                                Login
                            </button> </Link>
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
                <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow">
                    <Link href="/" className="block hover:text-primary font-medium">
                        Home
                    </Link>
                    <Link href="/products" className="hover:text-primary font-medium">
                        Products List
                    </Link>
                    {session ? (<><Link href="/dashboard/add-products" className="hover:text-primary font-medium">
                        Add Products
                    </Link></>) : (<></>)
                    }

                    {session ? (
                        <button
                            onClick={handleLogout}
                            className="w-full px-4 py-2 bg-black text-white rounded-lg"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link href="/login"><button className="w-full px-4 py-2 bg-black text-white rounded-lg">
                            Login
                        </button> </Link>
                    )}
                </div>
            )}
        </nav>
    );
};

export default NavBar;
