import Image from "next/image";
import reviewsData from "@/data/home/reviews.json";

const StarIcon = () => (
  <svg
    className="w-5 h-5 text-[var(--color-accent)]"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function Reviews() {
  const reviews = reviewsData.reviews;

  return (
    <section className="py-20 bg-gradient-to-br from-[var(--color-neutral-light-gray)]/30 to-[var(--color-neutral-white)]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-[var(--color-accent)] font-bold text-lg tracking-wider uppercase">
              Happy Clients
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[var(--color-neutral-black)] mt-4 mb-6">
            What Our Customers Are Saying
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-[var(--color-neutral-light-gray)]/50"
            >
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(review.rating)].map((_, index) => (
                  <StarIcon key={index} />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-center mb-6">
                <p className="text-[var(--color-neutral-gray)] italic text-sm leading-relaxed">
                  &quot;{review.review}&quot;
                </p>
              </blockquote>

              {/* Customer Info */}
              <div className="text-center">
                <div className="w-14 h-14 rounded-full mx-auto mb-3 overflow-hidden border-4 border-[var(--color-primary)] shadow-lg">
                  <Image
                    src={
                      review.avatar ||
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                    }
                    alt={review.name}
                    className="w-full h-full object-cover"
                    width={100}
                    height={100}
                  />
                </div>
                <h4 className="text-lg font-bold text-[var(--color-neutral-black)]">
                  {review.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
