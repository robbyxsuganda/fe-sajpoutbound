import Image from "next/image";

interface ProductInfoProps {
  productData: {
    slug: string;
    title: string;
    category: string;
    description: string;
    cover: string;
    content: string;
  };
}

export default function ProductInfo({ productData }: ProductInfoProps) {
  // Spesifikasi produk berdasarkan data JSON
  const specifications = [
    { label: "Moisture Content", value: "Maximum 12%" },
    { label: "Purity", value: "99.5%" },
    { label: "Packaging", value: "25kg per bag" },
    { label: "Certification", value: "Halal, ISO 22000" },
    { label: "Shelf Life", value: "24 months" },
  ];

  // Keunggulan produk berdasarkan data JSON
  const benefits = [
    "Strong and distinctive aroma",
    "High essential oil content",
    "Suitable for culinary and industrial use",
    "International export standards",
    "Safe and hygienic packaging",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Image and Specifications */}
          <div className="space-y-6">
            {/* Product Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src={productData.cover}
                alt={productData.title}
                width={800}
                height={600}
                className="w-full h-96 lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-[var(--color-primary)] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {productData.category}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <svg
                    className="w-4 h-4 text-[var(--color-accent)]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-semibold text-[var(--color-neutral-black)]">
                    5.0
                  </span>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-white border border-[var(--color-neutral-light-gray)] rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[var(--color-neutral-black)] mb-4">
                Product Specifications
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-[var(--color-neutral-light-gray)]/50"
                  >
                    <span className="text-[var(--color-neutral-gray)] font-medium">
                      {spec.label}
                    </span>
                    <span className="text-[var(--color-neutral-black)] font-semibold">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Product Information */}
          <div className="space-y-6">
            {/* Title */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-[var(--color-neutral-black)] mb-4 leading-tight">
                {productData.title}
              </h1>
              <p className="text-[var(--color-neutral-gray)] text-lg leading-relaxed">
                {productData.description}
              </p>
            </div>

            {/* Content */}
            <div className="bg-[var(--color-neutral-light-gray)]/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[var(--color-neutral-black)] mb-3">
                Product Description
              </h3>
              <p className="text-[var(--color-neutral-gray)] leading-relaxed">
                {productData.content}
              </p>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-r from-[var(--color-primary)]/5 to-[var(--color-primary-light)]/5 border border-[var(--color-primary)]/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4">
                Product Advantages
              </h3>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-[var(--color-neutral-dark-gray)]">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-[var(--color-primary)] text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-[var(--color-primary-dark)] transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                  />
                </svg>
                <span>Order Now</span>
              </button>
              <button className="flex-1 bg-white border-2 border-[var(--color-primary)] text-[var(--color-primary)] py-4 px-6 rounded-xl font-bold text-lg hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span>Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
