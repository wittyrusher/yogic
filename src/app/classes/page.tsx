"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import YogaClassCard from "../components/YogaClassCard";
import yogaClasses from "../data/yogaClasses"; // Adjust the import path as necessary

export default function ClassesPage() {
  return (
    <>
      <Header />

      <main className="pt-32 pb-20 px-6 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Our Yoga Classes</h1>
          <p className="text-gray-600 text-lg mb-10">
            Explore a variety of sessions designed to suit all levels and intentions.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {yogaClasses.map((cls) => (
              <YogaClassCard
                key={cls.name}
                name={cls.name}
                description={cls.description}
                image={cls.image}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
