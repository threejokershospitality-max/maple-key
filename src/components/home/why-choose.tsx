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
    <section className="py-20 lg:py-28 bg-accent/30" aria-labelledby="why-choose">
      <div className="container mx-auto px-4 lg:px-8">
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
                className="bg-ivory p-8 rounded-sm shadow-luxury hover:shadow-luxury-lg transition-shadow duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6 text-forest" />
                </div>
                <h3 className="font-heading text-xl text-forest mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
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
