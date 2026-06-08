import { Destination } from "@/types";
import { images } from "@/lib/images";

const v = images.destinations.varanasi;

export const destinations: Destination[] = [
  {
    id: "1",
    slug: "varanasi",
    name: "Varanasi",
    state: "Uttar Pradesh",
    country: "India",
    description:
      "One of the world's oldest living cities, Varanasi is the spiritual heart of India, where the sacred Ganges flows past ancient ghats, timeless temples, and labyrinthine lanes filled with devotion, music, and ritual. From the mesmerizing Ganga aarti at Dashashwamedh Ghat to the golden spires of Kashi Vishwanath Temple, every moment in Kashi is transformative.",
    shortDescription:
      "India's eternal spiritual capital on the banks of the sacred Ganges.",
    featuredImage: v.featured,
    gallery: [...v.gallery],
    featured: true,
    attractions: [
      {
        name: "Kashi Vishwanath Temple",
        description:
          "The most sacred Shiva temple in Hinduism, recently renovated with a grand corridor.",
        image: v.attractions.temple,
        distance: "2 km",
      },
      {
        name: "Dashashwamedh Ghat",
        description:
          "The most famous ghat for the spectacular evening Ganga aarti ceremony.",
        image: v.attractions.ghat,
        distance: "3 km",
      },
      {
        name: "Sarnath",
        description:
          "Where Buddha gave his first sermon, a serene Buddhist pilgrimage site.",
        image: v.attractions.sarnath,
        distance: "10 km",
      },
    ],
    localExperiences: [
      {
        title: "Ganga Aarti Ceremony",
        description:
          "Witness the breathtaking evening aarti with lamps, chants, and devotion.",
        image: v.experiences.aarti,
        category: "spiritual",
      },
      {
        title: "Boat Ride at Sunrise",
        description:
          "Glide along the Ganges at dawn as the city awakens with prayer and ritual.",
        image: v.experiences.boat,
        category: "cultural",
      },
      {
        title: "Banarasi Cuisine Trail",
        description:
          "From kachori sabzi to malaiyyo, taste the legendary flavours of Kashi.",
        image: v.experiences.food,
        category: "food",
      },
    ],
    travelGuide: [
      {
        title: "Best Time to Visit",
        content:
          "October to March offers pleasant weather. Dev Deepawali (November) and Maha Shivaratri are extraordinary times to visit.",
      },
      {
        title: "Getting There",
        content:
          "Lal Bahadur Shastri Airport (25 km). Varanasi Junction and Banaras railway stations. Well-connected by road from Lucknow and Prayagraj.",
      },
      {
        title: "Local Tips",
        content:
          "Dress modestly at temples and ghats. Remove footwear before entering sacred sites. Early morning boat rides offer the most peaceful experience.",
      },
    ],
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function getFeaturedDestinations(): Destination[] {
  return destinations.filter((d) => d.featured);
}
