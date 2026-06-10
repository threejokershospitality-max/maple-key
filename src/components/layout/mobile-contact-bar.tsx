"use client";

import { usePathname } from "next/navigation";
import { MessageCircle, Mail } from "lucide-react";
import {
  getWhatsAppUrl,
  getEmailUrl,
  getPropertyWhatsAppUrl,
} from "@/lib/whatsapp";
import { getPropertyBySlug } from "@/data/properties";
import { CallIconLink } from "@/components/shared/call-button";

export function MobileContactBar() {
  const pathname = usePathname();
  const propertySlug = pathname.match(/^\/properties\/([^/]+)$/)?.[1];
  const property = propertySlug ? getPropertyBySlug(propertySlug) : undefined;

  const whatsappUrl = property
    ? getPropertyWhatsAppUrl(property.name)
    : getWhatsAppUrl();
  const emailUrl = property
    ? getEmailUrl(`Inquiry about ${property.name}`)
    : getEmailUrl();

  return (
    <div className="xl:hidden fixed bottom-0 left-0 right-0 z-40 bg-kashi border-t border-saffron/20 safe-area-bottom">
      <div className="flex items-center justify-around py-2 px-4">
        <CallIconLink />
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-2 px-4 text-ivory/80 hover:text-saffron transition-colors"
          aria-label="WhatsApp us"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-[10px]">WhatsApp</span>
        </a>
        <a
          href={emailUrl}
          className="flex flex-col items-center gap-1 py-2 px-4 text-ivory/80 hover:text-saffron transition-colors"
          aria-label="Email us"
        >
          <Mail className="h-5 w-5" />
          <span className="text-[10px]">Email</span>
        </a>
      </div>
    </div>
  );
}
