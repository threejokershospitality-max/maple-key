import { Property, PROPERTY_CATEGORIES } from "@/types";
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
    airbnbUrl: "https://www.airbnb.co.in/h/thewaynemanor",
    name: "The Wayne Manor",
    city: "Varanasi",
    state: "Uttar Pradesh",
    country: "India",
    description:
      "A private ultra-luxury 6BHK villa in the serene surroundings of Varanasi, designed for indulgent stays and unforgettable gatherings. The villa features elegant interiors, spacious living areas, and modern amenities for complete comfort. Step outside to your own expansive lawn and private garden perfect for morning tea, evening bonfires, celebrations, or relaxed weekend escapes. Ideal for families, groups, and travellers seeking privacy, luxury, and a peaceful retreat near the city.",
    shortDescription:
      "A private ultra-luxury 6BHK villa in the serene surroundings of Varanasi, designed for indulgent stays and unforgettable gatherings. The villa features elegant...",
    categories: [...PROPERTY_CATEGORIES],
    featuredImage: wm.featured,
    gallery: [
        "/images/properties/the-wayne-manor/1.png",
        "/images/properties/the-wayne-manor/2.jpg",
        "/images/properties/the-wayne-manor/3.jpg",
        "/images/properties/the-wayne-manor/4.jpg",
        "/images/properties/the-wayne-manor/5.jpg",
      ],
    guests: 16,
    bedrooms: 6,
    bathrooms: 5,
    extraBeds: "4 extra mattress",
    highlights: [
      "Ganga View",
      "Near Temple",
      "Heritage Property",
      "Spiritual Retreat",
      "Family Friendly",
    ],
    coordinates: { lat: 25.3109, lng: 83.0107 },
    mapUrl: "https://maps.app.goo.gl/f3uZ2WKb1qCEuoTa9?g_st=ic",
    mapPlace:
      "The Wayne Manor - 6BHK Luxury Villa and Lawn, Krishna Nagar Colony, Airport Road, next to Raj TVS, Suddhipur, Shivpur, Varanasi, Uttar Pradesh 221002",
    destinationSlug: "varanasi",
    featured: true,
    checkIn: "1:00 PM",
    checkOut: "10:00 AM",
    averageRating: 5,
    reviewCount: 11,
    reviews: [
      {
        id: "r1a",
        guestName: "Joseph",
        rating: 5,
        review:
          "Great host. Enjoyed my stay, would prefer again and would suggest to everyone.",
        date: "2026-06-04",
      },
      {
        id: "r1b",
        guestName: "Priyanka",
        rating: 5,
        review:
          "Nice place. Caretaker is very supportive. Rooms are clean and spacious.",
        date: "2026-06-02",
      },
      {
        id: "r1c",
        guestName: "Vikas",
        rating: 5,
        review:
          "Had an absolutely fabulous experience! The house is beautiful, well-maintained, and equipped with excellent amenities that made our stay extremely comfortable.",
        date: "2026-05-15",
      },
      {
        id: "r1d",
        guestName: "Soni",
        rating: 5,
        review: "Good property, well approached, good services.",
        date: "2026-05-01",
      },
      {
        id: "r1e",
        guestName: "Ankur",
        rating: 5,
        review:
          "Stayed with family. Akash Pandey helped us a lot to explore some local food too. He is a nice guy.",
        date: "2026-04-15",
      },
      {
        id: "r1f",
        guestName: "Yash",
        rating: 5,
        review: "Comfortable and convenient, overall a good choice.",
        date: "2026-04-01",
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
    airbnbUrl: "https://www.airbnb.co.in/h/thegoldendior",
    name: "The Golden Dior",
    city: "Varanasi",
    state: "Uttar Pradesh",
    country: "India",
    description:
      "Tucked within the ancient lanes of the old city, The Golden Dior is a tranquil homestay where traditional Banarasi architecture meets thoughtful hospitality. A central courtyard, hand-painted frescoes, and proximity to the ghats make it ideal for spiritual seekers and cultural explorers.",
    shortDescription:
      "Intimate courtyard homestay in the heart of old Varanasi, minutes from the ghats.",
    categories: [...PROPERTY_CATEGORIES],
    featuredImage: gd.featured,
    gallery: [...gd.gallery],
    guests: 25,
    bedrooms: 7,
    bathrooms: 7,
    extraBeds: "11 extra mattress",
    highlights: [
      "Heritage Property",
      "Near Temple",
      "Spiritual Retreat",
      "Cultural Experience",
    ],
    coordinates: { lat: 25.3457936, lng: 82.9882039 },
    mapUrl: "https://maps.app.goo.gl/udvUiBrim4fnhsZd9",
    destinationSlug: "varanasi",
    featured: true,
    checkIn: "1:00 PM",
    checkOut: "10:00 AM",
    averageRating: 5,
    reviewCount: 5,
    reviews: [],
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
    airbnbUrl: "https://www.airbnb.co.in/h/thehavenretreatvns",
    name: "The Haven Retreat",
    city: "Varanasi",
    state: "Uttar Pradesh",
    country: "India",
    description:
      "Luxurious 3BHK Villa | Private Retreat Welcome to The Haven Retreat, a stunning 3BHK luxury villa designed for a perfect getaway. Nestled in a peaceful location, this stylish retreat offers a blend of modern elegance and ultimate comfort, making it ideal for families, friends, or business travellers",
    shortDescription:
      "Luxurious 3BHK Villa | Private Retreat  Welcome to The Haven Retreat, a stunning 3BHK luxury villa designed for a perfect getaway. Nestled in a peaceful...",
    categories: [...PROPERTY_CATEGORIES],
    featuredImage: hr.featured,
    gallery: [
        "/images/properties/the-haven-retreat/1.png",
        "/images/properties/the-haven-retreat/2.jpg",
        "/images/properties/the-haven-retreat/3.jpg",
        "/images/properties/the-haven-retreat/4.jpg",
        "/images/properties/the-haven-retreat/5.jpg",
      ],
    guests: 10,
    bedrooms: 3,
    bathrooms: 3,
    extraBeds: "4 extra mattress",
    highlights: [
      "Family Friendly",
      "Near Ghat",
      "Rooftop Terrace",
      "Long Stay Friendly",
      "Remote Work Friendly",
    ],
    coordinates: { lat: 25.2832, lng: 83.0062 },
    mapUrl: "https://maps.app.goo.gl/x4y7QenMW6oQsaGr8?g_st=ic",
    mapPlace:
      "The Haven Retreat - Luxury Villa, A-6129, Vishwakarma Nagar, Mohanpuri Colony, Karaundi, Kandwa, Varanasi, Uttar Pradesh 221011",
    destinationSlug: "varanasi",
    featured: true,
    checkIn: "1:00 PM",
    checkOut: "10:00 AM",
    averageRating: 4.83,
    reviewCount: 88,
    reviews: [
      {
        id: "r3a",
        guestName: "Krishna",
        rating: 5,
        review:
          "This is a really nice BNB and the host and manager here are also very nice—they talk very lovingly. I enjoyed it here and would say the same to everyone; this property is absolutely 5 star.",
        date: "2026-05-26",
      },
      {
        id: "r3b",
        guestName: "Sapna",
        rating: 5,
        review:
          "It was a nice, clean, and well-maintained property. Communication throughout was very clear, and all instructions were shared in advance. The location was accurate and easy to find. We also had someone available from time to time who promptly helped resolve any issues. Overall, we had a very comfortable stay and did not face any problems. Would definitely recommend it for families.",
        date: "2026-05-19",
      },
      {
        id: "r3c",
        guestName: "Akash",
        rating: 5,
        review:
          "Great stay! The place was clean, comfortable, and exactly as described. The host was friendly and responsive, making everything smooth and easy. Would definitely recommend and stay again!",
        date: "2026-04-15",
      },
      {
        id: "r3d",
        guestName: "Neha",
        rating: 5,
        review:
          "I had a wonderful stay at this Airbnb! The place was exactly as described—clean, comfortable, and thoughtfully arranged. The ambiance was warm and welcoming, making it feel like a home away from home. The host was extremely responsive and helpful throughout our stay, ensuring we had everything we needed. The location was also very convenient, with easy access to nearby attractions and essentials. Overall, it was a smooth and enjoyable stay, and I would definitely recommend this place to anyone visiting.",
        date: "2026-04-01",
      },
      {
        id: "r3e",
        guestName: "Shilpa",
        rating: 5,
        review:
          "The place was exactly as described and worth the money. Great for short stays. Location is a bit far from temple and ghat areas and quite interior though. We had our private car so it was manageable. Overall a good stay.",
        date: "2026-03-15",
      },
      {
        id: "r3f",
        guestName: "Manhar",
        rating: 5,
        review:
          "The offered property was very comfortable and well maintained. Rooms were clean and ventilated. Washrooms were clean with running hot and cold water. Deepak and Nitin were always available and of great help. Kitchen accessories were good. There was no gas but induction was sufficient. It was on the second floor with no lift. There was ample parking and safe. Overall, worth staying again. Thanks to dear Shikher for being responsive every time.",
        date: "2026-03-01",
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
    airbnbUrl: "https://www.airbnb.co.in/h/thegardenveil",
    name: "The Gardenveil Cottage",
    city: "Varanasi",
    state: "Uttar Pradesh",
    country: "India",
    description:
      "Welcome to The Gardenveil Suite, a luxury cottage and serene garden hideaway tucked behind lush blooms and whispering flowers. This private retreat offers modern luxury with earthy charm, featuring a plush king bed, elegant bath, a fully equipped kitchen, and your own tranquil outdoor space. Perfect for quiet escapes, romantic getaways, or peaceful inspiration in nature's embrace.",
    shortDescription:
      "A serene garden hideaway with modern luxury, earthy charm, and your own tranquil outdoor space in Varanasi.",
    categories: [...PROPERTY_CATEGORIES],
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
    extraBeds: "1 sofa cum bed",
    highlights: [
      "Group Friendly",
      "Family Friendly",
      "Private Garden",
      "Near Temple",
      "Pilgrimage Ready",
    ],
    coordinates: { lat: 25.3269, lng: 82.9873 },
    mapUrl: "https://maps.app.goo.gl/VmXFTNhQUsMYagGs7?g_st=ic",
    mapPlace:
      "Aikyam, SH-16/740, Yadav Nagar, Indrapur, Varanasi, Uttar Pradesh 221003",
    destinationSlug: "varanasi",
    featured: true,
    checkIn: "1:00 PM",
    checkOut: "10:00 AM",
    averageRating: 4.65,
    reviewCount: 57,
    reviews: [
      {
        id: "r4a",
        guestName: "Ankit",
        rating: 5,
        review:
          "Had a wonderful stay at this Airbnb! The host was incredibly welcoming and made sure I had everything I needed to feel at home. The location was perfect for exploring Varanasi.",
        date: "2026-06-02",
      },
      {
        id: "r4b",
        guestName: "Iman",
        rating: 5,
        review:
          "I stayed for 3 days and had a pleasant experience. The place is a bit away from the city centre, but that also makes it peaceful and calm. It's a good stay for anyone who prefers a quiet location away from the busy areas.",
        date: "2026-05-26",
      },
      {
        id: "r4c",
        guestName: "Akash",
        rating: 5,
        review:
          "The place is very beautiful—a beautiful, well-maintained garden and a nice cottage with all amenities. It feels like a house at a good price range; everything is available inside the cottage.",
        date: "2026-05-19",
      },
      {
        id: "r4d",
        guestName: "Anurag",
        rating: 5,
        review:
          "Nice quiet place if you want a peaceful stay experience away from the crowds in Varanasi. You can definitely opt for this stay. Also if you are looking for a workation, this is one of the better options.",
        date: "2026-04-01",
      },
      {
        id: "r4e",
        guestName: "Rishita",
        rating: 4,
        review:
          "The host is very accommodating and responsive. The place is just like the photos and very spacious. It is a little far from the main attractions of the city however not very inconvenient.",
        date: "2026-02-01",
      },
      {
        id: "r4f",
        guestName: "Dhruv",
        rating: 5,
        review:
          "It was a very wonderful experience—the staff members are friendly, the rooms are clean with a fresh aroma, and they have a very respectful behaviour. I like this place and the family-friendly vibe it gives.",
        date: "2026-01-01",
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
    airbnbUrl: "https://www.airbnb.co.in/h/thepearlmanorvns",
    name: "The Pearl Manor",
    city: "Varanasi",
    state: "Uttar Pradesh",
    country: "India",
    description:
      "This property is on first & second floor with no lift Its a 2BHK, 2BHK & 1BHK unit combined situated side by side 5 kms from Kashi Vishwanath The Pearl Manor – Luxury 5BHK Penthouse Welcome to The Pearl Manor, an opulent 5BHK penthouse designed for large families, wedding groups, and travelers seeking the finest stay in Varanasi. With expansive interiors, elegant furnishings, and premium amenities, this residence feels like your own private palace of comfort.",
    shortDescription:
      "This property is on first & second floor with no lift  Its a 2BHK, 2BHK & 1BHK unit combined situated side by side  5 kms from Kashi Vishwanath  The Pearl...",
    categories: [...PROPERTY_CATEGORIES],
    featuredImage: pm.featured,
    gallery: [
        "/images/properties/the-pearl-manor/1.png",
        "/images/properties/the-pearl-manor/2.jpg",
        "/images/properties/the-pearl-manor/3.jpg",
        "/images/properties/the-pearl-manor/4.jpg",
        "/images/properties/the-pearl-manor/5.jpg",
      ],
    guests: 15,
    bedrooms: 5,
    bathrooms: 6,
    extraBeds: "5 extra mattress",
    highlights: [
      "Luxury Interiors",
      "Heritage Property",
      "Near Temple",
      "Couples Retreat",
    ],
    coordinates: { lat: 25.3506558, lng: 82.9704815 },
    mapUrl: "https://maps.app.goo.gl/4cWcmRESbaSNqSCQ7",
    mapPlace:
      "PRITHVI PALACE HOMESTAY, S-2/346-A-19, Patrakar Puram Colony, Gilat Bazar, Bhojuveer, Varanasi, Uttar Pradesh 221002",
    destinationSlug: "varanasi",
    featured: true,
    checkIn: "1:00 PM",
    checkOut: "10:00 AM",
    averageRating: 4.82,
    reviewCount: 17,
    reviews: [
      {
        id: "r5a",
        guestName: "Prabhakar",
        rating: 5,
        review:
          "Staying at this homestay in Varanasi was truly a heartwarming experience. From the moment I arrived at night by 2:40 a.m., I was welcomed with genuine warmth and hospitality.",
        date: "2026-04-01",
      },
      {
        id: "r5b",
        guestName: "Rohit",
        rating: 5,
        review:
          "The property is appropriately located in a good colony. Sarnath is the closest from this place. The host even helped give local contact for Kashi darshan and guided about the tour and places.",
        date: "2026-03-15",
      },
      {
        id: "r5c",
        guestName: "Animesh",
        rating: 5,
        review:
          "Overall, I had a good stay at this Airbnb. The place was clean, well-maintained, and matched the description. The check-in process was smooth and the host was responsive and helpful.",
        date: "2026-02-15",
      },
      {
        id: "r5d",
        guestName: "Shashwat",
        rating: 5,
        review:
          "We had a wonderful stay at this Airbnb. The place was spotlessly clean, well-maintained, and exactly as shown in the photos. The location was very convenient.",
        date: "2026-02-10",
      },
      {
        id: "r5e",
        guestName: "Rounak",
        rating: 5,
        review:
          "This place is kind of a mansion, with numerous staff taking care of every need. The house is located inside a gated community and the surrounding is very calm and quiet.",
        date: "2026-02-01",
      },
      {
        id: "r5f",
        guestName: "Aditya",
        rating: 5,
        review:
          "We were a family of 11 people. The property was clean and well maintained. It was spacious and the rooms were very comfortable along with attached bathrooms.",
        date: "2025-12-01",
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
    airbnbUrl: "https://www.airbnb.co.in/h/theregalserenity",
    name: "The Regal Serenity",
    city: "Varanasi",
    state: "Uttar Pradesh",
    country: "India",
    description:
      "This property is on second floor with no lift Its a 2BHK & 1BHK unit combined situated side by side 5 kms from Kashi Vishwanath The Regal Serenity Suite – Luxury 3BHK Penthouse Welcome to The Regal Serenity Suite, a luxurious 3BHK penthouse that combines elegance, comfort, and modern design. Ideal for families, wedding guests, or groups of friends, this residence offers spacious interiors and a serene atmosphere, just a short drive from Varanasi's cultural and spiritual landmarks.",
    shortDescription:
      "This property is on second floor with no lift  Its a 2BHK & 1BHK unit combined situated side by side  5 kms from Kashi Vishwanath  The Regal Serenity Suite –...",
    categories: [...PROPERTY_CATEGORIES],
    featuredImage: rs.featured,
    gallery: [
        "/images/properties/the-regal-serenity/1.jpg",
        "/images/properties/the-regal-serenity/2.jpg",
        "/images/properties/the-regal-serenity/3.jpg",
        "/images/properties/the-regal-serenity/4.jpg",
        "/images/properties/the-regal-serenity/5.jpg",
      ],
    guests: 9,
    bedrooms: 3,
    bathrooms: 3,
    extraBeds: "3 extra mattress",
    highlights: [
      "Remote Work Friendly",
      "Long Stay Friendly",
      "Private Garden",
      "Peaceful Neighbourhood",
    ],
    coordinates: { lat: 25.3506558, lng: 82.9704815 },
    mapUrl: "https://maps.app.goo.gl/4cWcmRESbaSNqSCQ7",
    mapPlace:
      "PRITHVI PALACE HOMESTAY, S-2/346-A-19, Patrakar Puram Colony, Gilat Bazar, Bhojuveer, Varanasi, Uttar Pradesh 221002",
    destinationSlug: "varanasi",
    featured: true,
    checkIn: "1:00 PM",
    checkOut: "10:00 AM",
    averageRating: 4.86,
    reviewCount: 36,
    reviews: [
      {
        id: "r6a",
        guestName: "Tanmay",
        rating: 5,
        review:
          "Overall the stay was good and completely value for money. It was clean, safe for families, and the host was responsive and well mannered.",
        date: "2026-05-19",
      },
      {
        id: "r6b",
        guestName: "Jivan",
        rating: 5,
        review:
          "The apartment was super clean, stylish, and exactly as described—comfortable bed, great natural light, and a fantastic location. The check-in was seamless, and Priya was very helpful.",
        date: "2026-05-01",
      },
      {
        id: "r6c",
        guestName: "Rajesh",
        rating: 5,
        review:
          "Priya was very responsive and answered all our queries promptly. We stayed in a 3 BHK apartment on the 2nd floor, and the place looked exactly like the photos.",
        date: "2026-03-15",
      },
      {
        id: "r6d",
        guestName: "Saurabh",
        rating: 5,
        review:
          "Had a wonderful stay! The place was clean, well-maintained, and exactly as described. The host was very responsive and helpful throughout. Location was convenient and peaceful.",
        date: "2026-03-10",
      },
      {
        id: "r6e",
        guestName: "Ravi",
        rating: 5,
        review:
          "We had a wonderful stay at this apartment. The place was very beautiful, well-maintained, and extremely clean. Everything was perfectly organized and made our stay very comfortable.",
        date: "2026-03-01",
      },
      {
        id: "r6f",
        guestName: "Nivas",
        rating: 5,
        review:
          "One of the best properties we have ever booked through Airbnb. Very spacious rooms, spacious clean bathrooms and a beautiful kitchen gave us a feel of a homey environment.",
        date: "2026-01-01",
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
    airbnbUrl: "https://www.airbnb.co.in/h/thevelvetlotus",
    name: "The Velvet Lotus",
    city: "Varanasi",
    state: "Uttar Pradesh",
    country: "India",
    description:
      "This property is on first floor with no lift 5 kms from Kashi Vishwanath Welcome to The Velvet Lotus Residence A peaceful 2BHK retreat designed for comfort and style. With elegant interiors, cozy bedrooms, and a fully furnished living space, this home is perfect for families or small groups. Located just 6 km from Kashi Vishwanath, it offers a calm escape while keeping you close to the city's spiritual and cultural heart.",
    shortDescription:
      "This property is on first floor with no lift  5 kms from Kashi Vishwanath  Welcome to The Velvet Lotus Residence  A peaceful 2BHK retreat designed for comfort...",
    categories: [...PROPERTY_CATEGORIES],
    featuredImage: vl.featured,
    gallery: [
        "/images/properties/the-velvet-lotus/1.jpg",
        "/images/properties/the-velvet-lotus/2.jpg",
        "/images/properties/the-velvet-lotus/3.jpg",
        "/images/properties/the-velvet-lotus/4.jpg",
        "/images/properties/the-velvet-lotus/5.jpg",
      ],
    guests: 6,
    bedrooms: 2,
    bathrooms: 3,
    extraBeds: "2 extra mattress",
    highlights: [
      "Spiritual Retreat",
      "Near Temple",
      "Boutique Stay",
      "Meditation Space",
    ],
    coordinates: { lat: 25.3506558, lng: 82.9704815 },
    mapUrl: "https://maps.app.goo.gl/4cWcmRESbaSNqSCQ7",
    mapPlace:
      "PRITHVI PALACE HOMESTAY, S-2/346-A-19, Patrakar Puram Colony, Gilat Bazar, Bhojuveer, Varanasi, Uttar Pradesh 221002",
    destinationSlug: "varanasi",
    featured: true,
    checkIn: "1:00 PM",
    checkOut: "10:00 AM",
    averageRating: 4.86,
    reviewCount: 43,
    reviews: [
      {
        id: "r7a",
        guestName: "Arvind",
        rating: 5,
        review:
          "House was good and well furnished; room, hall, and bathroom were also clean. There was a little issue with search location—needs to be clearer about location—and the kitchen could be improved.",
        date: "2026-05-01",
      },
      {
        id: "r7b",
        guestName: "Atul",
        rating: 5,
        review:
          "Had a wonderful one-day stay at this Airbnb in Varanasi! From the moment I arrived, everything felt thoughtfully arranged and welcoming. The space was clean and comfortable.",
        date: "2026-04-15",
      },
      {
        id: "r7c",
        guestName: "Vineet",
        rating: 5,
        review:
          "This place is absolutely wonderful. Prime location, peaceful environment, responsive host, sincere caretaker, parking space and beautiful interiors make it a perfect place for a stay.",
        date: "2026-04-01",
      },
      {
        id: "r7d",
        guestName: "Purvanshi",
        rating: 5,
        review:
          "The place was spotless and exactly as shown in the photos. The atmosphere was calm, peaceful, and free from unnecessary disturbances. The staff were friendly and helpful.",
        date: "2026-03-15",
      },
      {
        id: "r7e",
        guestName: "Saurabh",
        rating: 5,
        review:
          "It was a great, peaceful and comfortable stay. Big rooms, clean washroom, easy to check-in and caretaker Mr Deepak was helpful with our luggage transfer to the first floor.",
        date: "2026-03-10",
      },
      {
        id: "r7f",
        guestName: "Arpith",
        rating: 5,
        review:
          "We had a great stay at this property. The place is good, clean, and very spacious, which made our stay comfortable. A special thanks to the caretaker, Deepak Pandey.",
        date: "2026-03-01",
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

export function getPropertiesByDestination(
  destinationSlug: string
): Property[] {
  return properties.filter((p) => p.destinationSlug === destinationSlug);
}

export function getPropertiesByCategory(
  category: Property["categories"][number]
): Property[] {
  return properties.filter((p) => p.categories.includes(category));
}
