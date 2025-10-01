import Image from "next/image";
import Link from "next/link";

interface Product {
  slug: string;
  title: string;
  description: string;
}

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  // Jika tidak ada produk terkait, tampilkan pesan
  if (!products || products.length === 0) {
    return (
      <section className="py-20 bg-gradient-to-br from-[var(--color-neutral-light-gray)]/20 to-[var(--color-neutral-white)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-neutral-black)] mb-6">
              Related{" "}
              <span className="text-[var(--color-primary)]">Products</span>
            </h2>
            <p className="text-xl text-[var(--color-neutral-gray)] max-w-3xl mx-auto mb-8">
              No related products for this blog.
            </p>
            <Link
              href="/products"
              className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[var(--color-primary-light)] transition-all duration-300 hover:scale-105 shadow-lg flex items-center space-x-2 mx-auto w-fit"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              <span>View All Products</span>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[var(--color-neutral-light-gray)]/20 to-[var(--color-neutral-white)]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-neutral-black)] mb-6">
            Related{" "}
            <span className="text-[var(--color-primary)]">Products</span>
          </h2>
          <p className="text-xl text-[var(--color-neutral-gray)] max-w-3xl mx-auto">
            Discover high-quality Indonesian spice export products
          </p>
        </div>

        {/* Related Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.slug}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105 border border-[var(--color-neutral-light-gray)]/50"
            >
              {/* Product Image */}
              <Link href={`/products/${product.slug}`} className="block">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
                    alt={product.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

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
                  <h3 className="text-lg font-bold text-[var(--color-neutral-black)] mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-200 line-clamp-2 cursor-pointer">
                    {product.title}
                  </h3>
                </Link>

                <p className="text-[var(--color-neutral-gray)] leading-relaxed mb-6 line-clamp-3 text-sm">
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

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[var(--color-primary-light)] transition-all duration-300 hover:scale-105 shadow-lg flex items-center space-x-2 mx-auto w-fit"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <span>View All Products</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
