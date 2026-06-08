export interface Property {
  id: string;
  slug: string;
  name: string;
  city: string;
  state: string;
  country: string;
  description: string;
  shortDescription: string;
  category: PropertyCategory;
  featuredImage: string;
  gallery: string[];
  guests: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  highlights: string[];
  coordinates: { lat: number; lng: number };
  nearbyAttractions: NearbyAttraction[];
  bedroomDetails: BedroomDetail[];
  houseRules: string[];
  checkIn: string;
  checkOut: string;
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
  | "long-stay"
  | "weekend-escape";

export interface BedroomDetail {
  name: string;
  bedType: string;
  features: string[];
}

export interface NearbyAttraction {
  name: string;
  description: string;
  distance: string;
  travelTime: string;
  image?: string;
}

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
  relatedPropertySlugs: string[];
}

export type ExperienceCategory =
  | "family-vacations"
  | "spiritual-journeys"
  | "weekend-getaways"
  | "long-stays"
  | "workations"
  | "group-gatherings";

export interface Testimonial {
  id: string;
  guestName: string;
  guestImage: string;
  rating: number;
  review: string;
  propertySlug: string;
  propertyName: string;
  date: string;
  guestPhotos?: string[];
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
