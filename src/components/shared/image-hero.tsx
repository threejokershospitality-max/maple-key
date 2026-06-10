import Image from "next/image";

interface ImageHeroProps {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  description?: string;
  height?: "md" | "lg";
  align?: "center" | "bottom";
}

export function ImageHero({
  src,
  alt,
  title,
  subtitle,
  description,
  height = "md",
  align = "center",
}: ImageHeroProps) {
  const heightClass =
    height === "lg" ? "h-[50vh] min-h-[400px]" : "h-[40vh] min-h-[300px]";

  return (
    <section className={`relative ${heightClass} flex items-center justify-center overflow-hidden`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="hero-overlay" />
      <div
        className={
          align === "bottom"
            ? "absolute bottom-0 left-0 right-0 z-10 p-8 lg:p-16"
            : "relative z-10 text-center px-4"
        }
      >
        <div className={align === "bottom" ? "site-container" : undefined}>
          {subtitle && (
            <p className={`eyebrow ${align === "bottom" ? "mb-2" : "mb-4"}`}>
              {subtitle}
            </p>
          )}
          <h1 className="type-page-title text-ivory">{title}</h1>
          {description && (
            <p className="type-lead-inverse mt-4 mx-auto max-w-xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
