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
    <section className="section-padding-sm section-surface-brand" aria-label="Trust indicators">
      <div className="site-container">
        <div className="mx-auto grid max-w-xl grid-cols-2 gap-4 sm:max-w-2xl md:grid-cols-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="type-stat mb-2 text-saffron">{stat.value}</p>
              <p className="text-meta tracking-wide text-ivory/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
