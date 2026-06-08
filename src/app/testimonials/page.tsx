import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/lib/config";
import { createMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/shared/section-heading";
import { StarRating } from "@/components/shared/star-rating";
import { FinalCTA } from "@/components/home/final-cta";

export const metadata: Metadata = createMetadata({
  title: "Testimonials",
  description:
    "Read genuine reviews from guests who experienced Maple & Key's curated luxury stays in Varanasi.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  const { averageRating, totalReviews } = siteConfig.stats;

  return (
    <div className="pt-20">
      <section className="py-16 lg:py-20 bg-accent/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            subtitle="Guest Stories"
            title="What Our Guests Say"
            description="Real experiences from travelers who chose Maple & Key."
          />
          <div className="flex items-center justify-center gap-2 mt-4">
            <StarRating rating={averageRating} />
            <span className="text-forest font-medium">
              {averageRating} average from {totalReviews}+ reviews
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="bg-ivory border border-beige rounded-sm p-8 shadow-luxury relative"
              >
                <Quote className="h-8 w-8 text-gold/20 absolute top-6 right-6" />
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  &ldquo;{t.review}&rdquo;
                </p>

                {t.guestPhotos && t.guestPhotos.length > 0 && (
                  <div className="flex gap-2 mb-6">
                    {t.guestPhotos.map((photo, i) => (
                      <div
                        key={i}
                        className="relative w-20 h-20 rounded-sm overflow-hidden"
                      >
                        <Image
                          src={photo}
                          alt={`Photo by ${t.guestName}`}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src={t.guestImage}
                      alt={t.guestName}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-forest text-sm">
                        {t.guestName}
                      </p>
                      <Link
                        href={`/properties/${t.propertySlug}`}
                        className="text-xs text-gold hover:underline"
                      >
                        {t.propertyName}
                      </Link>
                    </div>
                  </div>
                  <time className="text-xs text-charcoal/50">{t.date}</time>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-heritage-gradient">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-2xl text-ivory mb-4">
            Trusted by Travelers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <p className="font-heading text-3xl text-saffron">98%</p>
              <p className="text-sm text-ivory/70 mt-1">Guest Satisfaction</p>
            </div>
            <div>
              <p className="font-heading text-3xl text-saffron">40%</p>
              <p className="text-sm text-ivory/70 mt-1">Repeat Guests</p>
            </div>
            <div>
              <p className="font-heading text-3xl text-saffron">{averageRating}</p>
              <p className="text-sm text-ivory/70 mt-1">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
