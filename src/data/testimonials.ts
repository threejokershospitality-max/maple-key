import { Testimonial } from "@/types";

const PROPERTY_ROTATION = [
  "the-wayne-manor",
  "the-gardenveil-suite",
  "the-haven-retreat",
  "the-pearl-manor",
  "the-regal-serenity",
  "the-velvet-lotus",
] as const;

const allTestimonials: Testimonial[] = [
  {
    id: "t1",
    guestName: "Ankit",
    rating: 5,
    review:
      "Had a wonderful stay at this Airbnb! The host was incredibly welcoming and made sure I had everything I needed to feel at home. The location was perfect for exploring Varanasi.",
    propertySlug: "the-gardenveil-suite",
    propertyName: "The Gardenveil Suite",
    date: "2026-06-02",
  },
  {
    id: "t2",
    guestName: "Iman",
    rating: 5,
    review:
      "I stayed for 3 days and had a pleasant experience. The place is a bit away from the city centre, but that also makes it peaceful and calm. It's a good stay for anyone who prefers a quiet location away from the busy areas.",
    propertySlug: "the-gardenveil-suite",
    propertyName: "The Gardenveil Suite",
    date: "2026-05-26",
  },
  {
    id: "t3",
    guestName: "Akash",
    rating: 5,
    review:
      "The place is very beautiful—a beautiful, well-maintained garden and a nice cottage with all amenities. It feels like a house at a good price range; everything is available inside the cottage.",
    propertySlug: "the-gardenveil-suite",
    propertyName: "The Gardenveil Suite",
    date: "2026-05-19",
  },
  {
    id: "t4",
    guestName: "Anurag",
    rating: 5,
    review:
      "Nice quiet place if you want a peaceful stay experience away from the crowds in Varanasi. You can definitely opt for this stay. Also if you are looking for a workation, this is one of the better options.",
    propertySlug: "the-gardenveil-suite",
    propertyName: "The Gardenveil Suite",
    date: "2026-04-01",
  },
  {
    id: "t5",
    guestName: "Rishita",
    rating: 4,
    review:
      "The host is very accommodating and responsive. The place is just like the photos and very spacious. It is a little far from the main attractions of the city however not very inconvenient.",
    propertySlug: "the-gardenveil-suite",
    propertyName: "The Gardenveil Suite",
    date: "2026-02-01",
  },
  {
    id: "t6",
    guestName: "Dhruv",
    rating: 5,
    review:
      "It was a very wonderful experience—the staff members are friendly, the rooms are clean with a fresh aroma, and they have a very respectful behaviour. I like this place and the family-friendly vibe it gives.",
    propertySlug: "the-gardenveil-suite",
    propertyName: "The Gardenveil Suite",
    date: "2026-01-01",
  },
  {
    id: "t7",
    guestName: "Krishna",
    rating: 5,
    review:
      "This is a really nice BNB and the host and manager here are also very nice—they talk very lovingly. I enjoyed it here and would say the same to everyone; this property is absolutely 5 star.",
    propertySlug: "the-haven-retreat",
    propertyName: "The Haven Retreat",
    date: "2026-05-26",
  },
  {
    id: "t8",
    guestName: "Sapna",
    rating: 5,
    review:
      "It was a nice, clean, and well-maintained property. Communication throughout was very clear, and all instructions were shared in advance. The location was accurate and easy to find. We also had someone available from time to time who promptly helped resolve any issues. Overall, we had a very comfortable stay and did not face any problems. Would definitely recommend it for families.",
    propertySlug: "the-haven-retreat",
    propertyName: "The Haven Retreat",
    date: "2026-05-19",
  },
  {
    id: "t9",
    guestName: "Akash",
    rating: 5,
    review:
      "Great stay! The place was clean, comfortable, and exactly as described. The host was friendly and responsive, making everything smooth and easy. Would definitely recommend and stay again!",
    propertySlug: "the-haven-retreat",
    propertyName: "The Haven Retreat",
    date: "2026-04-15",
  },
  {
    id: "t10",
    guestName: "Neha",
    rating: 5,
    review:
      "I had a wonderful stay at this Airbnb! The place was exactly as described—clean, comfortable, and thoughtfully arranged. The ambiance was warm and welcoming, making it feel like a home away from home. The host was extremely responsive and helpful throughout our stay, ensuring we had everything we needed. The location was also very convenient, with easy access to nearby attractions and essentials. Overall, it was a smooth and enjoyable stay, and I would definitely recommend this place to anyone visiting.",
    propertySlug: "the-haven-retreat",
    propertyName: "The Haven Retreat",
    date: "2026-04-01",
  },
  {
    id: "t11",
    guestName: "Shilpa",
    rating: 5,
    review:
      "The place was exactly as described and worth the money. Great for short stays. Location is a bit far from temple and ghat areas and quite interior though. We had our private car so it was manageable. Overall a good stay.",
    propertySlug: "the-haven-retreat",
    propertyName: "The Haven Retreat",
    date: "2026-03-15",
  },
  {
    id: "t12",
    guestName: "Manhar",
    rating: 5,
    review:
      "The offered property was very comfortable and well maintained. Rooms were clean and ventilated. Washrooms were clean with running hot and cold water. Deepak and Nitin were always available and of great help. Kitchen accessories were good. There was no gas but induction was sufficient. It was on the second floor with no lift. There was ample parking and safe. Overall, worth staying again. Thanks to dear Shikher for being responsive every time.",
    propertySlug: "the-haven-retreat",
    propertyName: "The Haven Retreat",
    date: "2026-03-01",
  },
  {
    id: "t13",
    guestName: "Joseph",
    rating: 5,
    review:
      "Great host. Enjoyed my stay, would prefer again and would suggest to everyone.",
    propertySlug: "the-wayne-manor",
    propertyName: "The Wayne Manor",
    date: "2026-06-04",
  },
  {
    id: "t14",
    guestName: "Priyanka",
    rating: 5,
    review:
      "Nice place. Caretaker is very supportive. Rooms are clean and spacious.",
    propertySlug: "the-wayne-manor",
    propertyName: "The Wayne Manor",
    date: "2026-06-02",
  },
  {
    id: "t15",
    guestName: "Vikas",
    rating: 5,
    review:
      "Had an absolutely fabulous experience! The house is beautiful, well-maintained, and equipped with excellent amenities that made our stay extremely comfortable.",
    propertySlug: "the-wayne-manor",
    propertyName: "The Wayne Manor",
    date: "2026-05-15",
  },
  {
    id: "t16",
    guestName: "Soni",
    rating: 5,
    review: "Good property, well approached, good services.",
    propertySlug: "the-wayne-manor",
    propertyName: "The Wayne Manor",
    date: "2026-05-01",
  },
  {
    id: "t17",
    guestName: "Ankur",
    rating: 5,
    review:
      "Stayed with family. Akash Pandey helped us a lot to explore some local food too. He is a nice guy.",
    propertySlug: "the-wayne-manor",
    propertyName: "The Wayne Manor",
    date: "2026-04-15",
  },
  {
    id: "t18",
    guestName: "Yash",
    rating: 5,
    review: "Comfortable and convenient, overall a good choice.",
    propertySlug: "the-wayne-manor",
    propertyName: "The Wayne Manor",
    date: "2026-04-01",
  },
  {
    id: "t19",
    guestName: "Prabhakar",
    rating: 5,
    review:
      "Staying at this homestay in Varanasi was truly a heartwarming experience. From the moment I arrived at night by 2:40 a.m., I was welcomed with genuine warmth and hospitality.",
    propertySlug: "the-pearl-manor",
    propertyName: "The Pearl Manor",
    date: "2026-04-01",
  },
  {
    id: "t20",
    guestName: "Rohit",
    rating: 5,
    review:
      "The property is appropriately located in a good colony. Sarnath is the closest from this place. The host even helped give local contact for Kashi darshan and guided about the tour and places.",
    propertySlug: "the-pearl-manor",
    propertyName: "The Pearl Manor",
    date: "2026-03-15",
  },
  {
    id: "t21",
    guestName: "Animesh",
    rating: 5,
    review:
      "Overall, I had a good stay at this Airbnb. The place was clean, well-maintained, and matched the description. The check-in process was smooth and the host was responsive and helpful.",
    propertySlug: "the-pearl-manor",
    propertyName: "The Pearl Manor",
    date: "2026-02-15",
  },
  {
    id: "t22",
    guestName: "Shashwat",
    rating: 5,
    review:
      "We had a wonderful stay at this Airbnb. The place was spotlessly clean, well-maintained, and exactly as shown in the photos. The location was very convenient.",
    propertySlug: "the-pearl-manor",
    propertyName: "The Pearl Manor",
    date: "2026-02-10",
  },
  {
    id: "t23",
    guestName: "Rounak",
    rating: 5,
    review:
      "This place is kind of a mansion, with numerous staff taking care of every need. The house is located inside a gated community and the surrounding is very calm and quiet.",
    propertySlug: "the-pearl-manor",
    propertyName: "The Pearl Manor",
    date: "2026-02-01",
  },
  {
    id: "t24",
    guestName: "Aditya",
    rating: 5,
    review:
      "We were a family of 11 people. The property was clean and well maintained. It was spacious and the rooms were very comfortable along with attached bathrooms.",
    propertySlug: "the-pearl-manor",
    propertyName: "The Pearl Manor",
    date: "2025-12-01",
  },
  {
    id: "t25",
    guestName: "Tanmay",
    rating: 5,
    review:
      "Overall the stay was good and completely value for money. It was clean, safe for families, and the host was responsive and well mannered.",
    propertySlug: "the-regal-serenity",
    propertyName: "The Regal Serenity",
    date: "2026-05-19",
  },
  {
    id: "t26",
    guestName: "Jivan",
    rating: 5,
    review:
      "The apartment was super clean, stylish, and exactly as described—comfortable bed, great natural light, and a fantastic location. The check-in was seamless, and Priya was very helpful.",
    propertySlug: "the-regal-serenity",
    propertyName: "The Regal Serenity",
    date: "2026-05-01",
  },
  {
    id: "t27",
    guestName: "Rajesh",
    rating: 5,
    review:
      "Priya was very responsive and answered all our queries promptly. We stayed in a 3 BHK apartment on the 2nd floor, and the place looked exactly like the photos.",
    propertySlug: "the-regal-serenity",
    propertyName: "The Regal Serenity",
    date: "2026-03-15",
  },
  {
    id: "t28",
    guestName: "Saurabh",
    rating: 5,
    review:
      "Had a wonderful stay! The place was clean, well-maintained, and exactly as described. The host was very responsive and helpful throughout. Location was convenient and peaceful.",
    propertySlug: "the-regal-serenity",
    propertyName: "The Regal Serenity",
    date: "2026-03-10",
  },
  {
    id: "t29",
    guestName: "Ravi",
    rating: 5,
    review:
      "We had a wonderful stay at this apartment. The place was very beautiful, well-maintained, and extremely clean. Everything was perfectly organized and made our stay very comfortable.",
    propertySlug: "the-regal-serenity",
    propertyName: "The Regal Serenity",
    date: "2026-03-01",
  },
  {
    id: "t30",
    guestName: "Nivas",
    rating: 5,
    review:
      "One of the best properties we have ever booked through Airbnb. Very spacious rooms, spacious clean bathrooms and a beautiful kitchen gave us a feel of a homey environment.",
    propertySlug: "the-regal-serenity",
    propertyName: "The Regal Serenity",
    date: "2026-01-01",
  },
  {
    id: "t31",
    guestName: "Arvind",
    rating: 5,
    review:
      "House was good and well furnished; room, hall, and bathroom were also clean. There was a little issue with search location—needs to be clearer about location—and the kitchen could be improved.",
    propertySlug: "the-velvet-lotus",
    propertyName: "The Velvet Lotus",
    date: "2026-05-01",
  },
  {
    id: "t32",
    guestName: "Atul",
    rating: 5,
    review:
      "Had a wonderful one-day stay at this Airbnb in Varanasi! From the moment I arrived, everything felt thoughtfully arranged and welcoming. The space was clean and comfortable.",
    propertySlug: "the-velvet-lotus",
    propertyName: "The Velvet Lotus",
    date: "2026-04-15",
  },
  {
    id: "t33",
    guestName: "Vineet",
    rating: 5,
    review:
      "This place is absolutely wonderful. Prime location, peaceful environment, responsive host, sincere caretaker, parking space and beautiful interiors make it a perfect place for a stay.",
    propertySlug: "the-velvet-lotus",
    propertyName: "The Velvet Lotus",
    date: "2026-04-01",
  },
  {
    id: "t34",
    guestName: "Purvanshi",
    rating: 5,
    review:
      "The place was spotless and exactly as shown in the photos. The atmosphere was calm, peaceful, and free from unnecessary disturbances. The staff were friendly and helpful.",
    propertySlug: "the-velvet-lotus",
    propertyName: "The Velvet Lotus",
    date: "2026-03-15",
  },
  {
    id: "t35",
    guestName: "Saurabh",
    rating: 5,
    review:
      "It was a great, peaceful and comfortable stay. Big rooms, clean washroom, easy to check-in and caretaker Mr Deepak was helpful with our luggage transfer to the first floor.",
    propertySlug: "the-velvet-lotus",
    propertyName: "The Velvet Lotus",
    date: "2026-03-10",
  },
  {
    id: "t36",
    guestName: "Arpith",
    rating: 5,
    review:
      "We had a great stay at this property. The place is good, clean, and very spacious, which made our stay comfortable. A special thanks to the caretaker, Deepak Pandey.",
    propertySlug: "the-velvet-lotus",
    propertyName: "The Velvet Lotus",
    date: "2026-03-01",
  },
];

function interleaveByProperty(items: Testimonial[]): Testimonial[] {
  const buckets = new Map<string, Testimonial[]>();

  for (const item of items) {
    const bucket = buckets.get(item.propertySlug) ?? [];
    bucket.push(item);
    buckets.set(item.propertySlug, bucket);
  }

  for (const bucket of buckets.values()) {
    bucket.sort((a, b) => b.date.localeCompare(a.date));
  }

  const slugs = [
    ...PROPERTY_ROTATION.filter((slug) => buckets.has(slug)),
    ...[...buckets.keys()].filter(
      (slug) => !PROPERTY_ROTATION.includes(slug as (typeof PROPERTY_ROTATION)[number])
    ),
  ];

  const mixed: Testimonial[] = [];
  let hasMore = true;

  while (hasMore) {
    hasMore = false;
    for (const slug of slugs) {
      const bucket = buckets.get(slug);
      if (bucket?.length) {
        mixed.push(bucket.shift()!);
        hasMore = true;
      }
    }
  }

  return mixed;
}

export const testimonials = interleaveByProperty(allTestimonials);

export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials.slice(0, 6);
}
