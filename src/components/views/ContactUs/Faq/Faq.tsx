import FaqAccordion from "./FaqAccordion";

export default function Faq() {
  return (
    <section className="py-20 bg-gradient-to-br from-[var(--color-neutral-white)] to-[var(--color-neutral-light-gray)]/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[var(--color-neutral-gray)] max-w-3xl mx-auto">
            Find answers to frequently asked questions about our services
          </p>
        </div>

        <FaqAccordion />

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-white/90 mb-6">
              Our customer service team is ready to help answer your questions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+622112345678"
                className="bg-white text-[var(--color-primary)] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-all duration-200"
              >
                Contact Us
              </a>
              <a
                href="mailto:info@sajpoutbound.com"
                className="bg-[var(--color-accent)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-accent-dark)] transition-all duration-200"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
