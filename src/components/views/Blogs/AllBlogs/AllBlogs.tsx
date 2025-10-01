import Image from "next/image";
import Link from "next/link";
import blogsData from "@/data/blogs/blogs.json";

export default function AllBlogs() {
  const blogs = blogsData.blogs;

  return (
    <section className="py-20 bg-gradient-to-br from-[var(--color-neutral-light-gray)]/20 to-[var(--color-neutral-white)]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-neutral-black)] mb-6">
            All News &{" "}
            <span className="text-[var(--color-primary)]">Achievements</span>
          </h2>
          <p className="text-xl text-[var(--color-neutral-gray)] max-w-3xl mx-auto">
            Complete collection of news and achievements of Indonesian spice
            exports in the global market.
          </p>
        </div>

        {/* Blogs Grid - Responsive Grid untuk 12 data */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105 border border-[var(--color-neutral-light-gray)]/50"
            >
              {/* Blog Image - Clickable */}
              <Link href={`/blogs/${blog.slug}`} className="block">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={256}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Blog Content */}
              <div className="p-5">
                {/* Date and Source */}
                <div className="mb-3 space-y-1">
                  <p className="text-xs text-[var(--color-neutral-gray)]">
                    <span className="font-semibold">Date:</span> {blog.date}
                  </p>
                  <p className="text-xs text-[var(--color-neutral-gray)] truncate">
                    <span className="font-semibold">Source:</span> {blog.source}
                  </p>
                </div>

                {/* Title - Clickable */}
                <Link href={`/blogs/${blog.slug}`}>
                  <h3 className="text-sm font-bold text-[var(--color-primary)] mb-3 leading-tight line-clamp-3 cursor-pointer group-hover:text-[var(--color-primary-dark)] transition-colors duration-200">
                    {blog.title}
                  </h3>
                </Link>

                {/* Description */}
                <div className="bg-[var(--color-neutral-light-gray)]/40 rounded-lg p-3">
                  <p className="text-xs text-[var(--color-neutral-dark-gray)] leading-relaxed line-clamp-4">
                    &quot;{blog.excerpt}&quot;
                  </p>
                </div>

                {/* Read More Button */}
                <div className="mt-4">
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="w-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white py-2 px-4 rounded-lg text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 group"
                  >
                    <span>Read More</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
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
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination atau Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[var(--color-primary-light)] transition-all duration-300 hover:scale-105 shadow-lg flex items-center space-x-2 mx-auto">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span>Load More</span>
          </button>
        </div>
      </div>
    </section>
  );
}
