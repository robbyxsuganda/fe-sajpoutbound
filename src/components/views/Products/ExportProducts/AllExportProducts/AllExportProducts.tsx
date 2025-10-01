"use client";

import Image from "next/image";
import Link from "next/link";
import exportProductsData from "@/data/products/exportProduct.json";

export default function AllExportProducts() {
  return (
    <section className="py-20 bg-gradient-to-br from-[var(--color-neutral-light-gray)]/30 to-[var(--color-neutral-white)]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-6">
            Our Export Products
          </h2>
          <p className="text-xl text-[var(--color-neutral-gray)] max-w-3xl mx-auto">
            Helping Indonesian products reach global markets with professional
            and trusted export services
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {exportProductsData.exportProducts.map((product) => (
            <div
              key={product.slug}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105"
            >
              {/* Product Image - Clickable */}
              <Link href={`/products/${product.slug}`} className="block">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-green-500/90 text-white backdrop-blur-sm">
                      EXPORT
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Product Content */}
              <div className="p-6">
                <Link href={`/products/${product.slug}`}>
                  <h3 className="text-xl font-bold text-[var(--color-neutral-black)] mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-200 line-clamp-2 cursor-pointer">
                    {product.title}
                  </h3>
                </Link>

                <p className="text-[var(--color-neutral-gray)] leading-relaxed mb-6 line-clamp-3">
                  {product.description}
                </p>

                <Link
                  href={`/products/${product.slug}`}
                  className="w-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 group"
                >
                  <span>View Product</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
