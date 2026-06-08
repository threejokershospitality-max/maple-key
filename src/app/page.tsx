import { HeroSection } from "@/components/home/hero-section";
import { TrustIndicators } from "@/components/home/trust-indicators";
import { FeaturedProperties } from "@/components/home/featured-properties";
import { WhyChoose } from "@/components/home/why-choose";
import { StayCategories } from "@/components/home/stay-categories";
import { DestinationsShowcase } from "@/components/home/destinations-showcase";
import { AmenitiesHighlight } from "@/components/home/amenities-highlight";
import { GuestStories } from "@/components/home/guest-stories";
import { LocalExperiences } from "@/components/home/local-experiences";
import { FAQSection } from "@/components/home/faq-section";
import { FinalCTA } from "@/components/home/final-cta";
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
