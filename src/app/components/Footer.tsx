import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-20 px-6 py-10 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-6">
        {/* Left: Brand & Note */}
        <div>
          <h3 className="text-lg font-semibold mb-2">My Yoga Studio</h3>
          <p className="max-w-sm">
            Embrace peace, strength, and flexibility. Join us on a journey of inner growth and wellness.
          </p>
        </div>

        {/* Right: Nav Links */}
        <div className="flex flex-col gap-2 sm:text-right">
          <Link href="/" className="hover:underline hover:text-green-600">Home</Link>
          <Link href="#classes" className="hover:underline hover:text-green-600">Classes</Link>
          <Link href="#about" className="hover:underline hover:text-green-600">About</Link>
          <Link href="#contact" className="hover:underline hover:text-green-600">Contact</Link>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} My Yoga Studio — All rights reserved.
      </div>
    </footer>
  );
}
