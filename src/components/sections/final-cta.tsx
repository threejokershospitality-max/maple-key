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
          <h2 id="final-cta" className="type-page-title mb-4 text-ivory">
            {title}
          </h2>
          <p className="type-lead-inverse mx-auto mb-0 max-w-xl text-ivory/70 xl:mb-10">
            {description}
          </p>

          <ContactButtons
            size="lg"
            theme="dark"
            whatsappLabel="WhatsApp Inquiry"
            className="hidden xl:flex justify-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
