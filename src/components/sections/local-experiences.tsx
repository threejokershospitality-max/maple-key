"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { localExperiences } from "@/data/homepage";
import { SectionHeading } from "@/components/shared/section-heading";

export function LocalExperiences() {
  return (
    <section className="section-padding" aria-labelledby="experiences">
      <div className="site-container">
        <SectionHeading
          subtitle="Beyond the Stay"
          title="Local Experiences"
          description="Immerse yourself in the culture, cuisine, and adventures that make each destination unique."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {localExperiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm"
            >
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-lg text-ivory mb-2">
                  {exp.title}
                </h3>
                <p className="text-sm text-ivory/70">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
