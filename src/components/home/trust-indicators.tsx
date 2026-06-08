"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";

const stats = [
  {
    value: `${siteConfig.stats.guestSatisfaction}%`,
    label: "Guest Satisfaction",
  },
  { value: `${siteConfig.stats.properties}+`, label: "Curated Properties" },
  { value: `${siteConfig.stats.cities}`, label: "Destinations" },
  { value: `${siteConfig.stats.yearsHosting}+`, label: "Years of Excellence" },
];

export function TrustIndicators() {
  return (
    <section className="py-16 bg-heritage-gradient" aria-label="Trust indicators">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-heading text-3xl md:text-4xl text-saffron mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-ivory/70 tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
