"use client";

import Image from "next/image";
import { useState } from "react";

interface GaleryProductProps {
  productData: {
    gallery: string[];
  };
}

export default function GaleryProduct({ productData }: GaleryProductProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const galleryImages = productData.gallery;

  return (
    <section className="py-16 bg-[var(--color-neutral-light-gray)]/20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-neutral-black)] mb-4">
            Product <span className="text-[var(--color-primary)]">Gallery</span>
          </h2>
          <p className="text-lg text-[var(--color-neutral-gray)] max-w-2xl mx-auto">
            View our product details from various perspectives
          </p>
        </div>

        {/* Main Image Display */}
        <div className="mb-8">
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white max-w-4xl mx-auto">
            <Image
              src={galleryImages[selectedImage]}
              alt={`Product image ${selectedImage + 1}`}
              width={800}
              height={600}
              className="w-full h-80 lg:h-96 object-cover"
            />
            <div className="absolute top-4 right-4">
              <div className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-[var(--color-primary)] font-semibold text-sm">
                  {selectedImage + 1} / {galleryImages.length}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((imageUrl, index) => (
              <div
                key={index}
                className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                  selectedImage === index
                    ? "ring-2 ring-[var(--color-primary)] shadow-lg scale-105"
                    : "hover:shadow-md hover:scale-105"
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={imageUrl}
                  alt={`Product thumbnail ${index + 1}`}
                  width={300}
                  height={200}
                  className="w-full h-32 object-cover"
                />
                {selectedImage === index && (
                  <div className="absolute inset-0 bg-[var(--color-primary)]/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
