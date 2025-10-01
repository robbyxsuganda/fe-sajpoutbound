"use client";

export default function Location() {
  return (
    <section className="py-20 bg-gradient-to-br from-[var(--color-neutral-light-gray)]/30 to-[var(--color-neutral-white)]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-neutral-black)] mb-6">
            Our <span className="text-[var(--color-primary)]">Location</span>
          </h2>
          <p className="text-xl text-[var(--color-neutral-gray)] max-w-3xl mx-auto">
            Find our office and facilities on the interactive map. We are ready
            to serve you with the best service.
          </p>
        </div>

        {/* Map Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-[var(--color-neutral-light-gray)]/50 overflow-hidden">
          <div className="h-96 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.325!2d106.806!3d-6.597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzUnNDkuMiJTIDEwNsKwNDgnMjEuNiJF!5e0!3m2!1sen!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SAJP Office Location"
            />
          </div>

          {/* Map Info Overlay */}
          <div className="p-6 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]">
            <div className="flex items-center justify-center space-x-4 text-white">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span className="font-semibold">
                  SAJP Outbound - Tangerang, Banten
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
