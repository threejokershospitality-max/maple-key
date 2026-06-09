import { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { BrandHero } from "@/components/shared/brand-hero";
import { ExperiencesCatalog } from "@/components/experiences/experiences-catalog";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata: Metadata = createMetadata({
  title: "Experiences",
  description:
    "Curated Varanasi experiences, from Ganga aarti and temple darshan to food trails, silk weaving, day trips, and cultural evenings.",
  path: "/experiences",
});

export default function ExperiencesPage() {
  return (
    <div className="pt-20">
      <BrandHero
        subtitle="Curated Journeys"
        title="Experiences"
        description="From sunrise boat rides to temple circuits and Banarasi food trails, discover the soul of Kashi through curated local experiences."
      />

      <section className="section-padding-sm">
        <div className="site-container">
          <ExperiencesCatalog />
        </div>
      </section>

      <FinalCTA
        subtitle="Plan Your Journey"
        title="Need help choosing an experience?"
        description="Tell us your dates and interests and we'll recommend the best experiences and arrange everything for your stay in Varanasi."
      />
    </div>
  );
}
