"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed mobile-above-bar xl:bottom-6 left-4 right-4 xl:left-auto xl:right-24 xl:max-w-md z-50 bg-ivory border border-beige shadow-luxury-xl rounded-sm p-6"
    >
      <p className="text-sm text-charcoal/80 mb-4 leading-relaxed">
        We use cookies and analytics to improve your experience. By continuing to
        browse, you agree to our use of cookies.
      </p>
      <div className="flex gap-3">
        <Button onClick={accept} size="sm">
          Accept
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShow(false)}
        >
          Decline
        </Button>
      </div>
    </div>
  );
}
