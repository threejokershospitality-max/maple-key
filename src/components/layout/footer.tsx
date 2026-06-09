import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/config";
import { properties } from "@/data/properties";
import { getPhoneUrl, getEmailUrl } from "@/lib/whatsapp";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-heritage-gradient text-ivory" role="contentinfo">
      <div className="site-container section-padding-sm">
        <div className="section-grid md:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
          <div className="min-w-0 space-y-4">
            <div>
              <h3 className="font-heading text-2xl text-ivory">Maple & Key</h3>
              <p className="text-xs text-saffron tracking-[0.2em] uppercase mt-1">
                by {siteConfig.parentBrand}
              </p>
            </div>
            <p className="text-ivory/70 text-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          <div className="min-w-0">
            <h4 className="font-heading text-lg text-saffron mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory/70 hover:text-saffron transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h4 className="font-heading text-lg text-saffron mb-4">Properties</h4>
            <ul className="space-y-2">
              {properties.map((property) => (
                <li key={property.slug}>
                  <Link
                    href={`/properties/${property.slug}`}
                    className="text-sm text-ivory/70 hover:text-saffron transition-colors"
                  >
                    {property.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h4 className="font-heading text-lg text-saffron mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="space-y-1">
                {siteConfig.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="flex items-center gap-2 text-sm text-ivory/70 hover:text-saffron transition-colors"
                  >
                    <Phone className="h-4 w-4 shrink-0" />
                    {phone}
                  </a>
                ))}
              </li>
              <li>
                <a
                  href={getEmailUrl()}
                  className="flex items-center gap-2 text-sm text-ivory/70 hover:text-saffron transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-ivory/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span className="break-words">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.streetLine2}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state} -{" "}
                  {siteConfig.address.postalCode}
                </span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-heading text-sm text-saffron mb-2">Destination</h4>
              <Link
                href="/destinations/varanasi"
                className="text-xs text-ivory/60 hover:text-saffron transition-colors"
              >
                Varanasi, Uttar Pradesh
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs text-ivory/50">
            &copy; {currentYear} {siteConfig.name}. A brand of{" "}
            {siteConfig.parentBrand}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-ivory/50 hover:text-saffron transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-ivory/50 hover:text-saffron transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
