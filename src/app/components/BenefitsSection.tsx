"use client";

import { Heart, Smile, Clock, Brain, Move, Mountain } from "lucide-react";

const benefits = [
  { icon: <Move />, title: "Improves Flexibility" },
  { icon: <Heart />, title: "Boosts Heart Health" },
  { icon: <Clock />, title: "Reduces Stress" },
  { icon: <Brain />, title: "Sharpens Focus" },
  { icon: <Smile />, title: "Elevates Mood" },
  { icon: <Mountain />, title: "Builds Strength" },
];

export default function BenefitsSection() {
  return (
    <section className="py-24 px-6 bg-lime-50 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Why Practice Yoga?</h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {benefits.map((b, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div className="p-4 rounded-full bg-white shadow">{b.icon}</div>
              <h3 className="font-semibold text-lg">{b.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
