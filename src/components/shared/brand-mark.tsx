import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

interface BrandMarkProps {
  className?: string;
  titleClassName?: string;
}

export function BrandMark({ className, titleClassName }: BrandMarkProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <span
        className={cn(
          "font-heading text-xl text-forest tracking-wide sm:text-2xl xl:text-3xl",
          titleClassName
        )}
      >
        Maple & Key
      </span>
      <span className="text-[9px] text-saffron tracking-[0.18em] uppercase sm:text-[10px] sm:tracking-[0.2em] xl:text-[11px]">
        by {siteConfig.parentBrand}
      </span>
    </div>
  );
}
