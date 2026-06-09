import { Metadata } from "next";
import { siteConfig } from "./config";
import { amenities } from "@/data/homepage";
import { Property, FAQ, Destination } from "@/types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mapleandkey.com";

export function createMetadata({
  title,
  description,
  path = "",
  image,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} - ${siteConfig.tagline}`;
  const pageDescription = description || siteConfig.description;
  const url = `${siteUrl}${path}`;
  const ogImage = image || `${siteUrl}/og-image.jpg`;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: pageTitle }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: "Maple and Key",
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    description: siteConfig.description,
    parentOrganization: {
      "@type": "Organization",
      name: siteConfig.parentBrand,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
      email: siteConfig.email,
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        siteConfig.address.streetLine2 ?? siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    priceRange: "₹₹₹",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.stats.averageRating.toString(),
      reviewCount: siteConfig.stats.totalReviews.toString(),
      bestRating: "5",
    },
  };
}

export function propertySchema(property: Property) {
  return {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    name: property.name,
    description: property.description,
    url: `${siteUrl}/properties/${property.slug}`,
    image: property.gallery,
    address: {
      "@type": "PostalAddress",
      addressLocality: property.city,
      addressRegion: property.state,
      addressCountry: property.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: property.coordinates.lat,
      longitude: property.coordinates.lng,
    },
    numberOfRooms: property.bedrooms,
    occupancy: {
      "@type": "QuantitativeValue",
      value: property.guests,
    },
    amenityFeature: amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity.name,
      value: true,
    })),
    aggregateRating: property.reviewCount
      ? {
          "@type": "AggregateRating",
          ratingValue: property.averageRating.toString(),
          reviewCount: property.reviewCount.toString(),
          bestRating: "5",
        }
      : undefined,
  };
}

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
}

export function destinationSchema(destination: Destination) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: destination.name,
    description: destination.description,
    url: `${siteUrl}/destinations/${destination.slug}`,
    image: destination.featuredImage,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: destination.state,
      containedInPlace: {
        "@type": "Country",
        name: destination.country,
      },
    },
  };
}
