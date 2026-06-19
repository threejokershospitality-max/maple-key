import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";

interface BrandMarkProps {
  className?: string;
  titleClassName?: string;
}

export function BrandMark({ className, titleClassName }: BrandMarkProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 sm:gap-2.5 xl:gap-3",
        "[--brand-mark-height:2.125rem] sm:[--brand-mark-height:2.5rem] xl:[--brand-mark-height:3rem]",
        className
      )}
    >
      <Image
        src={images.logoEmblem}
        alt=""
        width={72}
        height={48}
        className="h-[var(--brand-mark-height)] w-auto shrink-0 object-contain"
        priority
      />
      <div className="flex h-[var(--brand-mark-height)] flex-col justify-center leading-none">
        <span
          className={cn(
            "font-heading text-xl text-forest tracking-wide leading-none sm:text-2xl xl:text-3xl",
            titleClassName
          )}
        >
          Maple & Key
        </span>
        <span className="mt-0.5 text-[9px] text-saffron tracking-[0.18em] uppercase leading-none sm:mt-1 sm:text-[10px] sm:tracking-[0.2em] xl:mt-1.5 xl:text-[11px]">
          by {siteConfig.parentBrand}
        </span>
      </div>
    </div>
  );
}
