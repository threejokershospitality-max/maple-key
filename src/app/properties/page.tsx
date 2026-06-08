import { Metadata } from "next";
import { properties } from "@/data/properties";
import { createMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/shared/section-heading";
import { PropertiesFilter } from "@/components/properties/properties-filter";

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
      <section className="py-16 lg:py-20 bg-accent/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            subtitle="Our Collection"
            title="Curated Properties"
            description="Each property is handpicked and professionally managed to deliver an exceptional guest experience."
          />
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <PropertiesFilter
            properties={properties}
            initialCategory={params.category}
            initialDestination={params.destination}
          />
        </div>
      </section>
    </div>
  );
}
