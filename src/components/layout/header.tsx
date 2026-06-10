"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/config";
import { CallButton } from "@/components/shared/call-button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isOpen || isScrolled
          ? "bg-ivory/95 backdrop-blur-md shadow-luxury"
          : "bg-ivory/90 backdrop-blur-md xl:bg-transparent"
      )}
    >
      <div className="site-container">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex flex-col group" aria-label="Maple & Key Home">
            <span className="font-heading text-xl text-forest tracking-wide transition-colors group-hover:text-saffron sm:text-2xl xl:text-3xl">
              Maple & Key
            </span>
            <span className="text-[9px] text-saffron tracking-[0.18em] uppercase sm:text-[10px] sm:tracking-[0.2em] xl:text-[11px]">
              by {siteConfig.parentBrand}
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-base tracking-wide transition-colors hover:text-saffron",
                  pathname === link.href
                    ? "text-saffron font-medium"
                    : "text-charcoal"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden xl:flex items-center gap-4">
            <CallButton size="default" />
          </div>

          <button
            className="xl:hidden p-2.5 text-forest"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <>
                <motion.button
                  key="mobile-menu-backdrop"
                  type="button"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="xl:hidden fixed inset-0 z-[90] bg-ivory"
                  aria-label="Close menu"
                  onClick={() => setIsOpen(false)}
                />
                <motion.nav
                  key="mobile-menu-nav"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="xl:hidden fixed inset-x-0 top-0 mobile-menu-bottom z-[91] overflow-y-auto overscroll-contain bg-ivory"
                  aria-label="Mobile navigation"
                >
                  <div className="site-container pb-6">
                    <div className="flex h-20 items-center justify-between border-b border-beige">
                      <div className="flex flex-col">
                        <span className="font-heading text-2xl text-forest tracking-wide sm:text-3xl">
                          Maple & Key
                        </span>
                        <span className="text-[10px] text-saffron tracking-[0.18em] uppercase sm:text-[11px] sm:tracking-[0.2em]">
                          by {siteConfig.parentBrand}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="p-2.5 text-forest"
                        aria-label="Close menu"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </div>
                    <div className="flex flex-col gap-6 pt-6">
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "block font-heading text-2xl transition-colors hover:text-saffron",
                            pathname === link.href ? "text-saffron" : "text-forest"
                          )}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: navLinks.length * 0.04 }}
                      className="pt-2"
                    >
                      <CallButton fullWidth />
                    </motion.div>
                    </div>
                  </div>
                </motion.nav>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
}
