"use client";

import Image from "next/image";

type Props = {
  name: string;
  description: string;
  image: string;
};

export default function YogaClassCard({ name, description, image }: Props) {
  return (
    <div className="w-full h-80 bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition border border-gray-100">
      {/* Image 75% */}
      <div className="relative h-3/4 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Info 25% */}
      <div className="h-1/4 p-3 bg-white">
        <h2 className="text-md font-semibold truncate">{name}</h2>
        <p className="text-xs text-gray-600 line-clamp-2">{description}</p>
      </div>
    </div>
  );
}
