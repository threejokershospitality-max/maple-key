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
        <h1 className="type-page-title">{title}</h1>
        {description && (
          <p className="type-lead-inverse mt-4 mx-auto max-w-2xl">
            {description}
          </p>
        )}
        <div className="mt-6 heritage-divider mx-auto" />
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
