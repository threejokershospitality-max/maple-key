export interface Property {
  id: string;
  slug: string;
  name: string;
  city: string;
  state: string;
  country: string;
  description: string;
  shortDescription: string;
  categories: PropertyCategory[];
  featuredImage: string;
  gallery: string[];
  guests: number;
  bedrooms: number;
  bathrooms: number;
  highlights: string[];
  coordinates: { lat: number; lng: number };
  mapUrl?: string;
  mapPlace?: string;
  airbnbUrl?: string;
  extraBeds?: string;
  checkIn: string;
  checkOut: string;
  averageRating: number;
  reviewCount: number;
  reviews: Review[];
  faq: FAQ[];
  featured?: boolean;
  destinationSlug: string;
}

export type PropertyCategory =
  | "family-vacation"
  | "luxury-villa"
  | "group-retreat"
  | "pilgrimage"
  | "weekend-escape"
  | "heritage-stay";

export const PROPERTY_CATEGORIES: PropertyCategory[] = [
  "family-vacation",
  "luxury-villa",
  "group-retreat",
  "pilgrimage",
  "weekend-escape",
  "heritage-stay",
];

export interface Review {
  id: string;
  guestName: string;
  guestImage?: string;
  rating: number;
  review: string;
  propertySlug?: string;
  date: string;
  guestPhotos?: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  state: string;
  country: string;
  description: string;
  shortDescription: string;
  featuredImage: string;
  gallery: string[];
  attractions: Attraction[];
  localExperiences: LocalExperience[];
  travelGuide: TravelGuideSection[];
  featured?: boolean;
}

export interface Attraction {
  name: string;
  description: string;
  image: string;
  distance?: string;
}

export interface LocalExperience {
  title: string;
  description: string;
  image: string;
  category: "cultural" | "food" | "adventure" | "family" | "spiritual";
}

export interface TravelGuideSection {
  title: string;
  content: string;
}

export interface Experience {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  featuredImage: string;
  gallery: string[];
  category: ExperienceCategory;
  highlights: string[];
  duration?: string;
  relatedPropertySlugs: string[];
}

export type ExperienceCategory =
  | "food"
  | "spiritual"
  | "cultural"
  | "heritage"
  | "wellness"
  | "day-trip"
  | "shopping";

export interface Testimonial {
  id: string;
  guestName: string;
  rating: number;
  review: string;
  propertySlug: string;
  propertyName: string;
  date: string;
  videoUrl?: string;
}

export interface SiteConfig {
  name: string;
  parentBrand: string;
  tagline: string;
  description: string;
  phone: string;
  phones: string[];
  whatsapp: string;
  email: string;
  address: {
    street: string;
    streetLine2?: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  social: {
    twitter?: string;
    linkedin?: string;
  };
  stats: {
    guestSatisfaction: number;
    properties: number;
    cities: number;
    yearsHosting: number;
    averageRating: number;
    totalReviews: number;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  propertyInterested?: string;
  checkInDate?: string;
  checkOutDate?: string;
  numberOfGuests?: number;
  message: string;
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface StayCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: PropertyCategory;
}

export interface WhyChooseFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface BrandValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}
