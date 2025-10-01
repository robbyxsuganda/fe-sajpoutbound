import Image from "next/image";
import productsData from "@/data/home/producsShow.json";

export default function ProductsShow() {
  const { products } = productsData;

  return (
    <section className="py-20 bg-gradient-to-br from-[var(--color-neutral-light-gray)]/30 to-[var(--color-neutral-white)]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-neutral-black)] mb-6">
            Premium Indonesian Spices for{" "}
            <span className="text-[var(--color-primary)]">Global Trade</span>
          </h2>
          <p className="text-xl text-[var(--color-neutral-gray)] max-w-3xl mx-auto">
            We offer a wide range of export-quality products, sourced directly
            from Indonesia&apos;s finest growing regions.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.slug}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105"
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Product Content */}
              <div className="p-4 flex flex-col justify-between">
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                  {product.title}
                </h3>
                <p className="text-[var(--color-neutral-gray)] text-sm mb-4 line-clamp-3">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={`rating-${i}`}
                        className="w-4 h-4 text-[var(--color-accent)]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-[var(--color-primary)]">
                    {product.category} Quality
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
