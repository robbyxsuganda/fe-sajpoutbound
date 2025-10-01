import Image from "next/image";

export default function VisiMisi() {
  return (
    <section className="py-20 bg-gradient-to-br from-[var(--color-neutral-light-gray)]/20 to-[var(--color-neutral-white)] min-h-screen">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header Section - Center */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-neutral-black)] leading-tight mb-6">
            Your Trusted{" "}
            <span className="text-[var(--color-accent)]">
              Indonesian Spice Exporter
            </span>
          </h1>
          <p className="text-xl text-[var(--color-neutral-gray)] leading-relaxed max-w-4xl mx-auto">
            At Sultan Rempah Nusantara, we specialize in exporting the best
            quality spices and agricultural products from Indonesia to the
            global market.
          </p>
        </div>

        {/* Content Section - Image Left, Mission Right */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Left Side - Image */}
          <div>
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Kayu Manis Indonesia"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Side - Mission */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-[var(--color-accent)]">
              OUR MISSION
            </h2>
            <div className="space-y-6 text-[var(--color-neutral-black)]">
              <p className="text-lg leading-relaxed">
                We proudly source cinnamon, cloves, betel nuts, and coffee
                directly from local farmers, ensuring premium quality,
                freshness, and authenticity in every shipment.
              </p>
              <p className="text-lg leading-relaxed">
                Our mission is to connect the world with Indonesias rich spice
                heritage, offering products that meet international quality
                standards and are tailored to the needs of wholesalers,
                distributors, and manufacturers worldwide.
              </p>
            </div>

            {/* Feature Boxes - Smaller and aligned */}
            <div className="grid grid-cols-2 gap-4">
              {/* 100% Natural */}
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-lg border border-[var(--color-primary)]/10 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-[var(--color-accent)] rounded-xl flex items-center justify-center mb-3">
                  <svg
                    className="w-6 h-6 text-[var(--color-primary)]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[var(--color-neutral-black)] mb-2">
                  100% Natural
                </h3>
                <p className="text-sm text-[var(--color-neutral-gray)] leading-relaxed">
                  No artificial additives, pure Indonesian spices.
                </p>
              </div>

              {/* Ethical Sourcing */}
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-lg border border-[var(--color-primary)]/10 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-[var(--color-accent)] rounded-xl flex items-center justify-center mb-3">
                  <svg
                    className="w-6 h-6 text-[var(--color-primary)]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[var(--color-neutral-black)] mb-2">
                  Ethical Sourcing
                </h3>
                <p className="text-sm text-[var(--color-neutral-gray)] leading-relaxed">
                  Direct partnerships with local farmers.
                </p>
              </div>
            </div>

            {/* CTA Button - Center */}
            <div className="text-center pt-4">
              <a
                href="/aboutUs"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-accent)] text-[var(--color-neutral-black)] font-bold text-lg rounded-xl hover:bg-[var(--color-accent-dark)] transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Learn More About Us
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
