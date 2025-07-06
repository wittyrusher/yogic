"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/yoga.jpg" alt="Yoga Logo" width={36} height={36} />
          <span className="text-lg font-semibold text-gray-800">My Yoga</span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-6 text-gray-700 text-sm font-medium">
          <Link href="/" className="hover:text-green-600 transition">Home</Link>
          <Link href="/classes" className="hover:text-green-600 transition">Classes</Link>
          <Link href="/about" className="hover:text-green-600 transition">About</Link>
          <Link href="/contact" className="hover:text-green-600 transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
