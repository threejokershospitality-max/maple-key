import { Property } from "@/types";
import { images } from "@/lib/images";

const wm = images.properties.wayneManor;
const gd = images.properties.goldenDior;
const hr = images.properties.havenRetreat;
const gc = images.properties.gardenveilCottage;
const pm = images.properties.pearlManor;
const rs = images.properties.regalSerenity;
const vl = images.properties.velvetLotus;

export const properties: Property[] = [
  {
    id: "1",
    slug: "the-wayne-manor",
    name: "The Wayne Manor",
    city: "Varanasi",
    state: "Uttar Pradesh",
    country: "India",
    description:
      "A private ultra-luxury 6BHK villa in the serene surroundings of Varanasi, designed for indulgent stays and unforgettable gatherings. The villa features elegant interiors, spacious living areas, and modern amenities for complete comfort. Step outside to your own expansive lawn and private garden perfect for morning tea, evening bonfires, celebrations, or relaxed weekend escapes. Ideal for families, groups, and travellers seeking privacy, luxury, and a peaceful retreat near the city.",
    shortDescription:
      "A private ultra-luxury 6BHK villa in the serene surroundings of Varanasi, designed for indulgent stays and unforgettable gatherings. The villa features elegant...",
    category: "pilgrimage",
    featuredImage: wm.featured,
    gallery: [
        "/images/properties/the-wayne-manor/1.png",
        "/images/properties/the-wayne-manor/2.jpg",
        "/images/properties/the-wayne-manor/3.jpg",
        "/images/properties/the-wayne-manor/4.jpg",
        "/images/properties/the-wayne-manor/5.jpg",
      ],
    guests: 12,
    bedrooms: 6,
    bathrooms: 5,
    amenities: [
      "High-Speed WiFi",
      "Fully Equipped Kitchen",
      "Air Conditioning",
      "Smart TV",
      "Parking",
      "Power Backup",
      "Rooftop Terrace",
      "Security",
      "Housekeeping",
      "Ganga View",
    ],
    highlights: [
      "Ganga View",
      "Near Temple",
      "Heritage Property",
      "Spiritual Retreat",
      "Family Friendly",
    ],
    coordinates: { lat: 25.3109, lng: 83.0107 },
    destinationSlug: "varanasi",
    featured: true,
    checkIn: "1:00 PM",
    checkOut: "10:00 AM",
    bedroomDetails: [
      {
        name: "Ganga Suite",
        bedType: "King Bed",
        features: ["River View", "Ensuite Bathroom", "Private Balcony"],
      },
      {
        name: "Kashi Chamber",
        bedType: "Queen Bed",
        features: ["Courtyard View", "Ensuite Bathroom"],
      },
      {
        name: "Ghat View Room",
        bedType: "Twin Beds",
        features: ["Partial River View", "Ensuite Bathroom"],
      },
    ],
    nearbyAttractions: [
      {
        name: "Kashi Vishwanath Temple",
        description: "The holiest Shiva temple, a short walk from the property.",
        distance: "800 m",
        travelTime: "10 min walk",
        image: wm.attractions.temple,
      },
      {
        name: "Dashashwamedh Ghat",
        description: "Famous ghat for the spectacular evening Ganga aarti.",
        distance: "1 km",
        travelTime: "12 min walk",
        image: wm.attractions.ghat,
      },
      {
        name: "Manikarnika Ghat",
        description: "One of the oldest and most sacred cremation ghats of Kashi.",
        distance: "1.5 km",
        travelTime: "15 min walk",
        image: wm.attractions.manikarnika,
      },
    ],
    houseRules: [
      "Vegetarian meals only on premises",
      "Respectful attire recommended near ghats and temples",
      "Quiet hours: 10 PM – 6 AM",
      "No alcohol on property",
      "Check-in ID proof required for all guests",
    ],
    reviews: [
      {
        id: "r1",
        guestName: "Meera Krishnan",
        guestImage: images.guests.guest3,
        rating: 5,
        review:
          "Waking up to the Ganges from our balcony was divine. Perfect base for our Kashi pilgrimage, the team arranged everything from temple darshan to boat rides.",
        date: "2025-11-10",
      },
    ],
    faq: [
      {
        question: "How far is Kashi Vishwanath Temple?",
        answer: "The temple is approximately an 8–10 minute walk from the property.",
      },
      {
        question: "Can you arrange Ganga aarti viewing?",
        answer:
          "Yes, we arrange guided visits to Dashashwamedh Ghat and private boat rides for the evening aarti.",
      },
    ],
  },
  {
    id: "2",
    slug: "the-golden-dior",
    name: "The Golden Dior",
    city: "Varanasi",
    state: "Uttar Pradesh",
    country: "India",
    description:
      "Tucked within the ancient lanes of the old city, The Golden Dior is a tranquil homestay where traditional Banarasi architecture meets thoughtful hospitality. A central courtyard, hand-painted frescoes, and proximity to the ghats make it ideal for spiritual seekers and cultural explorers.",
    shortDescription:
      "Intimate courtyard homestay in the heart of old Varanasi, minutes from the ghats.",
    category: "pilgrimage",
    featuredImage: gd.featured,
    gallery: [...gd.gallery],
    guests: 6,
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
      "High-Speed WiFi",
      "Fully Equipped Kitchen",
      "Air Conditioning",
      "Smart TV",
      "Power Backup",
      "Courtyard",
      "Security",
      "Housekeeping",
      "Yoga Mats",
    ],
    highlights: [
      "Heritage Property",
      "Near Temple",
      "Spiritual Retreat",
      "Cultural Experience",
    ],
    coordinates: { lat: 25.3176, lng: 83.0059 },
    destinationSlug: "varanasi",
    featured: true,
    checkIn: "12:00 PM",
    checkOut: "10:00 AM",
    bedroomDetails: [
      {
        name: "Courtyard Suite",
        bedType: "King Bed",
        features: ["Courtyard Access", "Ensuite Bathroom"],
      },
      {
        name: "Lane Room",
        bedType: "Queen Bed",
        features: ["Old City View", "Ensuite Bathroom"],
      },
    ],
    nearbyAttractions: [
      {
        name: "Vishwanath Gali",
        description: "Historic lane leading to Kashi Vishwanath Temple.",
        distance: "500 m",
        travelTime: "8 min walk",
        image: gd.attractions.gali,
      },
      {
        name: "Assi Ghat",
        description: "Southern ghat popular for morning yoga and evening gatherings.",
        distance: "3 km",
        travelTime: "12 min",
        image: gd.attractions.assi,
      },
    ],
    houseRules: [
      "Remove footwear in courtyard and prayer areas",
      "Silence during morning meditation hours (6–8 AM)",
      "No smoking inside",
      "Respect neighbours in the old city lanes",
    ],
    reviews: [
      {
        id: "r2",
        guestName: "Rajesh & Anjali Verma",
        rating: 5,
        review:
          "The courtyard homestay felt like staying with family in Kashi. Authentic, peaceful, and perfectly located for temple visits.",
        date: "2025-10-05",
      },
    ],
    faq: [
      {
        question: "Is parking available?",
        answer:
          "Street parking is available nearby. We can also arrange pickup from Varanasi Junction.",
      },
    ],
  },
  {
    id: "3",
    slug: "the-haven-retreat",
    name: "The Haven Retreat",
    city: "Varanasi",
    state: "Uttar Pradesh",
    country: "India",
    description:
      "Luxurious 3BHK Villa | Private Retreat Welcome to The Haven Retreat, a stunning 3BHK luxury villa designed for a perfect getaway. Nestled in a peaceful location, this stylish retreat offers a blend of modern elegance and ultimate comfort, making it ideal for families, friends, or business travellers",
    shortDescription:
      "Luxurious 3BHK Villa | Private Retreat  Welcome to The Haven Retreat, a stunning 3BHK luxury villa designed for a perfect getaway. Nestled in a peaceful...",
    category: "family-vacation",
    featuredImage: hr.featured,
    gallery: [
        "/images/properties/the-haven-retreat/1.png",
        "/images/properties/the-haven-retreat/2.jpg",
        "/images/properties/the-haven-retreat/3.jpg",
        "/images/properties/the-haven-retreat/4.jpg",
        "/images/properties/the-haven-retreat/5.jpg",
      ],
    guests: 6,
    bedrooms: 3,
    bathrooms: 3,
    amenities: [
      "High-Speed WiFi",
      "Fully Equipped Kitchen",
      "Air Conditioning",
      "Smart TV",
      "Parking",
      "Power Backup",
      "Rooftop Terrace",
      "Workspace",
      "Security",
      "Housekeeping",
    ],
    highlights: [
      "Family Friendly",
      "Near Ghat",
      "Rooftop Terrace",
      "Long Stay Friendly",
      "Remote Work Friendly",
    ],
    coordinates: { lat: 25.2832, lng: 83.0062 },
    destinationSlug: "varanasi",
    featured: true,
    checkIn: "2:00 PM",
    checkOut: "11:00 AM",
    bedroomDetails: [
      {
        name: "Terrace Suite",
        bedType: "King Bed",
        features: ["Rooftop Access", "Ensuite Bathroom"],
      },
      {
        name: "Family Room",
        bedType: "Queen Bed",
        features: ["Garden View", "Ensuite Bathroom"],
      },
      {
        name: "Twin Room",
        bedType: "Twin Beds",
        features: ["Street View", "Shared Bathroom"],
      },
      {
        name: "Study Room",
        bedType: "Queen Bed",
        features: ["Workspace", "Ensuite Bathroom"],
      },
    ],
    nearbyAttractions: [
      {
        name: "Assi Ghat",
        description: "Popular ghat for morning rituals, yoga, and boat rides.",
        distance: "400 m",
        travelTime: "5 min walk",
        image: hr.attractions.assi,
      },
      {
        name: "Banaras Hindu University",
        description: "Historic campus with museums, temples, and cultural events.",
        distance: "2 km",
        travelTime: "8 min",
        image: hr.attractions.bhu,
      },
    ],
    houseRules: [
      "Children welcome, please supervise on rooftop",
      "Quiet hours: 10 PM – 7 AM",
      "Maximum occupancy as per booking",
      "No parties without prior approval",
    ],
    reviews: [
      {
        id: "r3",
        guestName: "Priya Sharma",
        guestImage: images.guests.guest1,
        rating: 5,
        review:
          "Perfect for our family trip to Varanasi. Spacious, clean, and the rooftop views at sunrise were unforgettable.",
        date: "2025-09-20",
      },
    ],
    faq: [
      {
        question: "Is it suitable for long stays?",
        answer:
          "Yes, we offer discounted rates for stays of 7+ nights. Kitchen and workspace are fully equipped.",
      },
    ],
  },
  {
    id: "4",
    slug: "the-gardenveil-cottage",
    name: "The Gardenveil Cottage",
    city: "Varanasi",
    state: "Uttar Pradesh",
    country: "India",
    description:
      "Welcome to The Gardenveil Suite, a luxury cottage and serene garden hideaway tucked behind lush blooms and whispering flowers. This private retreat offers modern luxury with earthy charm, featuring a plush king bed, elegant bath, a fully equipped kitchen, and your own tranquil outdoor space. Perfect for quiet escapes, romantic getaways, or peaceful inspiration in nature's embrace.",
    shortDescription:
      "A serene garden hideaway with modern luxury, earthy charm, and your own tranquil outdoor space in Varanasi.",
    category: "group-retreat",
    featuredImage: gc.featured,
    gallery: [
        "/images/properties/the-gardenveil-cottage/1.jpg",
        "/images/properties/the-gardenveil-cottage/2.jpg",
        "/images/properties/the-gardenveil-cottage/3.jpg",
        "/images/properties/the-gardenveil-cottage/4.jpg",
        "/images/properties/the-gardenveil-cottage/5.jpg",
      ],
    guests: 4,
    bedrooms: 1,
    bathrooms: 1,
    amenities: [
      "High-Speed WiFi",
      "Fully Equipped Kitchen",
      "Air Conditioning",
      "Smart TV",
      "Parking",
      "Power Backup",
      "Private Garden",
      "Security",
      "Housekeeping",
      "Outdoor Dining",
    ],
    highlights: [
      "Group Friendly",
      "Family Friendly",
      "Private Garden",
      "Near Temple",
      "Pilgrimage Ready",
    ],
    coordinates: { lat: 25.3269, lng: 82.9873 },
    destinationSlug: "varanasi",
    featured: true,
    checkIn: "2:00 PM",
    checkOut: "11:00 AM",
    bedroomDetails: [
      {
        name: "Master Suite",
        bedType: "King Bed",
        features: ["Garden View", "Ensuite Bathroom"],
      },
      {
        name: "Pilgrim Room",
        bedType: "Queen Bed",
        features: ["Ensuite Bathroom"],
      },
      {
        name: "Family Room",
        bedType: "Queen Bed",
        features: ["Ensuite Bathroom"],
      },
      {
        name: "Guest Room A",
        bedType: "Twin Beds",
        features: ["Shared Bathroom"],
      },
      {
        name: "Guest Room B",
        bedType: "Twin Beds",
        features: ["Shared Bathroom"],
      },
    ],
    nearbyAttractions: [
      {
        name: "Sankat Mochan Temple",
        description: "Beloved Hanuman temple, especially vibrant on Tuesdays.",
        distance: "4 km",
        travelTime: "15 min",
        image: gc.attractions.sankatMochan,
      },
      {
        name: "Sarnath",
        description: "Buddhist pilgrimage site where Buddha first taught.",
        distance: "12 km",
        travelTime: "30 min",
        image: gc.attractions.sarnath,
      },
    ],
    houseRules: [
      "Maximum 14 guests including children",
      "Vegetarian kitchen preferred for pilgrimage groups",
      "Event gatherings require prior approval",
      "Quiet hours: 10 PM – 7 AM",
    ],
    reviews: [
      {
        id: "r4",
        guestName: "The Gupta Family",
        rating: 5,
        review:
          "Hosted our family pilgrimage with 12 members. The villa was immaculate and the team arranged all our temple visits seamlessly.",
        date: "2025-08-15",
      },
    ],
    faq: [
      {
        question: "Can you arrange group temple tours?",
        answer:
          "Yes, we arrange guided temple circuits, boat rides, and transportation for groups.",
      },
    ],
  },
  {
    id: "5",
    slug: "the-pearl-manor",
    name: "The Pearl Manor",
    city: "Varanasi",
    state: "Uttar Pradesh",
    country: "India",
    description:
      "This property is on first & second floor with no lift Its a 2BHK, 2BHK & 1BHK unit combined situated side by side 5 kms from Kashi Vishwanath The Pearl Manor – Luxury 5BHK Penthouse Welcome to The Pearl Manor, an opulent 5BHK penthouse designed for large families, wedding groups, and travelers seeking the finest stay in Varanasi. With expansive interiors, elegant furnishings, and premium amenities, this residence feels like your own private palace of comfort.",
    shortDescription:
      "This property is on first & second floor with no lift  Its a 2BHK, 2BHK & 1BHK unit combined situated side by side  5 kms from Kashi Vishwanath  The Pearl...",
    category: "luxury-villa",
    featuredImage: pm.featured,
    gallery: [
        "/images/properties/the-pearl-manor/1.png",
        "/images/properties/the-pearl-manor/2.jpg",
        "/images/properties/the-pearl-manor/3.jpg",
        "/images/properties/the-pearl-manor/4.jpg",
        "/images/properties/the-pearl-manor/5.jpg",
      ],
    guests: 10,
    bedrooms: 5,
    bathrooms: 6,
    amenities: [
      "High-Speed WiFi",
      "Fully Equipped Kitchen",
      "Air Conditioning",
      "Smart TV",
      "Parking",
      "Power Backup",
      "Private Terrace",
      "Security",
      "Housekeeping",
    ],
    highlights: [
      "Luxury Interiors",
      "Heritage Property",
      "Near Temple",
      "Couples Retreat",
    ],
    coordinates: { lat: 25.3142, lng: 83.0089 },
    destinationSlug: "varanasi",
    featured: true,
    checkIn: "1:00 PM",
    checkOut: "10:00 AM",
    bedroomDetails: [
      {
        name: "Pearl Suite",
        bedType: "King Bed",
        features: ["Terrace Access", "Ensuite Bathroom"],
      },
      {
        name: "Manor Chamber",
        bedType: "Queen Bed",
        features: ["Garden View", "Ensuite Bathroom"],
      },
      {
        name: "Guest Room",
        bedType: "Twin Beds",
        features: ["Courtyard View", "Ensuite Bathroom"],
      },
    ],
    nearbyAttractions: [
      {
        name: "Kashi Vishwanath Temple",
        description: "The holiest Shiva temple in Varanasi.",
        distance: "1.2 km",
        travelTime: "15 min walk",
        image: pm.attractions.temple,
      },
      {
        name: "Dashashwamedh Ghat",
        description: "Renowned ghat for the evening Ganga aarti.",
        distance: "1.5 km",
        travelTime: "18 min walk",
        image: pm.attractions.ghat,
      },
    ],
    houseRules: [
      "Quiet hours: 10 PM – 6 AM",
      "Check-in ID proof required for all guests",
      "No smoking inside",
      "Respectful attire near temples and ghats",
    ],
    reviews: [
      {
        id: "r5",
        guestName: "Ananya & Vikram Singh",
        rating: 5,
        review:
          "The Pearl Manor exceeded our expectations. Beautiful interiors, warm hospitality, and a perfect location for our anniversary trip to Kashi.",
        date: "2025-07-18",
      },
    ],
    faq: [
      {
        question: "Is the property suitable for couples?",
        answer:
          "Yes, The Pearl Manor is ideal for couples seeking a refined, intimate stay in Varanasi.",
      },
    ],
  },
  {
    id: "6",
    slug: "the-regal-serenity",
    name: "The Regal Serenity",
    city: "Varanasi",
    state: "Uttar Pradesh",
    country: "India",
    description:
      "This property is on second floor with no lift Its a 2BHK & 1BHK unit combined situated side by side 5 kms from Kashi Vishwanath The Regal Serenity Suite – Luxury 3BHK Penthouse Welcome to The Regal Serenity Suite, a luxurious 3BHK penthouse that combines elegance, comfort, and modern design. Ideal for families, wedding guests, or groups of friends, this residence offers spacious interiors and a serene atmosphere, just a short drive from Varanasi's cultural and spiritual landmarks.",
    shortDescription:
      "This property is on second floor with no lift  Its a 2BHK & 1BHK unit combined situated side by side  5 kms from Kashi Vishwanath  The Regal Serenity Suite –...",
    category: "long-stay",
    featuredImage: rs.featured,
    gallery: [
        "/images/properties/the-regal-serenity/1.jpg",
        "/images/properties/the-regal-serenity/2.jpg",
        "/images/properties/the-regal-serenity/3.jpg",
        "/images/properties/the-regal-serenity/4.jpg",
        "/images/properties/the-regal-serenity/5.jpg",
      ],
    guests: 6,
    bedrooms: 3,
    bathrooms: 3,
    amenities: [
      "High-Speed WiFi",
      "Fully Equipped Kitchen",
      "Air Conditioning",
      "Smart TV",
      "Parking",
      "Power Backup",
      "Workspace",
      "Private Garden",
      "Security",
      "Housekeeping",
    ],
    highlights: [
      "Remote Work Friendly",
      "Long Stay Friendly",
      "Private Garden",
      "Peaceful Neighbourhood",
    ],
    coordinates: { lat: 25.2985, lng: 82.9951 },
    destinationSlug: "varanasi",
    featured: true,
    checkIn: "12:00 PM",
    checkOut: "11:00 AM",
    bedroomDetails: [
      {
        name: "Serenity Suite",
        bedType: "King Bed",
        features: ["Garden View", "Ensuite Bathroom", "Workspace"],
      },
      {
        name: "Study Room",
        bedType: "Queen Bed",
        features: ["Dedicated Desk", "Ensuite Bathroom"],
      },
      {
        name: "Garden Room",
        bedType: "Twin Beds",
        features: ["Garden Access", "Ensuite Bathroom"],
      },
    ],
    nearbyAttractions: [
      {
        name: "Assi Ghat",
        description: "Popular ghat for morning yoga and boat rides.",
        distance: "2.5 km",
        travelTime: "10 min",
        image: rs.attractions.assi,
      },
      {
        name: "Banaras Hindu University",
        description: "Historic campus with museums and cultural events.",
        distance: "3 km",
        travelTime: "12 min",
        image: rs.attractions.bhu,
      },
    ],
    houseRules: [
      "Quiet hours: 10 PM – 7 AM",
      "Workspace areas for registered guests only",
      "Monthly stay discounts available on request",
      "No parties without prior approval",
    ],
    reviews: [
      {
        id: "r6",
        guestName: "David Chen",
        rating: 5,
        review:
          "Spent three weeks at The Regal Serenity while working remotely. Fast WiFi, peaceful garden, and the team made long-stay living effortless.",
        date: "2025-06-30",
      },
    ],
    faq: [
      {
        question: "Do you offer monthly rates?",
        answer:
          "Yes, discounted monthly rates are available for stays of 28 nights or more.",
      },
    ],
  },
  {
    id: "7",
    slug: "the-velvet-lotus",
    name: "The Velvet Lotus",
    city: "Varanasi",
    state: "Uttar Pradesh",
    country: "India",
    description:
      "This property is on first floor with no lift 5 kms from Kashi Vishwanath Welcome to The Velvet Lotus Residence A peaceful 2BHK retreat designed for comfort and style. With elegant interiors, cozy bedrooms, and a fully furnished living space, this home is perfect for families or small groups. Located just 6 km from Kashi Vishwanath, it offers a calm escape while keeping you close to the city's spiritual and cultural heart.",
    shortDescription:
      "This property is on first floor with no lift  5 kms from Kashi Vishwanath  Welcome to The Velvet Lotus Residence  A peaceful 2BHK retreat designed for comfort...",
    category: "pilgrimage",
    featuredImage: vl.featured,
    gallery: [
        "/images/properties/the-velvet-lotus/1.jpg",
        "/images/properties/the-velvet-lotus/2.jpg",
        "/images/properties/the-velvet-lotus/3.jpg",
        "/images/properties/the-velvet-lotus/4.jpg",
        "/images/properties/the-velvet-lotus/5.jpg",
      ],
    guests: 4,
    bedrooms: 2,
    bathrooms: 3,
    amenities: [
      "High-Speed WiFi",
      "Air Conditioning",
      "Smart TV",
      "Power Backup",
      "Meditation Space",
      "Yoga Mats",
      "Security",
      "Housekeeping",
    ],
    highlights: [
      "Spiritual Retreat",
      "Near Temple",
      "Boutique Stay",
      "Meditation Space",
    ],
    coordinates: { lat: 25.3168, lng: 83.0072 },
    destinationSlug: "varanasi",
    featured: true,
    checkIn: "12:00 PM",
    checkOut: "10:00 AM",
    bedroomDetails: [
      {
        name: "Lotus Suite",
        bedType: "King Bed",
        features: ["Temple View", "Ensuite Bathroom", "Meditation Nook"],
      },
      {
        name: "Velvet Room",
        bedType: "Queen Bed",
        features: ["Courtyard View", "Ensuite Bathroom"],
      },
    ],
    nearbyAttractions: [
      {
        name: "Vishwanath Gali",
        description: "Historic lane leading to Kashi Vishwanath Temple.",
        distance: "400 m",
        travelTime: "6 min walk",
        image: vl.attractions.gali,
      },
      {
        name: "Dashashwamedh Ghat",
        description: "Famous ghat for the spectacular evening Ganga aarti.",
        distance: "900 m",
        travelTime: "12 min walk",
        image: vl.attractions.ghat,
      },
    ],
    houseRules: [
      "Silence during morning meditation hours (6–8 AM)",
      "Vegetarian meals only on premises",
      "Remove footwear in prayer areas",
      "Respectful attire near temples",
    ],
    reviews: [
      {
        id: "r7",
        guestName: "Lakshmi Iyer",
        rating: 5,
        review:
          "The Velvet Lotus was exactly what I needed for my spiritual retreat. Peaceful, beautiful, and deeply connected to the soul of Kashi.",
        date: "2025-08-02",
      },
    ],
    faq: [
      {
        question: "Is there a space for meditation?",
        answer:
          "Yes, The Velvet Lotus includes a dedicated meditation alcove and provides yoga mats for morning practice.",
      },
    ],
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.featured);
}

export function getPropertiesByDestination(
  destinationSlug: string
): Property[] {
  return properties.filter((p) => p.destinationSlug === destinationSlug);
}

export function getPropertiesByCategory(
  category: Property["category"]
): Property[] {
  return properties.filter((p) => p.category === category);
}
