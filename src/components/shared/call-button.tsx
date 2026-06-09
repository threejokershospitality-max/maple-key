"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getPhoneUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const pulseTransition = {
  duration: 2.2,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

interface CallButtonProps {
  size?: "default" | "sm" | "lg";
  className?: string;
  label?: string;
  showLabel?: boolean;
  theme?: "light" | "dark";
  fullWidth?: boolean;
}

export function CallPhoneIcon({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-flex shrink-0", className)}>
      <motion.span
        aria-hidden="true"
        className="absolute -inset-1.5 rounded-full bg-saffron/25"
        animate={{ opacity: [0.2, 0.55, 0.2], scale: [1, 1.2, 1] }}
        transition={pulseTransition}
      />
      <motion.span
        className="relative inline-flex"
        animate={{ rotate: [0, -8, 8, 0] }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 1],
        }}
      >
        <Phone className="h-4 w-4" />
      </motion.span>
    </span>
  );
}

export function CallButton({
  size = "default",
  className,
  label = "Call Now",
  showLabel = true,
  theme = "light",
  fullWidth = false,
}: CallButtonProps) {
  const callClass =
    theme === "dark"
      ? "bg-ivory text-forest shadow-luxury hover:bg-ivory/90 border-0"
      : undefined;

  return (
    <motion.div
      className={cn("relative inline-flex", fullWidth && "w-full")}
      animate={{ scale: [1, 1.02, 1] }}
      transition={pulseTransition}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-0.5 rounded-sm bg-saffron/25"
        animate={{ opacity: [0.15, 0.45, 0.15] }}
        transition={pulseTransition}
      />
      <Button
        asChild
        size={size}
        variant="default"
        className={cn("relative", fullWidth && "w-full", callClass, className)}
      >
        <a href={getPhoneUrl()} className="inline-flex items-center gap-2">
          <CallPhoneIcon />
          {showLabel && label}
        </a>
      </Button>
    </motion.div>
  );
}

interface CallLinkProps {
  phone: string;
  className?: string;
  children: React.ReactNode;
}

export function CallLink({ phone, className, children }: CallLinkProps) {
  return (
    <motion.a
      href={`tel:${phone}`}
      className={cn("inline-flex items-center gap-2", className)}
      whileHover={{ x: 2 }}
      whileTap={{ scale: 0.98 }}
    >
      <CallPhoneIcon />
      {children}
    </motion.a>
  );
}

export function CallIconLink({ className }: { className?: string }) {
  return (
    <motion.a
      href={getPhoneUrl()}
      className={cn(
        "relative flex flex-col items-center gap-1 px-4 py-2 text-ivory/80 transition-colors hover:text-saffron",
        className
      )}
      aria-label="Call us"
      whileTap={{ scale: 0.95 }}
    >
      <CallPhoneIcon className="[&_svg]:h-5 [&_svg]:w-5" />
      <span className="text-[10px]">Call</span>
    </motion.a>
  );
}
