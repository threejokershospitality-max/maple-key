import { Metadata } from "next";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config";
import { getWhatsAppUrl, getEmailUrl } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/shared/section-heading";
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
      <section className="py-16 lg:py-20 bg-accent/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            subtitle="Get in Touch"
            title="Contact Us"
            description="Our hospitality team is ready to help you plan your perfect stay. Reach out via phone, WhatsApp, email, or the form below."
          />
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="bg-ivory border border-beige rounded-sm p-6 shadow-luxury">
                <Phone className="h-6 w-6 text-saffron mb-3" />
                <h3 className="font-heading text-lg text-forest mb-1">Phone</h3>
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

              <div className="bg-ivory border border-beige rounded-sm p-6 shadow-luxury">
                <MessageCircle className="h-6 w-6 text-saffron mb-3" />
                <h3 className="font-heading text-lg text-forest mb-1">
                  WhatsApp
                </h3>
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

              <div className="bg-ivory border border-beige rounded-sm p-6 shadow-luxury">
                <Mail className="h-6 w-6 text-saffron mb-3" />
                <h3 className="font-heading text-lg text-forest mb-1">Email</h3>
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

              <div className="bg-ivory border border-beige rounded-sm p-6 shadow-luxury">
                <MapPin className="h-6 w-6 text-saffron mb-3" />
                <h3 className="font-heading text-lg text-forest mb-1">
                  Office
                </h3>
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
              <h2 className="font-heading text-2xl text-forest mb-6">
                Send an Inquiry
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
