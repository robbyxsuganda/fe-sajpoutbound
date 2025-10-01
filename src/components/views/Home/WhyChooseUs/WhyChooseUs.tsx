export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-[var(--color-neutral-white)] to-[var(--color-neutral-light-gray)]/30">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Bagian Atas - WE DELIVER MORE THAN JUST SPICES */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[var(--color-primary)] mb-6">
            WE DELIVER MORE
            <br />
            <span className="text-5xl md:text-7xl">THAN JUST SPICES</span>
          </h2>
          <p className="text-xl text-[var(--color-neutral-gray)] max-w-4xl mx-auto mb-12">
            Partner with Sultan Rempah Nusantara for unmatched quality,
            reliability, and global expertise in Indonesian spice exports.
          </p>
        </div>

        {/* 4 Fitur Utama dengan variasi warna */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[var(--color-neutral-black)] mb-3">
              Global Export Expertise
            </h3>
            <p className="text-[var(--color-neutral-gray)]">
              Years of experience shipping worldwide, including Asia, Middle
              East, Europe, and the Americas.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-[var(--color-secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[var(--color-neutral-black)] mb-3">
              Competitive Pricing
            </h3>
            <p className="text-[var(--color-neutral-gray)]">
              Direct sourcing from farmers ensures fair prices without
              compromising on premium quality.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-[var(--color-accent)] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[var(--color-neutral-black)] mb-3">
              On-Time Delivery
            </h3>
            <p className="text-[var(--color-neutral-gray)]">
              Reliable logistics and complete export documentation ensure your
              orders arrive on schedule.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[var(--color-neutral-black)] mb-3">
              Custom Orders
            </h3>
            <p className="text-[var(--color-neutral-gray)]">
              From small LCL shipments to full container loads (FCL) with
              flexible packaging options.
            </p>
          </div>
        </div>

        {/* Bagian Bawah - Why Choose Our Spices? */}
        <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-3xl p-12 shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Spices?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <h4 className="text-2xl font-bold text-white mb-3">
                100% Natural
              </h4>
              <p className="text-white/90">No artificial additives</p>
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
                Sustainable Sourcing
              </h4>
              <p className="text-white/90">Ethical and eco-friendly</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg
                  className="w-8 h-8 text-[var(--color-primary)]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">
                Flexible Packaging
              </h4>
              <p className="text-white/90">
                Bulk sacks, cartons, or custom branding
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
