import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { experiences } from "@/data/experiences";
import { createMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/shared/section-heading";
import { images } from "@/lib/images";

export const metadata: Metadata = createMetadata({
  title: "Experiences",
  description:
    "Curated travel experiences, from family vacations and spiritual journeys to workations and group retreats.",
  path: "/experiences",
});

export default function ExperiencesPage() {
  return (
    <div className="pt-20">
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <Image
          src={images.experiencesHero}
          alt="Spiritual experiences in Varanasi"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/50" />
        <div className="relative z-10 text-center text-ivory px-4">
          <p className="text-saffron text-sm tracking-[0.2em] uppercase mb-4">
            Curated Journeys
          </p>
          <h1 className="font-heading text-4xl md:text-5xl">Experiences</h1>
          <p className="mt-4 text-ivory/80 max-w-xl mx-auto">
            Every journey in Kashi is unique. Discover experiences crafted for
            the way you travel.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 space-y-20">
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-sm ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={exp.featuredImage}
                  alt={exp.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-saffron text-sm tracking-[0.2em] uppercase mb-3">
                  Experience
                </p>
                <h2 className="font-heading text-3xl text-forest mb-4">
                  {exp.title}
                </h2>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  {exp.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {exp.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-charcoal/70"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/properties?category=${exp.relatedPropertySlugs[0] ? "all" : "all"}`}
                  className="inline-flex items-center gap-2 text-forest hover:text-saffron transition-colors font-medium"
                >
                  Explore Stays
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
