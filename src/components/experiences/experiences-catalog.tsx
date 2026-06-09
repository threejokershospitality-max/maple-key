import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Camera,
  Car,
  Landmark,
  MapPin,
  Music,
  ShoppingBag,
  Sparkles,
  Sun,
  UtensilsCrossed,
  Waves,
} from "lucide-react";
import { experiences } from "@/data/experiences";
import { Experience, ExperienceCategory } from "@/types";

const categoryMeta: Record<
  ExperienceCategory,
  { label: string; description: string; icon: LucideIcon }
> = {
  spiritual: {
    label: "Spiritual & Temples",
    description: "Sacred darshan, aarti, and temple circuits across Kashi.",
    icon: Sparkles,
  },
  cultural: {
    label: "Culture & Local Life",
    description: "Ghats, lanes, music, silk weaving, and the rhythm of Banaras.",
    icon: Music,
  },
  heritage: {
    label: "Heritage & History",
    description: "Forts, stupas, and the layered history of the region.",
    icon: Landmark,
  },
  food: {
    label: "Food & Culinary",
    description: "Street food trails and evening tastings across the old city.",
    icon: UtensilsCrossed,
  },
  wellness: {
    label: "Wellness",
    description: "Yoga and meditation sessions by the sacred Ganges.",
    icon: Waves,
  },
  "day-trip": {
    label: "Day Trips",
    description: "Full-day excursions to Ayodhya, Prayagraj, and beyond.",
    icon: Car,
  },
  shopping: {
    label: "Shopping",
    description: "Curated shopping for sarees, handicrafts, and local treasures.",
    icon: ShoppingBag,
  },
};

const categoryOrder: ExperienceCategory[] = [
  "spiritual",
  "cultural",
  "heritage",
  "food",
  "wellness",
  "day-trip",
  "shopping",
];

function getExperienceIcon(title: string) {
  if (title.toLowerCase().includes("boat") || title.toLowerCase().includes("sunrise")) {
    return Sun;
  }
  if (title.toLowerCase().includes("photography")) {
    return Camera;
  }
  if (title.toLowerCase().includes("trip")) {
    return MapPin;
  }
  return null;
}

function groupByCategory(items: Experience[]) {
  return categoryOrder
    .map((category) => ({
      category,
      items: items.filter((item) => item.category === category),
    }))
    .filter((group) => group.items.length > 0);
}

export function ExperiencesCatalog() {
  const groups = groupByCategory(experiences);

  return (
    <div className="space-y-16 lg:space-y-20">
      <nav
        aria-label="Experience categories"
        className="flex flex-wrap justify-center gap-2"
      >
        {groups.map(({ category }) => {
          const meta = categoryMeta[category];
          const Icon = meta.icon;
          return (
            <a
              key={category}
              href={`#${category}`}
              className="inline-flex items-center gap-2 surface-chip"
            >
              <Icon className="h-4 w-4 shrink-0" />
              {meta.label}
            </a>
          );
        })}
      </nav>

      {groups.map(({ category, items }) => {
        const meta = categoryMeta[category];
        const Icon = meta.icon;

        return (
          <section key={category} id={category} className="scroll-mt-28">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="icon-well-square h-12 w-12 shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl text-forest">
                    {meta.label}
                  </h2>
                  <p className="mt-1 max-w-2xl text-sm text-charcoal/70">
                    {meta.description}
                  </p>
                </div>
              </div>
              <p className="text-sm font-medium text-charcoal/50">
                {items.length} experience{items.length === 1 ? "" : "s"}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {items.map((exp) => {
                const ItemIcon = getExperienceIcon(exp.title);
                return (
                  <article
                    key={exp.id}
                    className="group surface-card-interactive flex h-full flex-col p-6"
                  >
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        {ItemIcon && (
                          <div className="icon-well mt-0.5 h-9 w-9 shrink-0">
                            <ItemIcon className="h-4 w-4" />
                          </div>
                        )}
                        <div>
                          <h3 className="font-heading text-xl text-forest leading-snug">
                            {exp.title}
                          </h3>
                          {exp.duration && (
                            <span className="mt-2 inline-flex rounded-full bg-saffron/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-forest">
                              {exp.duration}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="mb-5 text-sm text-body">
                      {exp.description}
                    </p>

                    <ul className="mb-6 space-y-2 flex-1">
                      {exp.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-charcoal/70"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-forest transition-colors group-hover:text-saffron"
                    >
                      Book this experience
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
