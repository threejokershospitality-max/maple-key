import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/hero-section";
import { TrustIndicators } from "@/components/sections/trust-indicators";
import { FeaturedProperties } from "@/components/sections/featured-properties";

const WhyChoose = dynamic(() =>
  import("@/components/sections/why-choose").then((m) => m.WhyChoose)
);
const StayCategories = dynamic(() =>
  import("@/components/sections/stay-categories").then((m) => m.StayCategories)
);
const DestinationsShowcase = dynamic(() =>
  import("@/components/sections/destinations-showcase").then(
    (m) => m.DestinationsShowcase
  )
);
const AmenitiesHighlight = dynamic(() =>
  import("@/components/sections/amenities-highlight").then(
    (m) => m.AmenitiesHighlight
  )
);
const GuestStories = dynamic(() =>
  import("@/components/sections/guest-stories").then((m) => m.GuestStories)
);
const LocalExperiences = dynamic(() =>
  import("@/components/sections/local-experiences").then(
    (m) => m.LocalExperiences
  )
);
const FAQSection = dynamic(() =>
  import("@/components/sections/faq-section").then((m) => m.FAQSection)
);
const FinalCTA = dynamic(() =>
  import("@/components/sections/final-cta").then((m) => m.FinalCTA)
);
import { JsonLd } from "@/components/shared/json-ld";
import { faqSchema } from "@/lib/seo";
import { generalFaqs } from "@/data/faqs";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(generalFaqs)} />
      <HeroSection />
      <TrustIndicators />
      <FeaturedProperties />
      <WhyChoose />
      <StayCategories />
      <DestinationsShowcase />
      <AmenitiesHighlight />
      <GuestStories />
      <LocalExperiences />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
