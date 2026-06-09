"use client";

import { MessageCircle, Mail } from "lucide-react";
import { getWhatsAppUrl, getEmailUrl } from "@/lib/whatsapp";
import { CallIconLink } from "@/components/shared/call-button";

export function MobileContactBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-kashi border-t border-saffron/20 safe-area-bottom">
      <div className="flex items-center justify-around py-2 px-4">
        <CallIconLink />
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-2 px-4 text-ivory/80 hover:text-saffron transition-colors"
          aria-label="WhatsApp us"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-[10px]">WhatsApp</span>
        </a>
        <a
          href={getEmailUrl()}
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
