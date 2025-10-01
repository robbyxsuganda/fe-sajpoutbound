import bannerData from "@/data/home/banner.json";

export default function HeroBanner() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('${bannerData.image}')`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/60 to-black/80"></div>

      {/* Additional overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>

      {/* Hero Content dengan animasi */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Enhanced excerpt badge */}
        <div className="flex justify-center items-center mb-8">
          <div className="relative group">
            <span className="inline-block text-white bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] px-4 py-2 rounded-full text-lg font-bold shadow-2xl backdrop-blur-md border border-white/30 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,125,28,0.5)]">
              {bannerData.excerpt}
            </span>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Enhanced title dengan text effects */}
        <h1 className="text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
          <span className="bg-gradient-to-r from-white via-white to-[var(--color-accent-light)] bg-clip-text text-transparent">
            {bannerData.title}
          </span>
        </h1>

        {/* Enhanced description */}
        <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-light">
          {bannerData.description}
        </p>

        {/* Enhanced CTA button */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href={bannerData.link.href}
            className="group relative bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-secondary-light)] text-white px-8 py-4 rounded-full text-xl font-bold hover:from-[var(--color-secondary-light)] hover:to-[var(--color-secondary)] transition-all duration-500 hover:scale-110 hover:shadow-2xl shadow-xl border-2 border-white/30 backdrop-blur-sm overflow-hidden"
          >
            {/* Button background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <span className="relative flex items-center gap-3">
              {bannerData.link.text}
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
