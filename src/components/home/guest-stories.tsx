"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { getFeaturedTestimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/shared/section-heading";

export function GuestStories() {
  const testimonials = getFeaturedTestimonials().slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-accent/30" aria-labelledby="guest-stories">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          subtitle="Guest Stories"
          title="What Our Guests Say"
          description="Real experiences from travelers who chose Maple & Key for their memorable stays."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-ivory p-8 rounded-sm shadow-luxury relative"
            >
              <Quote className="h-8 w-8 text-gold/30 absolute top-6 right-6" />
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-gold text-gold"
                  />
                ))}
              </div>
              <p className="text-charcoal/80 leading-relaxed mb-6 text-sm">
                &ldquo;{t.review}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src={t.guestImage}
                  alt={t.guestName}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-forest text-sm">{t.guestName}</p>
                  <p className="text-xs text-charcoal/60">{t.propertyName}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/testimonials"
            className="text-forest hover:text-saffron transition-colors font-medium text-sm"
          >
            Read All Reviews →
          </Link>
        </div>
      </div>
    </section>
  );
}
