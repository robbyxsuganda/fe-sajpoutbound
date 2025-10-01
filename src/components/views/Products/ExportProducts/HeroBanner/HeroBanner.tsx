export default function HeroBanner() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      />

      {/* Dark Overlay untuk meningkatkan readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Gradient Overlay dengan warna hijau sebagai aksen */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="flex justify-center items-center mb-4">
          <span className="text-white bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] px-6 py-2 rounded-full text-base font-semibold shadow-lg backdrop-blur-sm border border-white/20">
            Our Products
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
          Logistics{" "}
          <span className="bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-light)] to-[var(--color-secondary)] bg-clip-text text-transparent">
            Solutions
          </span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
          Comprehensive transportation and warehouse services to meet your
          business needs
        </p>
      </div>
    </section>
  );
}
