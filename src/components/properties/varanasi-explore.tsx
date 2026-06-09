import { Landmark, Compass } from "lucide-react";
import {
  varanasiTouristPlaces,
  varanasiThingsToDo,
} from "@/data/varanasi-guide";

function GuidePointer({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  return (
    <li className="surface-card flex gap-4 px-4 py-4 sm:px-5">
      <span className="icon-well h-7 w-7 shrink-0 text-xs font-medium">
        {index + 1}
      </span>
      <div className="min-w-0">
        <h3 className="font-heading text-base text-forest sm:text-lg">{title}</h3>
        <p className="mt-1 text-sm text-body">{description}</p>
      </div>
    </li>
  );
}

export function VaranasiExplore() {
  return (
    <div className="space-y-12">
      <section aria-labelledby="varanasi-tourist-places">
        <div className="mb-5 flex items-start gap-3">
          <div className="icon-well-square h-10 w-10 shrink-0">
            <Landmark className="h-5 w-5" />
          </div>
          <div>
            <h2
              id="varanasi-tourist-places"
              className="font-heading text-2xl text-forest"
            >
              Varanasi Tourist Places
            </h2>
            <p className="mt-2 text-meta">
              Here are some of the must-visit Varanasi tourist places and
              landmarks:
            </p>
          </div>
        </div>

        <ol className="space-y-3">
          {varanasiTouristPlaces.map((place, i) => (
            <GuidePointer key={place.title} {...place} index={i} />
          ))}
        </ol>
      </section>

      <section aria-labelledby="varanasi-things-to-do">
        <div className="mb-5 flex items-start gap-3">
          <div className="icon-well-square h-10 w-10 shrink-0">
            <Compass className="h-5 w-5" />
          </div>
          <div>
            <h2
              id="varanasi-things-to-do"
              className="font-heading text-2xl text-forest"
            >
              Things to Do in Varanasi
            </h2>
            <p className="mt-2 text-meta">
              Looking for unforgettable experiences? These are the top things to
              do in Varanasi:
            </p>
          </div>
        </div>

        <ol className="space-y-3">
          {varanasiThingsToDo.map((activity, i) => (
            <GuidePointer key={activity.title} {...activity} index={i} />
          ))}
        </ol>
      </section>
    </div>
  );
}
