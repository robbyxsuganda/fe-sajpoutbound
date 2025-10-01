import Image from "next/image";
import blogsData from "@/data/home/blogsShow.json";
import { formatDate } from "@/utils/helpers";

export default function BlogsShow() {
  const blogs = blogsData.blogs;

  return (
    <section className="py-20 bg-gradient-to-br from-[var(--color-neutral-light-gray)]/20 to-[var(--color-neutral-white)]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-neutral-black)] mb-6">
            News &{" "}
            <span className="text-[var(--color-primary)]">Achievements</span>
          </h2>
          <p className="text-xl text-[var(--color-neutral-gray)] max-w-3xl mx-auto">
            Follow the latest developments in Indonesian spice exports and our
            achievements in the global market.
          </p>
        </div>

        {/* Blogs Grid - Responsive Grid untuk 5 data */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105 border border-[var(--color-neutral-light-gray)]/50"
            >
              {/* Blog Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Blog Content */}
              <div className="p-5">
                {/* Date and Source */}
                <div className="mb-3 space-y-1">
                  <p className="text-xs text-[var(--color-neutral-gray)]">
                    <span className="font-semibold">Date:</span>{" "}
                    {formatDate(blog.date)}
                  </p>
                  <p className="text-xs text-[var(--color-neutral-gray)] truncate">
                    <span className="font-semibold">Source:</span> {blog.source}
                  </p>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-[var(--color-primary)] mb-3 leading-tight line-clamp-3">
                  {blog.title}
                </h3>

                {/* Description */}
                <div className="bg-[var(--color-neutral-light-gray)]/40 rounded-lg p-3">
                  <p className="text-xs text-[var(--color-neutral-dark-gray)] leading-relaxed line-clamp-4">
                    &quot;{blog.description}&quot;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
