"use client";

import Link from "next/link";
import { PropertyImageCarousel } from "@/components/shared/property-image-carousel";
import { motion } from "framer-motion";
import { MapPin, Users, BedDouble, Bath, Star } from "lucide-react";
import { Property } from "@/types";
import { Button } from "@/components/ui/button";
import { AirbnbLink } from "@/components/shared/airbnb-link";

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group surface-card-interactive overflow-hidden"
    >
      <Link href={`/properties/${property.slug}`} className="block relative">
        <PropertyImageCarousel
          images={property.gallery}
          alt={property.name}
          priority={index === 0}
        />
      </Link>

      <div className="p-4 sm:p-6">
        <div className="flex items-center gap-1 text-sm text-saffron mb-2">
          <MapPin className="h-3.5 w-3.5" />
          <span>
            {property.city}, {property.state}
          </span>
        </div>

        <Link href={`/properties/${property.slug}`}>
          <h3 className="font-heading text-xl text-forest can-hover:group-hover:text-saffron transition-colors mb-2">
            {property.name}
          </h3>
        </Link>

        <p className="text-sm text-charcoal/70 leading-relaxed mb-4 line-clamp-2">
          {property.shortDescription}
        </p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-charcoal/60 mb-5">
          <span className="flex shrink-0 items-center gap-1">
            <Users className="h-4 w-4 shrink-0" />
            {property.guests} Guests
          </span>
          <span className="flex min-w-0 items-center gap-1">
            <BedDouble className="h-4 w-4 shrink-0" />
            <span className="truncate">
              {property.bedrooms} Beds
              {property.extraBeds && ` · ${property.extraBeds}`}
            </span>
          </span>
          <span className="flex shrink-0 items-center gap-1">
            <Bath className="h-4 w-4 shrink-0" />
            {property.bathrooms} Baths
          </span>
          <span className="flex shrink-0 items-center gap-1">
            <Star className="h-4 w-4 shrink-0 fill-gold text-gold" />
            {property.averageRating.toFixed(
              Number.isInteger(property.averageRating) ? 0 : 2
            )}{" "}
            ({property.reviewCount})
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Button asChild variant="outline" className="flex-1">
            <Link href={`/properties/${property.slug}`}>View Property</Link>
          </Button>
          {property.airbnbUrl && (
            <AirbnbLink url={property.airbnbUrl} className="shrink-0" />
          )}
        </div>
      </div>
    </motion.article>
  );
}
