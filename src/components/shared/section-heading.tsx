"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      {subtitle && (
        <p className="text-saffron text-sm tracking-[0.2em] uppercase mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-forest leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
      <div
        className={cn(
          "mt-6 heritage-divider w-20",
          align === "center" && "mx-auto"
        )}
      />
    </motion.div>
  );
}
