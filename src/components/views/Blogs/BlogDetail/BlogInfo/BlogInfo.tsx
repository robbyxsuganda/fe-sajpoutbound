import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/utils/helpers";

interface Blog {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  image: string;
  source: string;
  date: string;
  category: string;
  content: string;
}

interface BlogInfoProps {
  blog: Blog;
}

export default function BlogInfo({ blog }: BlogInfoProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-[var(--color-neutral-light-gray)]/20 to-[var(--color-neutral-white)]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Blog Meta Information */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-[var(--color-neutral-light-gray)]/30">
          {/* Date and Source */}
          <div className="flex flex-wrap items-center gap-6 mb-8 text-sm">
            <div className="flex items-center space-x-3 bg-[var(--color-primary)]/5 px-4 py-2 rounded-full">
              <svg
                className="w-5 h-5 text-[var(--color-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="font-semibold text-[var(--color-primary)]">
                Date:
              </span>
              <span className="text-[var(--color-neutral-dark-gray)]">
                {formatDate(blog.date)}
              </span>
            </div>
            <div className="flex items-center space-x-3 bg-blue-50 px-4 py-2 rounded-full">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
              <span className="font-semibold text-blue-600">Source:</span>
              <Link
                href={blog.source}
                className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                {blog.source}
              </Link>
            </div>
            <div className="flex items-center space-x-3 bg-green-50 px-4 py-2 rounded-full">
              <svg
                className="w-5 h-5 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
              <span className="font-semibold text-green-600">Category:</span>
              <span className="bg-[var(--color-primary)] text-white px-3 py-1 rounded-full text-xs font-bold">
                {blog.category}
              </span>
            </div>
          </div>

          {/* Main Blog Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden mb-10 group">
            <Image
              src={blog.image}
              alt={blog.title}
              width={800}
              height={500}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
          </div>

          {/* Blog Title */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-neutral-black)] mb-4 leading-tight">
              {blog.title}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] mx-auto rounded-full"></div>
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none">
            {/* Description */}
            <div className="bg-gradient-to-r from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 mb-10 border-l-4 border-[var(--color-primary)]">
              <p className="text-lg text-[var(--color-neutral-dark-gray)] leading-relaxed mb-0 font-medium">
                {blog.description}
              </p>
            </div>

            {/* Dynamic Content from JSON */}
            <div
              className="blog-content space-y-6"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-accent)] rounded-2xl p-10 text-center text-white mt-10 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">
                  Interested in Exporting Spices?
                </h3>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Contact our team for consultation and assistance in exporting
                  Indonesian spices to the global market
                </p>
                <Link
                  href="/contactUs"
                  className="bg-white text-[var(--color-primary)] px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl inline-flex items-center space-x-3 group"
                >
                  <span>Contact Us Now</span>
                  <svg
                    className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
