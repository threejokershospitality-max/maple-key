import { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config";
import { BrandHero } from "@/components/shared/brand-hero";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}, how we collect, use, and protect your personal information.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <BrandHero subtitle="Legal" title="Privacy Policy" />

      <div className="site-container section-padding-sm max-w-3xl">
        <div className="surface-card p-8 md:p-10 prose prose-lg text-body space-y-6">
          <p>Last updated: June 2026</p>

          <h2 className="type-section-title text-forest">
            Information We Collect
          </h2>
          <p>
            When you contact us through our website, we collect information you
            provide including your name, email address, phone number, travel
            preferences, and any messages you send. We also collect anonymous
            usage data through analytics tools to improve our website.
          </p>

          <h2 className="type-section-title text-forest">
            How We Use Your Information
          </h2>
          <p>
            We use your information to respond to inquiries, provide hospitality
            services, send booking confirmations, and improve our offerings. We
            do not sell your personal information to third parties.
          </p>

          <h2 className="type-section-title text-forest">
            Cookies & Analytics
          </h2>
          <p>
            Our website uses cookies and analytics services (Google Analytics,
            Microsoft Clarity) to understand how visitors use our site. You can
            control cookie preferences through our cookie consent banner.
          </p>

          <h2 className="type-section-title text-forest">Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information. All data transmission is encrypted via HTTPS.
          </p>

          <h2 className="type-section-title text-forest">Contact Us</h2>
          <p>
            For privacy-related inquiries, contact us at {siteConfig.email}.
          </p>
        </div>
      </div>
    </div>
  );
}
