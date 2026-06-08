import { FAQ } from "@/types";

export const generalFaqs: FAQ[] = [
  {
    question: "How do I book a property?",
    answer:
      "Contact us via WhatsApp, phone, or our inquiry form. Our hospitality team will guide you through availability, pricing, and booking confirmation. We believe in personalized service over automated bookings.",
  },
  {
    question: "What is included in the stay?",
    answer:
      "All properties include fully furnished accommodations, high-speed WiFi, housekeeping, and 24/7 guest support. Specific amenities vary by property, check individual listings for details.",
  },
  {
    question: "Is there a minimum stay requirement?",
    answer:
      "No, we do not have a minimum stay requirement. You can book for as little as one night.",
  },
  {
    question: "Can I cancel or modify my booking?",
    answer:
      "Cancellation policies vary by property and season. We offer flexible options for most bookings, full details are provided at the time of confirmation.",
  },
  {
    question: "Are meals included?",
    answer:
      "Properties come with fully equipped kitchens. We can arrange private chefs, meal plans, or recommend local restaurants based on your preferences.",
  },
  {
    question: "Is transportation arranged?",
    answer:
      "We arrange airport transfers, local sightseeing, and inter-city travel through trusted partners. Let us know your requirements when inquiring.",
  },
  {
    question: "Do you allow pets?",
    answer:
      "Select properties are pet-friendly. Please mention your furry companions when inquiring, and we'll match you with the right property.",
  },
];

export const categoryLabels: Record<string, string> = {
  "family-vacation": "Family Vacations",
  "luxury-villa": "Luxury Villas",
  "group-retreat": "Group Retreats",
  pilgrimage: "Pilgrimage Stays",
  "long-stay": "Long Stays",
  "weekend-escape": "Weekend Escapes",
};

export const experienceCategoryLabels: Record<string, string> = {
  "family-vacations": "Family Vacations",
  "spiritual-journeys": "Spiritual Journeys",
  "weekend-getaways": "Weekend Getaways",
  "long-stays": "Long Stays",
  workations: "Workations",
  "group-gatherings": "Group Gatherings",
};
