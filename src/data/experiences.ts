import { Experience } from "@/types";
import { images } from "@/lib/images";

export const experiences: Experience[] = [
  {
    id: "1",
    slug: "family-vacations",
    title: "Family Vacations",
    description:
      "Create lasting memories with thoughtfully designed family-friendly stays in Varanasi. Spacious homes near Assi Ghat, rooftop terraces for sunrise views, and curated activities for all ages ensure everyone experiences the magic of Kashi.",
    shortDescription:
      "Spacious, safe properties in Varanasi designed for unforgettable family holidays.",
    featuredImage: images.experiences.family,
    gallery: [images.experiences.family, images.ghatAarti] as string[],
    category: "family-vacations",
    highlights: [
      "Spacious multi-bedroom layouts",
      "Family-friendly neighbourhoods",
      "Boat rides and cultural activities for children",
      "Fully equipped kitchens for family meals",
      "Rooftop terraces with Ganga views",
    ],
    relatedPropertySlugs: ["the-haven-retreat", "the-gardenveil-cottage"],
  },
  {
    id: "2",
    slug: "spiritual-journeys",
    title: "Spiritual Journeys",
    description:
      "Embark on transformative spiritual journeys with stays designed for pilgrims and seekers in the eternal city of Kashi. Riverside havelis, temple-adjacent homestays, and properties with spaces for prayer provide the perfect sanctuary for devotion and reflection.",
    shortDescription:
      "Sacred stays in Varanasi for pilgrims and spiritual seekers on the Ganges.",
    featuredImage: images.experiences.spiritual,
    gallery: [images.experiences.spiritual],
    category: "spiritual-journeys",
    highlights: [
      "Ganga-view and temple-adjacent locations",
      "Private spaces for prayer and meditation",
      "Vegetarian meal arrangements",
      "Guided temple and ghat tours",
      "Ganga aarti and boat ride arrangements",
    ],
    relatedPropertySlugs: ["the-wayne-manor", "the-golden-dior", "the-velvet-lotus"],
  },
  {
    id: "3",
    slug: "weekend-getaways",
    title: "Weekend Getaways",
    description:
      "Escape for a rejuvenating weekend in Kashi. Heritage courtyard homestays, peaceful lanes of the old city, and the timeless rhythm of the ghats, perfect for couples and small groups seeking a refreshing spiritual break.",
    shortDescription:
      "Short spiritual escapes in the ancient lanes and ghats of Varanasi.",
    featuredImage: images.experiences.weekend,
    gallery: [images.experiences.weekend],
    category: "weekend-getaways",
    highlights: [
      "Heritage homestays in the old city",
      "Walking distance to ghats and temples",
      "Sunrise boat rides on the Ganges",
      "Banarasi cuisine experiences",
      "Flexible 2-night minimum stays",
    ],
    relatedPropertySlugs: ["the-golden-dior", "the-velvet-lotus"],
  },
  {
    id: "4",
    slug: "long-stays",
    title: "Long Stays",
    description:
      "Make yourself at home in Varanasi with extended stays designed for comfort and immersion. Whether you're on a research assignment, extended pilgrimage, or sabbatical, our long-stay properties offer space, amenities, and local support.",
    shortDescription:
      "Extended stays in Varanasi with home comforts for deep cultural immersion.",
    featuredImage: images.experiences.longStay,
    gallery: [images.experiences.longStay],
    category: "long-stays",
    highlights: [
      "Dedicated workspaces with fast WiFi",
      "Weekly housekeeping included",
      "Discounted monthly rates",
      "Local guides and community connections",
      "Quiet residential neighbourhoods",
    ],
    relatedPropertySlugs: ["the-haven-retreat", "the-wayne-manor", "the-regal-serenity"],
  },
  {
    id: "5",
    slug: "workations",
    title: "Workations",
    description:
      "Blend productivity with spiritual inspiration in Varanasi. Dedicated workspaces, fast WiFi, and the timeless energy of Kashi, take calls from a rooftop terrace overlooking the Ganges.",
    shortDescription:
      "Productive workspaces in inspiring Varanasi locations for remote workers.",
    featuredImage: images.experiences.workation,
    gallery: [images.experiences.workation],
    category: "workations",
    highlights: [
      "High-speed dedicated WiFi",
      "Ergonomic workspaces",
      "Quiet zones for calls and meetings",
      "Power backup for uninterrupted work",
      "Peaceful neighbourhoods away from crowds",
    ],
    relatedPropertySlugs: ["the-haven-retreat", "the-regal-serenity"],
  },
  {
    id: "6",
    slug: "group-gatherings",
    title: "Group Gatherings",
    description:
      "Celebrate life's milestones with properties designed for groups in Varanasi. Family pilgrimages, wedding parties, and reunions, our large-capacity villas provide the space, amenities, and support for memorable gatherings in Kashi.",
    shortDescription:
      "Large-capacity villas in Varanasi for pilgrimages, reunions, and celebrations.",
    featuredImage: images.experiences.group,
    gallery: [images.experiences.group],
    category: "group-gatherings",
    highlights: [
      "Properties accommodating 10–14+ guests",
      "Private gardens and outdoor dining",
      "Catering for large groups",
      "Temple tour and ritual arrangements",
      "Dedicated event coordination support",
    ],
    relatedPropertySlugs: ["the-gardenveil-cottage", "the-pearl-manor"],
  },
];

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}
