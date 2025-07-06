"use client";

const teachers = [
  {
    name: "Anjali Mehta",
    style: "Hatha & Yin Yoga",
    image: "/female.jpg",
  },
  {
    name: "Ravi Sharma",
    style: "Power & Vinyasa Flow",
    image: "/male.jpg",
  },
];

import Image from "next/image";

export default function TeachersSection() {
  return (
    <section className="py-24 px-6 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Meet Our Instructors</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-10">
          {teachers.map((t) => (
            <div key={t.name} className="text-center">
              <Image
                src={t.image}
                alt={t.name}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.style}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
