"use client";

export default function CallToAction() {
  return (
    <section className="bg-green-600 text-white py-20 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Journey Today</h2>
      <p className="text-lg mb-8">
        Whether you&apos;re a beginner or seasoned yogi, we have a space just for you.
      </p>
      <a
        href="/contact"
        className="inline-block bg-white text-green-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
      >
        Book a Free Trial
      </a>
    </section>
  );
}
