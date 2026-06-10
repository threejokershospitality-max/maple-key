import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  MapPin,
  Users,
  BedDouble,
  Bath,
  Clock,
  Star,
} from "lucide-react";
import { properties, getPropertyBySlug } from "@/data/properties";
import { amenities, propertyHouseRules } from "@/data/homepage";
import {
  createMetadata,
  propertySchema,
  breadcrumbSchema,
} from "@/lib/seo";
import { JsonLd } from "@/components/shared/json-ld";
import { PropertyGallery } from "@/components/properties/property-gallery";
import { VaranasiExplore } from "@/components/properties/varanasi-explore";
import { InquiryPanel } from "@/components/shared/inquiry-panel";
import { getPropertyMapEmbedSrc } from "@/lib/maps";
import { AirbnbLink } from "@/components/shared/airbnb-link";
import { GuestReviewAvatar } from "@/components/shared/guest-review-avatar";

interface PropertyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return {};

  return createMetadata({
    title: property.name,
    description: property.shortDescription,
    path: `/properties/${property.slug}`,
    image: property.featuredImage,
  });
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  const avgRating = property.averageRating.toFixed(
    Number.isInteger(property.averageRating) ? 0 : 2
  );

  return (
    <>
      <JsonLd
        data={[
          propertySchema(property),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Properties", url: "/properties" },
            { name: property.name, url: `/properties/${property.slug}` },
          ]),
        ]}
      />

      <div className="pt-20">
        <PropertyGallery images={property.gallery} name={property.name} />

        <div className="site-container section-padding-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8 lg:space-y-12">
              <div>
                <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
                  <h1 className="font-heading text-3xl md:text-4xl text-forest">
                    {property.name}
                  </h1>
                  {property.airbnbUrl && (
                    <AirbnbLink
                      url={property.airbnbUrl}
                      size="md"
                      className="shrink-0"
                    />
                  )}
                </div>
                <div className="flex items-center gap-1 text-saffron mb-4">
                  <MapPin className="h-4 w-4" />
                  <span>
                    {property.city}, {property.state}, {property.country}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-charcoal/70">
                  <span className="flex shrink-0 items-center gap-1.5">
                    <Users className="h-4 w-4 shrink-0" />
                    {property.guests} Guests
                  </span>
                  <span className="flex min-w-0 items-center gap-1.5">
                    <BedDouble className="h-4 w-4 shrink-0" />
                    <span>
                      {property.bedrooms} Beds
                      {property.extraBeds && ` · ${property.extraBeds}`}
                    </span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Bath className="h-4 w-4" />
                    {property.bathrooms} Bathrooms
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    Check-in {property.checkIn} · Check-out {property.checkOut}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-gold text-gold" />
                    {avgRating} ({property.reviewCount} reviews)
                  </span>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-forest mb-4">
                  About This Property
                </h2>
                <p className="text-charcoal/80 leading-relaxed">
                  {property.description}
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-forest mb-4">
                  Amenities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {amenities.map((amenity) => (
                    <div
                      key={amenity.id}
                      className="flex items-center gap-2 text-sm text-charcoal/80 bg-saffron/10 border border-beige px-4 py-3 rounded-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {amenity.name}
                    </div>
                  ))}
                </div>
              </div>

              <VaranasiExplore />

              <div>
                <h2 className="font-heading text-2xl text-forest mb-4">
                  Location
                </h2>
                <div className="aspect-video bg-accent rounded-sm overflow-hidden">
                  <iframe
                    title={`Map of ${property.name}`}
                    src={getPropertyMapEmbedSrc(
                      property.mapPlace,
                      property.coordinates
                    )}
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-forest mb-4">
                  House Rules
                </h2>
                <ul className="space-y-2">
                  {propertyHouseRules.map((rule) => (
                    <li
                      key={rule}
                      className="flex items-start gap-2 text-sm text-charcoal/80"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              {property.reviews.length > 0 && (
                <div>
                  <h2 className="font-heading text-2xl text-forest mb-4">
                    Guest Reviews
                  </h2>
                  <div className="space-y-6">
                    {property.reviews.map((review) => (
                      <div
                        key={review.id}
                        className="surface-card p-6"
                      >
                        <div className="flex items-center gap-1 mb-2">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-gold text-gold"
                            />
                          ))}
                        </div>
                        <p className="text-charcoal/80 text-sm leading-relaxed mb-3">
                          &ldquo;{review.review}&rdquo;
                        </p>
                        <div className="flex items-center gap-3">
                          <GuestReviewAvatar
                            name={review.guestName}
                            className="h-10 w-10"
                          />
                          <p className="text-sm font-medium text-forest">
                            {review.guestName}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div>
              <InquiryPanel
                propertyName={property.name}
                variant="sticky"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
