"use client";

import { motion } from "framer-motion";
import { ContactButtons } from "@/components/shared/contact-buttons";

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-heritage-gradient" aria-labelledby="final-cta">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            id="final-cta"
            className="font-heading text-3xl md:text-5xl text-ivory mb-4"
          >
            Ready for your next stay?
          </h2>
          <p className="text-ivory/70 max-w-xl mx-auto mb-10 leading-relaxed">
            Let our hospitality team help you find the perfect property for your
            next unforgettable experience.
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
