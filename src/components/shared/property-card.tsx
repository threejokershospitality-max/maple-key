"use client";

import Link from "next/link";
import { PropertyImageCarousel } from "@/components/shared/property-image-carousel";
import { motion } from "framer-motion";
import { MapPin, Users, BedDouble, Bath } from "lucide-react";
import { Property } from "@/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { categoryLabels } from "@/data/faqs";

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
      className="group bg-ivory rounded-sm overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-500"
    >
      <Link href={`/properties/${property.slug}`} className="block relative">
        <PropertyImageCarousel
          images={property.gallery}
          alt={property.name}
          priority={index < 3}
        />
        <div className="absolute top-4 left-4 z-10">
          <Badge variant="secondary">
            {categoryLabels[property.category]}
          </Badge>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center gap-1 text-sm text-saffron mb-2">
          <MapPin className="h-3.5 w-3.5" />
          <span>
            {property.city}, {property.state}
          </span>
        </div>

        <Link href={`/properties/${property.slug}`}>
          <h3 className="font-heading text-xl text-forest group-hover:text-saffron transition-colors mb-2">
            {property.name}
          </h3>
        </Link>

        <p className="text-sm text-charcoal/70 leading-relaxed mb-4 line-clamp-2">
          {property.shortDescription}
        </p>

        <div className="flex items-center gap-4 text-sm text-charcoal/60 mb-5">
          <span className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {property.guests} Guests
          </span>
          <span className="flex items-center gap-1">
            <BedDouble className="h-4 w-4" />
            {property.bedrooms} Beds
          </span>
          <span className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            {property.bathrooms} Baths
          </span>
        </div>

        <Button asChild variant="outline" className="w-full">
          <Link href={`/properties/${property.slug}`}>View Property</Link>
        </Button>
      </div>
    </motion.article>
  );
}
