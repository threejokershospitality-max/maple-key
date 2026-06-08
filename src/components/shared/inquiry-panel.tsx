"use client";

import { ContactButtons } from "@/components/shared/contact-buttons";

interface InquiryPanelProps {
  propertyName?: string;
  variant?: "sticky" | "inline";
  theme?: "light" | "dark";
  size?: "default" | "sm" | "lg";
  className?: string;
}

export function InquiryPanel({
  propertyName,
  variant = "inline",
  theme = "light",
  size = "default",
  className,
}: InquiryPanelProps) {
  if (variant === "sticky") {
    return (
      <div className="hidden lg:block sticky top-24">
        <div className="bg-ivory border border-beige rounded-sm p-6 shadow-luxury">
          <h3 className="font-heading text-xl text-forest mb-2">
            Interested in this stay?
          </h3>
          <p className="text-sm text-charcoal/70 mb-6">
            Contact our hospitality team for availability and personalized
            assistance.
          </p>
          <ContactButtons
            propertyName={propertyName}
            layout="stack"
            fullWidth
            theme={theme}
            size={size}
          />
        </div>
      </div>
    );
  }

  return (
    <ContactButtons
      propertyName={propertyName}
      theme={theme}
      size={size}
      className={className}
    />
  );
}
