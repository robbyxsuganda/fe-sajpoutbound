import bannerData from "@/data/home/banner.json";
import { Star, ArrowRight, BadgeCheck, Bell, Heart, ChevronDown, Package, TrendingUp, Globe, Award } from "lucide-react";

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

      {/* Simplified Overlay - Better Contrast & Readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-dark)]/85 via-black/75 to-black/90"></div>

      {/* Accent Gradient for Visual Interest */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary-dark)]/20 via-transparent to-transparent"></div>

      {/* Abstract Floating Elements - Asymmetric Layout */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left - Rotated Text */}
        <div className="absolute top-32 left-12 transform -rotate-90 origin-left hidden xl:block">
          <div className="text-white/15 text-7xl font-bold tracking-wider">INDONESIA</div>
        </div>

        {/* Middle Right - Large Number */}
        <div className="absolute top-1/3 right-16 hidden lg:block">
          <div className="text-white/10 text-[12rem] font-bold leading-none">01</div>
        </div>

        {/* Bottom Left - Italic Quote */}
        <div className="absolute bottom-32 left-20 hidden lg:block max-w-xs">
          <div className="text-white/20 text-2xl italic font-light leading-relaxed">
            "Authentic flavors from the heart of Indonesia"
          </div>
        </div>

        {/* Top Right Corner - Small Badge Text */}
        <div className="absolute top-24 right-32 hidden lg:block">
          <div className="text-white/25 text-sm font-medium tracking-[0.3em] uppercase rotate-12">
            Est. 2009
          </div>
        </div>

        {/* Middle Left - Vertical Line with Text */}
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 hidden lg:block">
          <div className="flex items-center gap-4">
            <div className="w-px h-32 bg-white/20"></div>
            <div className="text-white/30 text-xs tracking-widest uppercase writing-mode-vertical transform rotate-180">
              Premium Quality
            </div>
          </div>
        </div>

        {/* Scattered Organic Shapes */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-white/5 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 border border-white/10 rotate-45"></div>

        {/* Floating Small Text Elements */}
        <div className="absolute top-2/3 right-1/3 text-white/15 text-xs tracking-[0.5em] uppercase hidden lg:block">Organic</div>
        <div className="absolute top-1/2 left-1/4 text-white/15 text-xs tracking-[0.5em] uppercase hidden lg:block">Export</div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Main Heading - Left Aligned */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl animate-in fade-in slide-in-from-bottom-6 duration-1000 text-left">
          <span className="block mb-2">
            Bringing Indonesia&apos;s
          </span>
          <span className="bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-light)] to-[var(--color-accent)] bg-clip-text text-transparent">
            Finest Spices
          </span>
          <span className="block mt-2">
            to the World
          </span>
        </h1>

        {/* Value Proposition */}
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-10 max-w-3xl leading-relaxed drop-shadow-lg font-light animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 text-left">
          We source the highest quality cinnamon, cloves, betel nuts, and premium coffee directly from Indonesian farmers. Our commitment to excellence ensures every product meets international export standards while preserving authentic flavors and supporting local communities. Experience the rich heritage and unmatched quality of Indonesia&apos;s finest agricultural treasures.
        </p>

        {/* Dual CTA Pattern - Simplified */}
        <div className="flex flex-col sm:flex-row gap-4 items-start mb-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          {/* Primary CTA */}
          <a
            href={bannerData.link.href}
            className="group relative bg-[var(--color-primary)] text-white px-8 py-3.5 rounded-xl text-base font-medium hover:bg-[var(--color-primary-light)] transition-all duration-300 hover:scale-[1.02] shadow-lg min-w-[180px]"
          >
            <span className="relative flex items-center justify-center gap-2">
              {bannerData.link.text}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          {/* Secondary CTA */}
          <a
            href="/products"
            className="group relative bg-white/10 backdrop-blur-sm text-white px-8 py-3.5 rounded-xl text-base font-medium border border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] min-w-[180px]"
          >
            <span className="relative flex items-center justify-center gap-2">
              View Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>

        {/* Trust Indicators - Social Proof */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm animate-in fade-in duration-1000 delay-500">
          <div className="flex items-center gap-2">
            <BadgeCheck className="w-5 h-5 text-[var(--color-accent)]" />
            <span className="font-medium">100% Certified Organic</span>
          </div>
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-[var(--color-accent)]" />
            <span className="font-medium">Direct From Source</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[var(--color-accent)]" />
            <span className="font-medium">Trusted by 500+ Businesses</span>
          </div>
        </div>
      </div>

      {/* Tagline Scroller */}
      <div className="relative z-10 mt-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-white/60 text-sm md:text-base font-light tracking-wide">
            <span className="hover:text-white transition-colors duration-300">Direct from Indonesian Farmers</span>
            <span className="text-white/30">•</span>
            <span className="hover:text-white transition-colors duration-300">Premium Grade Selection</span>
            <span className="text-white/30">•</span>
            <span className="hover:text-white transition-colors duration-300">Export Quality Assured</span>
            <span className="text-white/30">•</span>
            <span className="hover:text-white transition-colors duration-300">Global Shipping Available</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-[var(--color-accent)]" />
      </div>
    </section>
  );
}
