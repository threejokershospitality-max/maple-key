import { Metadata } from "next";
import { properties } from "@/data/properties";
import { createMetadata } from "@/lib/seo";
import { BrandHero } from "@/components/shared/brand-hero";
import { PropertiesFilter } from "@/components/properties/properties-filter";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata: Metadata = createMetadata({
  title: "Properties",
  description:
    "Explore our curated collection of luxury vacation homes and homestays in Varanasi, Kashi.",
  path: "/properties",
});

interface PropertiesPageProps {
  searchParams: Promise<{ category?: string; destination?: string }>;
}

export default async function PropertiesPage({
  searchParams,
}: PropertiesPageProps) {
  const params = await searchParams;

  return (
    <div className="pt-20">
      <BrandHero
        subtitle="Our Collection"
        title="Curated Properties"
        description="Each property is handpicked and professionally managed to deliver an exceptional guest experience."
      />

      <section className="section-padding-sm">
        <div className="site-container">
          <PropertiesFilter
            properties={properties}
            initialCategory={params.category}
            initialDestination={params.destination}
          />
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
