import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Clock } from "lucide-react";
import { destinations } from "@/data/destinations";
import { images } from "@/lib/images";
import { createMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = createMetadata({
  title: "Varanasi",
  description:
    "Explore Varanasi through Maple & Key's curated collection of luxury homestays and vacation homes in Kashi.",
  path: "/destinations",
});

export default function DestinationsPage() {
  return (
    <div className="pt-20">
      <section className="py-16 lg:py-20 bg-accent/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            subtitle="Our Home"
            title="Varanasi"
            description="India's eternal spiritual capital, curated stays on the banks of the sacred Ganges."
          />
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destinations.map((dest) => (
              <Link
                key={dest.id}
                href={`/destinations/${dest.slug}`}
                className="group block bg-ivory rounded-sm overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-500"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={dest.featuredImage}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-1 text-sm text-saffron mb-2">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>
                      {dest.state}, {dest.country}
                    </span>
                  </div>
                  <h2 className="font-heading text-2xl text-forest group-hover:text-saffron transition-colors mb-3">
                    {dest.name}
                  </h2>
                  <p className="text-charcoal/70 leading-relaxed mb-4">
                    {dest.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-forest group-hover:text-saffron transition-colors font-medium">
                    Explore Destination
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}

            <div
              aria-disabled="true"
              className="relative bg-ivory rounded-sm overflow-hidden shadow-luxury opacity-90 cursor-default select-none"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={images.heritageHaveli}
                  alt="New destination coming soon"
                  fill
                  className="object-cover grayscale-[40%]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-forest/40" />
                <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 bg-saffron text-ivory text-xs font-medium uppercase tracking-wider px-3 py-1.5 rounded-sm">
                  <Clock className="h-3.5 w-3.5" />
                  Coming Soon
                </span>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-1 text-sm text-saffron/60 mb-2">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>India</span>
                </div>
                <h2 className="font-heading text-2xl text-forest/70 mb-3">
                  New Destination
                </h2>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  We are curating our next collection of handpicked stays. Stay
                  tuned for another unforgettable destination.
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-forest/50 font-medium">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
