"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="pt-32 pb-20 px-6 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg">
            We'd love to hear from you! Reach out with any questions or to book a class.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Details */}
          <div className="text-left space-y-4">
            <h2 className="text-xl font-semibold">Studio Address</h2>
            <p className="text-gray-700">123 Yoga Lane, Peace City, Bliss State 56789</p>

            <h2 className="text-xl font-semibold">Phone</h2>
            <p className="text-gray-700">+91 98765 43210</p>

            <h2 className="text-xl font-semibold">Email</h2>
            <p className="text-gray-700">hello@myyogastudio.com</p>
          </div>

          {/* Contact Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md shadow transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}
