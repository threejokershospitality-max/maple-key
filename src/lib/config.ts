import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Maple & Key",
  parentBrand: "Three Jokers Hospitality",
  tagline: "Curated Stays. Memorable Experiences.",
  description:
    "Maple & Key is a premium hospitality brand offering handpicked homestays and vacation homes in Varanasi, designed to deliver exceptional guest experiences.",
  phone: process.env.NEXT_PUBLIC_PHONE || "+919450855434",
  phones: [
    process.env.NEXT_PUBLIC_PHONE || "+919450855434",
    process.env.NEXT_PUBLIC_PHONE_SECONDARY || "+917991440955",
  ],
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "919450855434",
  email:
    process.env.NEXT_PUBLIC_EMAIL || "contact@mapleandkey.co.in",
  address: {
    street: "Three Jokers Hospitality",
    streetLine2: "94, Kundan Nagar Colony, Shivpur",
    city: "Varanasi",
    state: "Uttar Pradesh",
    country: "India",
    postalCode: "221003",
  },
  social: {
    linkedin: "https://linkedin.com/company/mapleandkey",
  },
  stats: {
    guestSatisfaction: 98,
    properties: 7,
    cities: 1,
    yearsHosting: 2,
    averageRating: 4.8,
    totalReviews: 253,
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/destinations", label: "Destinations" },
  { href: "/experiences", label: "Experiences" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
