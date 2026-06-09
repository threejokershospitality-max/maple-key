"use client";

import { motion } from "framer-motion";
import { ContactButtons } from "@/components/shared/contact-buttons";
import { cn } from "@/lib/utils";

interface FinalCTAProps {
  subtitle?: string;
  title?: string;
  description?: string;
  className?: string;
}

export function FinalCTA({
  subtitle,
  title = "Ready for your next stay?",
  description = "Let our hospitality team help you find the perfect property for your next unforgettable experience.",
  className,
}: FinalCTAProps) {
  return (
    <section
      className={cn("section-padding section-surface-brand", className)}
      aria-labelledby="final-cta"
    >
      <div className="site-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {subtitle && <p className="eyebrow mb-3">{subtitle}</p>}
          <h2
            id="final-cta"
            className="font-heading text-3xl md:text-5xl text-ivory mb-4"
          >
            {title}
          </h2>
          <p className="text-ivory/70 max-w-xl mx-auto mb-10 leading-relaxed">
            {description}
          </p>

          <ContactButtons
            size="lg"
            theme="dark"
            whatsappLabel="WhatsApp Inquiry"
            className="justify-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
