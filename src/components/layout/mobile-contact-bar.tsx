"use client";

import { Phone, MessageCircle, Mail } from "lucide-react";
import { getPhoneUrl, getWhatsAppUrl, getEmailUrl } from "@/lib/whatsapp";

export function MobileContactBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-kashi border-t border-saffron/20 safe-area-bottom">
      <div className="flex items-center justify-around py-2 px-4">
        <a
          href={getPhoneUrl()}
          className="flex flex-col items-center gap-1 py-2 px-4 text-ivory/80 hover:text-saffron transition-colors"
          aria-label="Call us"
        >
          <Phone className="h-5 w-5" />
          <span className="text-[10px]">Call</span>
        </a>
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
