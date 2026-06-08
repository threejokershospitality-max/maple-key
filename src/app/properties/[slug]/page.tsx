import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  MapPin,
  Users,
  BedDouble,
  Bath,
  Clock,
  Star,
} from "lucide-react";
import { properties, getPropertyBySlug } from "@/data/properties";
import {
  createMetadata,
  propertySchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/seo";
import { JsonLd } from "@/components/shared/json-ld";
import { PropertyGallery } from "@/components/properties/property-gallery";
import { InquiryPanel } from "@/components/shared/inquiry-panel";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { categoryLabels } from "@/data/faqs";

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

  const avgRating = property.reviews.length
    ? (
        property.reviews.reduce((s, r) => s + r.rating, 0) /
        property.reviews.length
      ).toFixed(1)
    : null;

  return (
    <>
      <JsonLd
        data={[
          propertySchema(property),
          faqSchema(property.faq),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Properties", url: "/properties" },
            { name: property.name, url: `/properties/${property.slug}` },
          ]),
        ]}
      />

      <div className="pt-20">
        <PropertyGallery images={property.gallery} name={property.name} />

        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge variant="secondary">
                    {categoryLabels[property.category]}
                  </Badge>
                  {property.highlights.map((h) => (
                    <Badge key={h} variant="outline">
                      {h}
                    </Badge>
                  ))}
                </div>

                <h1 className="font-heading text-3xl md:text-4xl text-forest mb-2">
                  {property.name}
                </h1>
                <div className="flex items-center gap-1 text-gold mb-4">
                  <MapPin className="h-4 w-4" />
                  <span>
                    {property.city}, {property.state}, {property.country}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-sm text-charcoal/70">
                  <span className="flex items-center gap-1.5">
                    <Users className="h-4 w-4" />
                    {property.guests} Guests
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BedDouble className="h-4 w-4" />
                    {property.bedrooms} Bedrooms
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Bath className="h-4 w-4" />
                    {property.bathrooms} Bathrooms
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    Check-in {property.checkIn} · Check-out {property.checkOut}
                  </span>
                  {avgRating && (
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-gold text-gold" />
                      {avgRating} ({property.reviews.length} reviews)
                    </span>
                  )}
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
                  {property.amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-2 text-sm text-charcoal/80 bg-accent/50 px-4 py-3 rounded-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-forest mb-4">
                  Bedroom Details
                </h2>
                <div className="space-y-4">
                  {property.bedroomDetails.map((room) => (
                    <div
                      key={room.name}
                      className="border border-beige rounded-sm p-5"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-forest">{room.name}</h3>
                        <span className="text-sm text-gold">{room.bedType}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {room.features.map((f) => (
                          <span
                            key={f}
                            className="text-xs text-charcoal/60 bg-accent px-2 py-1 rounded-sm"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-forest mb-4">
                  Nearby Attractions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.nearbyAttractions.map((attr) => (
                    <div
                      key={attr.name}
                      className="flex gap-4 border border-beige rounded-sm overflow-hidden"
                    >
                      {attr.image && (
                        <div className="relative w-24 h-24 shrink-0">
                          <Image
                            src={attr.image}
                            alt={attr.name}
                            fill
                            className="object-cover"
                            sizes="96px"
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <h3 className="font-medium text-forest text-sm">
                          {attr.name}
                        </h3>
                        <p className="text-xs text-charcoal/60 mt-1">
                          {attr.distance} · {attr.travelTime}
                        </p>
                        <p className="text-xs text-charcoal/70 mt-1 line-clamp-2">
                          {attr.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-forest mb-4">
                  Location
                </h2>
                <div className="aspect-video bg-accent rounded-sm overflow-hidden">
                  <iframe
                    title={`Map of ${property.name}`}
                    src={`https://maps.google.com/maps?q=${property.coordinates.lat},${property.coordinates.lng}&z=14&output=embed`}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-forest mb-4">
                  House Rules
                </h2>
                <ul className="space-y-2">
                  {property.houseRules.map((rule) => (
                    <li
                      key={rule}
                      className="flex items-start gap-2 text-sm text-charcoal/80"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-forest mt-2 shrink-0" />
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
                        className="border border-beige rounded-sm p-6"
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
                        <p className="text-sm font-medium text-forest">
                          {review.guestName}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {property.faq.length > 0 && (
                <div>
                  <h2 className="font-heading text-2xl text-forest mb-4">
                    Frequently Asked Questions
                  </h2>
                  <Accordion type="single" collapsible>
                    {property.faq.map((faq, i) => (
                      <AccordionItem key={i} value={`faq-${i}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
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

        <div className="lg:hidden fixed bottom-16 left-0 right-0 bg-ivory border-t border-beige p-4 z-30">
          <InquiryPanel propertyName={property.name} />
        </div>
      </div>
    </>
  );
}
