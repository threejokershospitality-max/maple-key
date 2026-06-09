import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { destinations, getDestinationBySlug } from "@/data/destinations";
import { getPropertiesByDestination } from "@/data/properties";
import {
  createMetadata,
  destinationSchema,
  breadcrumbSchema,
} from "@/lib/seo";
import { JsonLd } from "@/components/shared/json-ld";
import { SectionHeading } from "@/components/shared/section-heading";
import { ImageHero } from "@/components/shared/image-hero";
import { PropertyCard } from "@/components/shared/property-card";
import { FinalCTA } from "@/components/sections/final-cta";

interface DestinationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: DestinationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) return {};

  return createMetadata({
    title: `${destination.name}, Destinations`,
    description: destination.shortDescription,
    path: `/destinations/${destination.slug}`,
    image: destination.featuredImage,
  });
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) notFound();

  const destinationProperties = getPropertiesByDestination(slug);

  return (
    <>
      <JsonLd
        data={[
          destinationSchema(destination),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Destinations", url: "/destinations" },
            {
              name: destination.name,
              url: `/destinations/${destination.slug}`,
            },
          ]),
        ]}
      />

      <div className="pt-20">
        <ImageHero
          src={destination.featuredImage}
          alt={destination.name}
          title={destination.name}
          subtitle={`${destination.state}, ${destination.country}`}
          height="lg"
          align="bottom"
        />

        <section className="section-padding-sm">
          <div className="site-container">
            <p className="text-charcoal/80 leading-relaxed max-w-3xl text-lg">
              {destination.description}
            </p>
          </div>
        </section>

        <section className="section-padding-sm section-surface-muted">
          <div className="site-container">
            <SectionHeading
              subtitle="Must Visit"
              title="Top Attractions"
              align="left"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {destination.attractions.map((attr) => (
                <div
                  key={attr.name}
                  className="bg-ivory rounded-sm overflow-hidden shadow-luxury"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={attr.image}
                      alt={attr.name}
                      fill
                      className="object-cover"
                      sizes="33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg text-forest">
                      {attr.name}
                    </h3>
                    {attr.distance && (
                      <p className="text-xs text-saffron mt-1">{attr.distance}</p>
                    )}
                    <p className="text-sm text-charcoal/70 mt-2">
                      {attr.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding-sm">
          <div className="site-container">
            <SectionHeading
              subtitle="Immerse Yourself"
              title="Local Experiences"
              align="left"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {destination.localExperiences.map((exp) => (
                <div key={exp.title} className="group relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                  <div className="absolute bottom-0 p-5">
                    <h3 className="font-heading text-lg text-ivory">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-ivory/70 mt-1">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {destinationProperties.length > 0 && (
          <section className="section-padding-sm section-surface-muted">
            <div className="site-container">
              <SectionHeading
                subtitle="Stay With Us"
                title={`Properties in ${destination.name}`}
                align="left"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {destinationProperties.map((property, i) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    index={i}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="section-padding-sm">
          <div className="site-container max-w-3xl">
            <SectionHeading
              subtitle="Plan Your Trip"
              title="Travel Guide"
              align="left"
            />
            <div className="space-y-8">
              {destination.travelGuide.map((section) => (
                <div key={section.title}>
                  <h3 className="font-heading text-xl text-forest mb-2">
                    {section.title}
                  </h3>
                  <p className="text-charcoal/80 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA
          subtitle="Plan Your Trip"
          title={`Plan Your ${destination.name} Getaway`}
          description={`Let us help you find the perfect stay in ${destination.name}.`}
        />
      </div>
    </>
  );
}
