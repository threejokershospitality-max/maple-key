"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { stayCategories } from "@/data/homepage";
import { SectionHeading } from "@/components/shared/section-heading";

export function StayCategories() {
  return (
    <section className="py-20 lg:py-28 bg-ivory" aria-labelledby="stay-categories">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          subtitle="Find Your Perfect Stay"
          title="Stay Categories"
          description="Whether it's a family vacation, spiritual journey, or weekend escape, we have the perfect stay for you."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stayCategories.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={`/properties?category=${category.slug}`}
                className="group block relative aspect-[3/2] overflow-hidden rounded-sm"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-xl text-ivory group-hover:text-saffron transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-ivory/70 mt-1">
                    {category.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
