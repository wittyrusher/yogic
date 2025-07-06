"use client";

export default function HeroSection() {
  return (
    <main className="relative h-[calc(100vh-64px)] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/homeyoga.jpg')" }}
      />

      {/* Overlay (optional) */}
      <div className="absolute inset-0 bg-transperent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover Peace Through Yoga
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
          Reconnect your mind, body, and soul with our personalized yoga sessions.
        </p>
        <a
          href="/classes"
          className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm px-6 py-3 rounded-full shadow-md transition"
        >
          Join a Session
        </a>
      </div>
    </main>
  );
}
