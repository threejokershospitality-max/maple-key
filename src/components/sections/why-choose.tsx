"use client";

import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  Heart,
  MapPin,
  Users,
  Compass,
} from "lucide-react";
import { whyChooseFeatures } from "@/data/homepage";
import { SectionHeading } from "@/components/shared/section-heading";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Award,
  ShieldCheck,
  Heart,
  MapPin,
  Users,
  Compass,
};

export function WhyChoose() {
  return (
    <section className="section-padding section-surface-muted" aria-labelledby="why-choose">
      <div className="site-container">
        <SectionHeading
          subtitle="The Maple & Key Difference"
          title="Why Choose Us"
          description="We go beyond accommodation to craft experiences that linger long after checkout."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseFeatures.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Award;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="surface-card p-8 hover:shadow-luxury-lg transition-shadow duration-500"
              >
                <div className="icon-well w-12 h-12 mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="type-card-title mb-3 text-forest">
                  {feature.title}
                </h3>
                <p className="text-body text-charcoal/70">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
