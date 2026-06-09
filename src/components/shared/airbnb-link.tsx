"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AirbnbLinkProps {
  url: string;
  label?: string;
  className?: string;
  size?: "sm" | "md";
}

export function AirbnbLink({
  url,
  label = "View on Airbnb",
  className,
  size = "sm",
}: AirbnbLinkProps) {
  const dimensions = size === "md" ? 44 : 36;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={cn("relative inline-flex shrink-0 cursor-pointer", className)}
      animate={{ y: [0, -3, 0] }}
      transition={{
        y: {
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.1,
        y: 0,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.92 }}
    >
      <motion.span
        aria-hidden="true"
        className="absolute -inset-1 rounded-full border-2 border-[#FF5A5F]/40"
        animate={{ opacity: [0.25, 0.7, 0.25], scale: [1, 1.08, 1] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <Image
        src="/images/airbnb-logo.png"
        alt=""
        width={dimensions}
        height={dimensions}
        className="relative rounded-full shadow-md transition-shadow hover:shadow-lg"
      />
    </motion.a>
  );
}
