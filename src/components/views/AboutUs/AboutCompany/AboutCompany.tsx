import Image from "next/image";

export default function AboutCompany() {
  return (
    <section className="py-20 bg-gradient-to-br from-[var(--color-neutral-light-gray)]/20 to-[var(--color-neutral-white)] min-h-screen">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-neutral-black)] leading-tight mb-6">
            About{" "}
            <span className="text-[var(--color-accent)]">
              Sultan Rempah Nusantara
            </span>
          </h1>
          <p className="text-xl text-[var(--color-neutral-gray)] leading-relaxed max-w-4xl mx-auto">
            We are a trusted Indonesian spice exporter that connects the wealth
            of Indonesian spices with the global market.
          </p>
        </div>

        {/* Content Section - Image Right, Text Left */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Side - Company Story */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-[var(--color-accent)]">
              OUR STORY
            </h2>
            <div className="space-y-6 text-[var(--color-neutral-black)]">
              <p className="text-lg leading-relaxed">
                Established in 2015, Sultan Rempah Nusantara has become a bridge
                connecting Indonesian spice farmers with international markets.
                We started our journey with a simple vision: bringing
                Indonesia&apos;s finest spices to the world.
              </p>
              <p className="text-lg leading-relaxed">
                With years of experience in the export industry, we have built a
                strong network with local farmers across various regions in
                Indonesia, from Aceh to Papua. Every product we export is
                carefully selected to ensure the best quality.
              </p>
              <p className="text-lg leading-relaxed">
                Our commitment is to provide added value for local farmers while
                meeting strict international quality standards. We believe that
                Indonesian spices have great potential to compete in the global
                market.
              </p>
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-[var(--color-primary)]/10 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">
                  8+
                </div>
                <div className="text-sm text-[var(--color-neutral-gray)]">
                  Years of Experience
                </div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-[var(--color-primary)]/10 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">
                  50+
                </div>
                <div className="text-sm text-[var(--color-neutral-gray)]">
                  Destination Countries
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div>
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="About Sultan Rempah Nusantara"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-3xl p-12 shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Values
            </h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our commitment in every business step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg
                  className="w-8 h-8 text-[var(--color-primary)]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">
                Best Quality
              </h4>
              <p className="text-white/90">
                International standards in every product
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg
                  className="w-8 h-8 text-[var(--color-primary)]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">
                Sustainability
              </h4>
              <p className="text-white/90">
                Supporting farmers and environment
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg
                  className="w-8 h-8 text-[var(--color-primary)]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.91.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75S7 14 17 14s11.25.5 11.25.5S30 12 30 10s-8-2.25-13-3.25S17 8 17 8z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">Trust</h4>
              <p className="text-white/90">
                Transparency and honesty in business
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
