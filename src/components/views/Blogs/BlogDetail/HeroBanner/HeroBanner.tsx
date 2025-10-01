import Link from "next/link";

interface Blog {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  source: string;
  date: string;
  category: string;
}

interface HeroBannerProps {
  blog: Blog;
}

export default function HeroBanner({ blog }: HeroBannerProps) {
  return (
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${blog.image}')`,
        }}
      />

      {/* Dark Overlay untuk meningkatkan readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Gradient Overlay dengan warna hijau sebagai aksen */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="flex justify-center items-center mb-4">
          <span className="text-white bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] px-6 py-2 rounded-full text-base font-semibold shadow-lg backdrop-blur-sm border border-white/20">
            Blog Detail
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
          Logistics{" "}
          <span className="bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-light)] to-[var(--color-secondary)] bg-clip-text text-transparent">
            Insights
          </span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
          Discover the latest tips, trends, and insights about the world of
          logistics and transportation
        </p>

        {/* Breadcrumb */}
        <nav className="flex justify-center items-center space-x-2 text-white/80 text-sm">
          <Link
            href="/"
            className="hover:text-white transition-colors duration-200"
          >
            Home
          </Link>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <Link
            href="/blogs"
            className="hover:text-white transition-colors duration-200"
          >
            Blog
          </Link>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="text-white font-semibold">{blog.title}</span>
        </nav>
      </div>
    </section>
  );
}
