import { Testimonial } from "@/types";
import { images } from "@/lib/images";

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    guestName: "Meera Krishnan",
    guestImage: images.guests.guest3,
    rating: 5,
    review:
      "Our stay at The Wayne Manor was the highlight of our Kashi pilgrimage. Waking to the Ganges, evening aarti, and the team's warmth, Maple & Key made Varanasi feel like home.",
    propertySlug: "the-wayne-manor",
    propertyName: "The Wayne Manor",
    date: "2025-11-10",
    guestPhotos: [images.ghatAarti, images.ghatAarti],
  },
  {
    id: "t2",
    guestName: "Rajesh & Anjali Verma",
    guestImage: images.guests.guest2,
    rating: 5,
    review:
      "The Golden Dior felt like staying with family in the old city. Authentic, peaceful, and perfectly located for temple visits and ghat walks.",
    propertySlug: "the-golden-dior",
    propertyName: "The Golden Dior",
    date: "2025-10-05",
  },
  {
    id: "t3",
    guestName: "Priya Sharma",
    guestImage: images.guests.guest1,
    rating: 5,
    review:
      "The Haven Retreat was perfect for our family trip to Varanasi. Spacious, clean, and the rooftop sunrise views were unforgettable.",
    propertySlug: "the-haven-retreat",
    propertyName: "The Haven Retreat",
    date: "2025-09-20",
    guestPhotos: [images.ghatAarti],
  },
  {
    id: "t4",
    guestName: "The Gupta Family",
    guestImage: images.guests.guest4,
    rating: 5,
    review:
      "We hosted our family pilgrimage at The Gardenveil Cottage with 12 members. Immaculate property and seamless temple visit arrangements.",
    propertySlug: "the-gardenveil-cottage",
    propertyName: "The Gardenveil Cottage",
    date: "2025-08-15",
  },
  {
    id: "t5",
    guestName: "Jennifer Walsh",
    guestImage: images.guests.guest5,
    rating: 5,
    review:
      "As a repeat guest, I can confidently say Maple & Key maintains exceptional standards in Varanasi. Each property is unique, but the warmth remains constant.",
    propertySlug: "the-pearl-manor",
    propertyName: "The Pearl Manor",
    date: "2025-06-22",
  },
  {
    id: "t6",
    guestName: "Arjun Menon",
    guestImage: images.guests.guest6,
    rating: 5,
    review:
      "Used The Regal Serenity for a month-long stay during my research in Varanasi. Fast WiFi, peaceful neighbourhood, and walking distance to the ghats.",
    propertySlug: "the-regal-serenity",
    propertyName: "The Regal Serenity",
    date: "2025-05-12",
  },
];

export function getTestimonialsByProperty(slug: string): Testimonial[] {
  return testimonials.filter((t) => t.propertySlug === slug);
}

export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials.slice(0, 6);
}
