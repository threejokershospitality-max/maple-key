interface BrandHeroProps {
  subtitle?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function BrandHero({ subtitle, title, description, children }: BrandHeroProps) {
  return (
    <section className="section-surface-brand">
      <div className="site-container section-padding-sm text-center">
        {subtitle && <p className="eyebrow mb-4">{subtitle}</p>}
        <h1 className="font-heading text-4xl md:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 mx-auto max-w-2xl text-ivory/80 leading-relaxed">
            {description}
          </p>
        )}
        <div className="mt-6 heritage-divider mx-auto" />
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
