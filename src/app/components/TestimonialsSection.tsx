"use client";

const testimonials = [
  {
    name: "Neha S.",
    text: "Joining My Yoga Studio changed my life. I feel calmer, healthier, and stronger every day.",
  },
  {
    name: "Rajiv P.",
    text: "I’ve never felt more welcome in a space. The instructors truly care and it shows in every class.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-amber-50 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Students Say</h2>
        <div className="grid gap-10 sm:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white p-6 rounded-xl shadow-md">
              <p className="mb-4 text-sm text-gray-700">“{t.text}”</p>
              <h4 className="font-semibold text-green-700">– {t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
