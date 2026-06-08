import { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = createMetadata({
  title: "Terms & Conditions",
  description: `Terms and Conditions for using ${siteConfig.name} website and hospitality services.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-16 max-w-3xl">
        <h1 className="font-heading text-4xl text-forest mb-8">
          Terms & Conditions
        </h1>
        <div className="prose prose-lg text-charcoal/80 space-y-6">
          <p>Last updated: June 2026</p>

          <h2 className="font-heading text-2xl text-forest">
            Acceptance of Terms
          </h2>
          <p>
            By accessing and using the {siteConfig.name} website, you agree to
            be bound by these Terms and Conditions. If you do not agree, please
            do not use our website or services.
          </p>

          <h2 className="font-heading text-2xl text-forest">Services</h2>
          <p>
            {siteConfig.name}, a brand of {siteConfig.parentBrand}, provides
            curated hospitality services including vacation home rentals and
            homestay management. All bookings are subject to availability and
            confirmation by our team.
          </p>

          <h2 className="font-heading text-2xl text-forest">
            Booking & Cancellation
          </h2>
          <p>
            Bookings are confirmed upon receipt of payment or written
            confirmation from our team. Cancellation policies vary by property
            and season, and will be communicated at the time of booking.
          </p>

          <h2 className="font-heading text-2xl text-forest">
            Guest Responsibilities
          </h2>
          <p>
            Guests are expected to respect property house rules, maintain
            reasonable care of the property, and adhere to maximum occupancy
            limits. Damage beyond normal wear may result in additional charges.
          </p>

          <h2 className="font-heading text-2xl text-forest">
            Limitation of Liability
          </h2>
          <p>
            {siteConfig.name} is not liable for any indirect, incidental, or
            consequential damages arising from the use of our properties or
            services, except as required by applicable law.
          </p>

          <h2 className="font-heading text-2xl text-forest">Contact</h2>
          <p>
            For questions about these terms, contact us at {siteConfig.email}.
          </p>
        </div>
      </div>
    </div>
  );
}
