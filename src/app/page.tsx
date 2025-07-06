import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-amber-100 to-lime-100 flex flex-col items-center justify-center text-center p-8">
      {/* Hero Section */}
      <div className="max-w-2xl">
        <Image
          src="/yoga-logo.png" // Replace with your own logo in public folder
          alt="Yoga Logo"
          width={100}
          height={100}
          className="mx-auto mb-6"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Discover Peace Through Yoga
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Reconnect your mind, body, and soul with our personalized yoga sessions.
        </p>
        <a
          href="#classes"
          className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm px-6 py-3 rounded-full shadow-md transition"
        >
          Join a Session
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} My Yoga Studio • All Rights Reserved
      </footer>
    </div>
  );
}
