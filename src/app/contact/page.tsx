import { Metadata } from "next";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config";
import { getWhatsAppUrl, getEmailUrl } from "@/lib/whatsapp";
import { BrandHero } from "@/components/shared/brand-hero";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = createMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Maple & Key for property inquiries, bookings, and personalized hospitality assistance.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-20">
      <BrandHero
        subtitle="Get in Touch"
        title="Contact Us"
        description="Our hospitality team is ready to help you plan your perfect stay. Reach out via phone, WhatsApp, or email."
      />

      <section className="section-padding-sm">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              <div className="surface-card p-6">
                <Phone className="h-6 w-6 text-saffron mb-3" />
                <h3 className="type-subtitle mb-1 text-forest">Phone</h3>
                <div className="space-y-1">
                  {siteConfig.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="block text-charcoal/70 hover:text-saffron transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
                <p className="text-xs text-charcoal/50 mt-2">
                  Available 9 AM – 9 PM IST
                </p>
              </div>

              <div className="surface-card p-6">
                <MessageCircle className="h-6 w-6 text-saffron mb-3" />
                <h3 className="type-subtitle mb-1 text-forest">WhatsApp</h3>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal/70 hover:text-saffron transition-colors"
                >
                  Chat with us
                </a>
                <p className="text-xs text-charcoal/50 mt-2">
                  Quick responses, 24/7
                </p>
              </div>

              <div className="surface-card p-6">
                <Mail className="h-6 w-6 text-saffron mb-3" />
                <h3 className="type-subtitle mb-1 text-forest">Email</h3>
                <a
                  href={getEmailUrl()}
                  className="text-charcoal/70 hover:text-saffron transition-colors"
                >
                  {siteConfig.email}
                </a>
                <p className="text-xs text-charcoal/50 mt-2">
                  Response within 24 hours
                </p>
              </div>

              <div className="surface-card p-6">
                <MapPin className="h-6 w-6 text-saffron mb-3" />
                <h3 className="type-subtitle mb-1 text-forest">Office</h3>
                <p className="text-charcoal/70 text-sm">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.streetLine2}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state} -{" "}
                  {siteConfig.address.postalCode}
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="surface-card relative overflow-hidden border border-dashed border-saffron/35 bg-accent/25 p-8">
                <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2 className="type-section-title text-forest/50">
                      Send an Inquiry
                    </h2>
                    <p className="mt-2 max-w-xl text-sm text-charcoal/60">
                      Online inquiries are launching soon. Until then, reach us by
                      phone, WhatsApp, or email.
                    </p>
                  </div>
                  <span className="inline-flex shrink-0 items-center rounded-full border border-saffron/40 bg-saffron/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-saffron">
                    Coming Soon
                  </span>
                </div>
                <div
                  className="pointer-events-none select-none opacity-45 grayscale"
                  aria-hidden="true"
                >
                  <ContactForm disabled />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
