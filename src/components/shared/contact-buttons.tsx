"use client";

import { Phone, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  getPhoneUrl,
  getWhatsAppUrl,
  getEmailUrl,
  getPropertyWhatsAppUrl,
} from "@/lib/whatsapp";

interface ContactButtonsProps {
  propertyName?: string;
  emailSubject?: string;
  size?: "default" | "sm" | "lg";
  layout?: "row" | "stack";
  theme?: "light" | "dark";
  fullWidth?: boolean;
  className?: string;
  showWhatsApp?: boolean;
  showCall?: boolean;
  showEmail?: boolean;
  whatsappLabel?: string;
}

export function ContactButtons({
  propertyName,
  emailSubject,
  size = "default",
  layout = "row",
  theme = "light",
  fullWidth = false,
  className,
  showWhatsApp = true,
  showCall = true,
  showEmail = true,
  whatsappLabel = "WhatsApp",
}: ContactButtonsProps) {
  const whatsappUrl = propertyName
    ? getPropertyWhatsAppUrl(propertyName)
    : getWhatsAppUrl();
  const subject =
    emailSubject ??
    (propertyName ? `Inquiry about ${propertyName}` : undefined);

  const containerClass = cn(
    layout === "stack" ? "flex flex-col gap-3" : "flex flex-wrap gap-3",
    fullWidth && layout === "stack" && "[&_a]:w-full",
    className
  );

  const widthClass = fullWidth && layout === "stack" ? "w-full" : undefined;

  const callClass =
    theme === "dark"
      ? "bg-ivory text-forest shadow-luxury hover:bg-ivory/90 border-0"
      : undefined;

  const emailClass =
    theme === "dark"
      ? "border-ivory/40 text-ivory hover:bg-ivory hover:text-forest"
      : undefined;

  return (
    <div className={containerClass}>
      {showWhatsApp && (
        <Button asChild size={size} variant="secondary" className={widthClass}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-4 w-4" />
            {whatsappLabel}
          </a>
        </Button>
      )}
      {showCall && (
        <Button
          asChild
          size={size}
          variant="default"
          className={cn(widthClass, callClass)}
        >
          <a href={getPhoneUrl()}>
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </Button>
      )}
      {showEmail && (
        <Button
          asChild
          size={size}
          variant="outline"
          className={cn(widthClass, emailClass)}
        >
          <a href={getEmailUrl(subject)}>
            <Mail className="h-4 w-4" />
            Email Us
          </a>
        </Button>
      )}
    </div>
  );
}
