"use client";

import { motion } from "framer-motion";
import {
  Wifi,
  Car,
  Tv,
  Wind,
  ChefHat,
  Zap,
  Laptop,
  Shield,
} from "lucide-react";
import { amenities } from "@/data/homepage";
import { SectionHeading } from "@/components/shared/section-heading";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wifi,
  Car,
  Tv,
  Wind,
  ChefHat,
  Zap,
  Laptop,
  Shield,
};

export function AmenitiesHighlight() {
  return (
    <section className="py-20 lg:py-28 bg-ivory" aria-labelledby="amenities">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          subtitle="Every Detail Considered"
          title="Premium Amenities"
          description="Every property comes equipped with thoughtfully curated amenities for a seamless stay."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {amenities.map((amenity, i) => {
            const Icon = iconMap[amenity.icon] || Wifi;
            return (
              <motion.div
                key={amenity.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-saffron/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-forest" />
                </div>
                <h3 className="font-medium text-forest text-sm mb-1">
                  {amenity.name}
                </h3>
                <p className="text-xs text-charcoal/60">{amenity.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
