export default function FormMessage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-6">
            Send Message
          </h2>
          <p className="text-xl text-[var(--color-neutral-gray)] max-w-3xl mx-auto">
            Contact us for consultation or more information about our logistics
            services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form className="bg-white rounded-2xl shadow-xl p-8 md:p-12 min-h-[600px] flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-[var(--color-neutral-black)] mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  className="w-full px-4 py-3 border border-[var(--color-neutral-light-gray)] rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[var(--color-neutral-black)] mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-[var(--color-neutral-light-gray)] rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200"
                  placeholder="contoh@email.com"
                />
              </div>

              {/* Company Name */}
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-semibold text-[var(--color-neutral-black)] mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  className="w-full px-4 py-3 border border-[var(--color-neutral-light-gray)] rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200"
                  placeholder="Your company name"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-semibold text-[var(--color-neutral-black)] mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                  className="w-full px-4 py-3 border border-[var(--color-neutral-light-gray)] rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200"
                  placeholder="+62 812 3456 7890"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-[var(--color-neutral-black)] mb-2"
              >
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 border border-[var(--color-neutral-light-gray)] rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200"
              >
                <option value="">Select message subject</option>
                <option value="1">Logistics Consultation</option>
                <option value="2">Price Information</option>
                <option value="3">Business Partnership</option>
              </select>
            </div>

            {/* Message */}
            <div className="mb-8 flex-1">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-[var(--color-neutral-black)] mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 border border-[var(--color-neutral-light-gray)] rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Write your message here..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
