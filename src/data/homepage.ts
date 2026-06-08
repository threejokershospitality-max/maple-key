import { Amenity, StayCategory, WhyChooseFeature, Milestone, BrandValue } from "@/types";
import { images } from "@/lib/images";

export const whyChooseFeatures: WhyChooseFeature[] = [
  {
    id: "1",
    title: "Professionally Managed",
    description:
      "Every property is managed by our experienced hospitality team, ensuring hotel-quality service in a home setting.",
    icon: "Award",
  },
  {
    id: "2",
    title: "Verified Properties",
    description:
      "Each stay is personally inspected and verified for quality, safety, and guest experience standards.",
    icon: "ShieldCheck",
  },
  {
    id: "3",
    title: "Personalized Hospitality",
    description:
      "From custom meal plans to curated local experiences, we tailor every stay to your preferences.",
    icon: "Heart",
  },
  {
    id: "4",
    title: "Prime Locations",
    description:
      "Handpicked locations in Varanasi, near ghats, temples, and the sacred Ganges.",
    icon: "MapPin",
  },
  {
    id: "5",
    title: "Family Friendly",
    description:
      "Child-safe amenities, spacious layouts, and family-oriented activities at every property.",
    icon: "Users",
  },
  {
    id: "6",
    title: "Local Expertise",
    description:
      "Deep local knowledge to guide you to hidden gems, authentic experiences, and trusted services.",
    icon: "Compass",
  },
];

export const stayCategories: StayCategory[] = [
  {
    id: "1",
    title: "Family Vacations",
    description: "Spacious homes designed for memorable family holidays.",
    image: images.categories.family,
    slug: "family-vacation",
  },
  {
    id: "2",
    title: "Heritage Stays",
    description: "Restored havelis and courtyard homes in old Varanasi.",
    image: images.categories.heritage,
    slug: "luxury-villa",
  },
  {
    id: "3",
    title: "Group Retreats",
    description: "Spacious villas for family pilgrimages and gatherings.",
    image: images.categories.group,
    slug: "group-retreat",
  },
  {
    id: "4",
    title: "Pilgrimage Stays",
    description: "Serene retreats near ghats, temples, and the Ganges.",
    image: images.categories.pilgrimage,
    slug: "pilgrimage",
  },
  {
    id: "5",
    title: "Long Stays",
    description: "Extended stays with all the comforts of home in Kashi.",
    image: images.categories.longStay,
    slug: "long-stay",
  },
  {
    id: "6",
    title: "Weekend Escapes",
    description: "Short spiritual getaways in the eternal city.",
    image: images.categories.weekend,
    slug: "weekend-escape",
  },
];

export const amenities: Amenity[] = [
  {
    id: "wifi",
    name: "High-Speed WiFi",
    icon: "Wifi",
    description: "Enterprise-grade internet for work and entertainment.",
  },
  {
    id: "parking",
    name: "Parking",
    icon: "Car",
    description: "Secure on-site parking for your vehicles.",
  },
  {
    id: "tv",
    name: "Smart TV",
    icon: "Tv",
    description: "Smart TVs with streaming services in every property.",
  },
  {
    id: "ac",
    name: "Air Conditioning",
    icon: "Wind",
    description: "Climate control for year-round comfort.",
  },
  {
    id: "kitchen",
    name: "Fully Equipped Kitchen",
    icon: "ChefHat",
    description: "Complete kitchens with modern appliances and cookware.",
  },
  {
    id: "backup",
    name: "Power Backup",
    icon: "Zap",
    description: "Uninterrupted power supply with generator backup.",
  },
  {
    id: "workspace",
    name: "Workspace",
    icon: "Laptop",
    description: "Dedicated work areas with ergonomic seating.",
  },
  {
    id: "security",
    name: "Security",
    icon: "Shield",
    description: "24/7 security and CCTV at all properties.",
  },
];

export const localExperiences = [
  {
    title: "Spiritual Experiences",
    description: "Ganga aarti, temple darshan, and sunrise boat rides on the Ganges.",
    image: images.local.spiritual,
    category: "cultural",
  },
  {
    title: "Banarasi Cuisine",
    description: "Kachori sabzi, tamatar chaat, malaiyyo, and legendary street food trails.",
    image: images.local.food,
    category: "food",
  },
  {
    title: "Sacred Sites",
    description: "Kashi Vishwanath, Sarnath, and the ghats of ancient Kashi.",
    image: images.local.sites,
    category: "attractions",
  },
  {
    title: "Family Activities",
    description: "Boat rides, silk weaving demos, and cultural walks for all ages.",
    image: images.local.family,
    category: "family",
  },
];

export const brandValues: BrandValue[] = [
  {
    id: "1",
    title: "Guest First",
    description: "Every decision starts with the guest experience in mind.",
    icon: "Heart",
  },
  {
    id: "2",
    title: "Quality",
    description: "Uncompromising standards in every property and interaction.",
    icon: "Star",
  },
  {
    id: "3",
    title: "Trust",
    description: "Transparent communication and reliable service, every time.",
    icon: "Shield",
  },
  {
    id: "4",
    title: "Comfort",
    description: "Creating spaces where guests feel truly at home.",
    icon: "Home",
  },
  {
    id: "5",
    title: "Local Expertise",
    description: "Deep roots in Varanasi, every ghat, temple, and lane.",
    icon: "Compass",
  },
];

export const milestones: Milestone[] = [
  {
    year: "2025",
    title: "The Beginning",
    description:
      "Three Jokers Hospitality launches with a vision to redefine homestay experiences in India.",
  },
  {
    year: "2025",
    title: "Rooted in Kashi",
    description:
      "Portfolio grows across Varanasi, serving 500+ happy guests.",
  },
  {
    year: "2026",
    title: "Maple & Key Born",
    description:
      "Premium brand Maple & Key is introduced, curating handpicked luxury stays in Varanasi.",
  },
  {
    year: "2026",
    title: "Recognition",
    description:
      "Achieved 98% guest satisfaction rate with 40% repeat guest bookings.",
  },
  {
    year: "2027",
    title: "Looking Ahead",
    description:
      "Our focus is to deepen our Varanasi collection, enrich guest experiences, and expand our presence into new cities.",
  },
];
