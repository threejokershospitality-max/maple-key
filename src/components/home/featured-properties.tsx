import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { properties } from "@/data/properties";

const homepageFeaturedSlugs = [
  "the-wayne-manor",
  "the-golden-dior",
  "the-haven-retreat",
] as const;
import { SectionHeading } from "@/components/shared/section-heading";
import { PropertyCard } from "@/components/shared/property-card";
import { Button } from "@/components/ui/button";

export function FeaturedProperties() {
  const featuredProperties = homepageFeaturedSlugs
    .map((slug) => properties.find((p) => p.slug === slug))
    .filter((p): p is (typeof properties)[number] => Boolean(p));

  return (
    <section className="py-20 lg:py-28 bg-ivory" aria-labelledby="featured-properties">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          subtitle="Our Collection"
          title="Featured Properties"
          description="Handpicked stays in Varanasi that embody our commitment to exceptional hospitality and unforgettable experiences."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property, i) => (
            <PropertyCard key={property.id} property={property} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/properties">
              View All Properties
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
