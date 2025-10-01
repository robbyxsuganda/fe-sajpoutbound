export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]">
      <div className="container mx-auto px-4 text-center max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Contact us today for a consultation and let us help you with your
          logistics needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[var(--color-secondary)] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[var(--color-secondary-light)] transition-all duration-300 hover:scale-105 shadow-lg">
            Contact Us Now
          </button>
          <button className="bg-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg border border-white/20">
            View Products
          </button>
        </div>
      </div>
    </section>
  );
}
