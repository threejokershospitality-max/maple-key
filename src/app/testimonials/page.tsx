import { Metadata } from "next";
import Link from "next/link";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/lib/config";
import { createMetadata } from "@/lib/seo";
import { BrandHero } from "@/components/shared/brand-hero";
import { StarRating } from "@/components/shared/star-rating";
import { GuestReviewAvatar } from "@/components/shared/guest-review-avatar";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata: Metadata = createMetadata({
  title: "Testimonials",
  description:
    "Read genuine reviews from guests who experienced Maple & Key's curated luxury stays in Varanasi.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  const { averageRating, totalReviews, guestSatisfaction } = siteConfig.stats;

  return (
    <div className="pt-20">
      <BrandHero
        subtitle="Guest Stories"
        title="What Our Guests Say"
        description="Real experiences from travelers who chose Maple & Key."
      >
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-nowrap items-center justify-center gap-2">
            <StarRating
              rating={averageRating}
              starClassName="h-4 w-4 sm:h-5 sm:w-5"
            />
            <span className="whitespace-nowrap text-xs font-medium text-ivory/90 sm:text-sm">
              {averageRating} average from {totalReviews}+ reviews
            </span>
          </div>
          <div className="grid w-full max-w-3xl grid-cols-1 gap-6 md:grid-cols-3">
            <div className="surface-card p-5 text-center">
              <p className="type-stat text-saffron">{guestSatisfaction}%</p>
              <p className="text-meta mt-1">Guest Satisfaction</p>
            </div>
            <div className="surface-card p-5 text-center">
              <p className="type-stat text-saffron">40%</p>
              <p className="text-meta mt-1">Repeat Guests</p>
            </div>
            <div className="surface-card p-5 text-center">
              <p className="type-stat text-saffron">{averageRating}</p>
              <p className="text-meta mt-1">Average Rating</p>
            </div>
          </div>
        </div>
      </BrandHero>

      <section className="section-padding-sm">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <article key={t.id} className="surface-card relative p-6 sm:p-8">
                <Quote className="h-8 w-8 text-gold/30 absolute top-6 right-6" />
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-body mb-6">&ldquo;{t.review}&rdquo;</p>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex min-w-0 items-center gap-3">
                    <GuestReviewAvatar name={t.guestName} />
                    <div className="min-w-0">
                      <p className="font-medium text-forest text-sm">
                        {t.guestName}
                      </p>
                      <Link
                        href={`/properties/${t.propertySlug}`}
                        className="text-xs text-saffron hover:underline"
                      >
                        {t.propertyName}
                      </Link>
                    </div>
                  </div>
                  <time className="shrink-0 text-xs text-charcoal/50">
                    {t.date}
                  </time>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
