"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/config";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
}

export function WhatsAppButton({ message, className }: WhatsAppButtonProps) {
  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-saffron text-ivory shadow-saffron hover:bg-saffron/90 hover:scale-105 transition-all duration-300 xl:flex ${className || ""}`}
      aria-label={`Chat with ${siteConfig.name} on WhatsApp`}
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
