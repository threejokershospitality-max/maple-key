import { Metadata } from "next";
import Image from "next/image";
import {
  Heart,
  Star,
  Shield,
  Home,
  Compass,
} from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config";
import { brandValues, milestones } from "@/data/homepage";
import { SectionHeading } from "@/components/shared/section-heading";
import { FinalCTA } from "@/components/home/final-cta";
import { images } from "@/lib/images";

export const metadata: Metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about Maple & Key's journey, our hospitality philosophy, and the story behind Three Jokers Hospitality.",
  path: "/about",
});

const valueIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Star,
  Shield,
  Home,
  Compass,
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <Image
          src={images.about}
          alt="About Maple and Key"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/50" />
        <div className="relative z-10 text-center text-ivory px-4">
          <h1 className="font-heading text-4xl md:text-5xl mb-4">Our Story</h1>
          <p className="text-ivory/80 max-w-xl mx-auto">
            {siteConfig.tagline}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <SectionHeading
            subtitle="The Journey"
            title="Maple & Key"
            align="left"
          />
          <div className="prose prose-lg text-charcoal/80 leading-relaxed space-y-4">
            <p>
              Maple & Key was born from a simple belief: that every traveler
              deserves more than a place to sleep. They deserve a curated
              experience, a home that feels personal, a location that inspires,
              and hospitality that anticipates needs before they arise.
            </p>
            <p>
              As the premium brand of {siteConfig.parentBrand}, we handpick every
              property in our collection. Each stay is personally inspected,
              professionally managed, and maintained to the highest standards of
              comfort and elegance.
            </p>
            <p>
              We are not a listing platform. We are a hospitality company that
              happens to offer extraordinary homes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <SectionHeading
            subtitle="Parent Company"
            title={siteConfig.parentBrand}
            align="left"
          />
          <p className="text-charcoal/80 leading-relaxed">
            {siteConfig.parentBrand} has been at the forefront of Varanasi&apos;s
            evolving hospitality landscape since 2025. With a portfolio of
            luxury homestays and curated vacation rentals in
            Kashi, the group has consistently raised the bar for guest
            experiences. Maple & Key represents the pinnacle of this vision, where every detail matters and every guest is treated like family.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            subtitle="What We Stand For"
            title="Our Values"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {brandValues.map((value) => {
              const Icon = valueIconMap[value.icon] || Heart;
              return (
                <div
                  key={value.id}
                  className="text-center p-6 bg-ivory rounded-sm shadow-luxury"
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-accent flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-forest" />
                  </div>
                  <h3 className="font-heading text-lg text-forest mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-charcoal/70">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <SectionHeading
            subtitle="Our Standards"
            title="Hospitality Philosophy"
            align="left"
          />
          <div className="space-y-4 text-charcoal/80 leading-relaxed">
            <p>
              We believe hospitality is an art form. It is the anticipation of
              a guest&apos;s needs, the warmth of a genuine welcome, and the
              attention to detail that transforms a stay into a memory.
            </p>
            <p>
              Every Maple & Key property is managed by trained hospitality
              professionals, not remote hosts. Our on-ground teams ensure
              immaculate cleanliness, prompt maintenance, and personalized
              service that rivals the finest boutique hotels.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <SectionHeading subtitle="Milestones" title="Our Timeline" />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-beige md:-translate-x-px" />
            {milestones.map((milestone, i) => (
              <div
                key={milestone.year}
                className={`relative flex items-start gap-8 mb-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-saffron -translate-x-1.5 md:-translate-x-1.5 mt-1.5 z-10" />
                <div className="ml-10 md:ml-0 md:w-1/2">
                  <p className="text-saffron font-medium text-sm">
                    {milestone.year}
                  </p>
                  <h3 className="font-heading text-lg text-forest mt-1">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-charcoal/70 mt-1">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
