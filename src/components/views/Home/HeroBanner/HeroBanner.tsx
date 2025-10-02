import bannerData from "@/data/home/banner.json";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('${bannerData.image}')`,
        }}
      />

      {/* Simplified Overlay - Better Contrast & Readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-dark)]/85 via-black/75 to-black/90"></div>

      {/* Accent Gradient for Visual Interest */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary-dark)]/20 via-transparent to-transparent"></div>

      {/* Hero Content */}
      <div className="relative text-center z-10 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">
        {/* Pre-title Badge */}
        <div className="mb-4 sm:mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-block bg-gradient-to-r from-[var(--color-secondary-dark)] to-[var(--color-secondary-light)] text-[var(--color-accent)] text-xs sm:text-sm md:text-base lg:text-lg font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-2xl backdrop-blur-md border border-white/30 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,125,28,0.5)]">
            {bannerData.preTitle}
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl animate-in fade-in slide-in-from-bottom-6 duration-1000 bg-gradient-to-r from-white via-white to-[var(--color-accent-light)] bg-clip-text text-transparent">
          {bannerData.title}
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 mx-auto leading-relaxed drop-shadow-lg font-light animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 text-center max-w-4xl">
          {bannerData.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 items-center justify-center mb-12 sm:mb-16 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          {/* Primary CTA */}
          <Link
            href={bannerData.link[0].href}
            className="group relative bg-[var(--color-primary)] text-white px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3.5 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium hover:bg-[var(--color-primary-light)] transition-all duration-300 hover:scale-[1.02] shadow-lg w-full sm:w-auto text-center"
          >
            <span className="relative flex items-center justify-center gap-2">
              {bannerData.link[0].text}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          {/* Secondary CTA */}
          <Link
            href={bannerData.link[1].href}
            className="group relative bg-white/10 backdrop-blur-sm text-white px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3.5 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium border border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] w-full sm:w-auto text-center"
          >
            <span className="relative flex items-center justify-center gap-2">
              {bannerData.link[1].text}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-accent)]" />
      </div>
    </section>
  );
}
