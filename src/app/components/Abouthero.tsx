"use client";

export default function AboutHero() {
  return (
    <section className="bg-white text-gray-800 py-20 px-6 md:px-12 mt-3">
      <div className="max-w-5xl mx-auto text-center mb-12 mt-5">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-gray-600 text-lg">
          At My Yoga Studio, we believe in a holistic approach to well-being.
          Our passion is to guide individuals on a transformative journey
          toward inner peace, strength, and balance.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto text-left">
        {/* Vision */}
        <div className="bg-rose-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2 text-rose-700">Our Vision</h3>
          <p className="text-sm text-gray-700">
            To create a peaceful and welcoming space where everyone can connect
            with their inner self and achieve mental, physical, and emotional harmony.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-amber-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2 text-amber-700">Our Mission</h3>
          <p className="text-sm text-gray-700">
            To deliver accessible, authentic, and enriching yoga experiences that
            empower individuals to lead healthier and more mindful lives.
          </p>
        </div>

        {/* Values */}
        <div className="bg-lime-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-2 text-lime-700">Our Core Values</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Compassion & Kindness</li>
            <li>Balance & Discipline</li>
            <li>Community & Growth</li>
            <li>Authenticity & Integrity</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
