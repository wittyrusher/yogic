"use client";

import { Flower, Sparkles, Heart, Eye } from "lucide-react";

export default function AboutSection() {
  const sections = [
    {
      id: "why",
      title: "Why Yoga",
      icon: <Flower className="h-8 w-8 text-green-600" />,
      text: `In a world filled with constant noise, pressure, and distraction, yoga offers a path back to balance. It's more than a fitness trend — it's a timeless practice that nurtures physical strength, emotional resilience, and mental clarity. Whether you're navigating daily stress, healing from within, or simply seeking stillness, yoga creates space to breathe, reflect, and grow. It's a reminder that peace doesn't come from outside — it's something we cultivate from within.`,
    },
    {
      id: "how",
      title: "How Yoga Helps",
      icon: <Sparkles className="h-8 w-8 text-green-600" />,
      text: `Yoga works by harmonizing the body, breath, and mind through mindful movement and focused awareness. With consistent practice, it enhances flexibility, builds strength, improves posture, and increases energy. But yoga goes far beyond the physical. Breathing techniques calm the nervous system, while meditation helps develop focus, presence, and emotional regulation. Over time, yoga becomes not just a workout, but a powerful tool for self-discovery and healing.`,
    },
    {
      id: "special",
      title: "What Makes Us Special",
      icon: <Heart className="h-8 w-8 text-green-600" />,
      text: `At My Yoga Studio, we believe that yoga should be welcoming, accessible, and deeply personal. Our space is more than just a studio — it’s a sanctuary where you can come as you are and grow at your own pace. We don’t just teach poses; we create meaningful experiences rooted in mindfulness, joy, and authenticity. With passionate instructors and a strong sense of community, we help you build a consistent practice that fits your lifestyle.`,
    },
    {
      id: "vision",
      title: "Our Vision & Intention",
      icon: <Eye className="h-8 w-8 text-green-600" />,
      text: `We envision a world where people move through life with more presence, peace, and purpose. Yoga, to us, is a way of living — one that brings compassion to action, breath to challenge, and awareness to the present moment. Our intention is simple: to guide, support, and inspire your journey toward wholeness — one breath at a time.`,
    },
  ];

  return (
    <section id="about" className="bg-white text-gray-800 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          About Our Practice
        </h2>

        {sections.map(({ id, title, icon, text }) => (
          <div key={id} className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              {icon}
              <h3 className="text-2xl font-semibold">{title}</h3>
            </div>
            <p className="text-lg leading-relaxed text-gray-700">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
