import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

interface BrandMarkProps {
  className?: string;
  titleClassName?: string;
}

export function BrandMark({ className, titleClassName }: BrandMarkProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src="/images/company-logo.jpg"
        alt=""
        width={44}
        height={44}
        className="h-9 w-9 shrink-0 rounded-sm object-cover sm:h-10 sm:w-10 xl:h-11 xl:w-11"
        priority
      />
      <div className="flex flex-col">
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
    </div>
  );
}
