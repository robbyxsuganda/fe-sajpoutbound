export default function Slogan() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image dengan fixed position */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      />

      {/* Dark Overlay untuk meningkatkan readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Gradient Overlay dengan warna brand */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/30 via-transparent to-[var(--color-secondary)]/20"></div>

      {/* Slogan Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <p className="text-3xl md:text-5xl lg:text-6xl text-white font-bold leading-tight drop-shadow-2xl">
            Your trusted{" "}
            <span className="bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-light)] to-[var(--color-secondary)] bg-clip-text text-transparent">
              Indonesian
            </span>{" "}
            spice exporter
          </p>

          <div className="mt-6">
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed">
              Specializing in premium cinnamon, cloves, betel nut, and coffee.
              Connecting Indonesia&apos;s rich spice heritage with global
              markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
