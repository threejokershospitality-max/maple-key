import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  max?: number;
  className?: string;
  starClassName?: string;
}

export function StarRating({
  rating,
  max = 5,
  className,
  starClassName = "h-5 w-5",
}: StarRatingProps) {
  const clampedRating = Math.min(Math.max(rating, 0), max);

  return (
    <div className={cn("flex", className)} aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }).map((_, i) => {
        const fill = Math.min(Math.max(clampedRating - i, 0), 1);

        return (
          <div key={i} className={cn("relative shrink-0", starClassName)}>
            <Star className={cn(starClassName, "text-gold/35")} />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star className={cn(starClassName, "fill-gold text-gold")} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
