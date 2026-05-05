interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionTitle = ({ eyebrow, title, subtitle, align = "center" }: Props) => (
  <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
    <div className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : ""}`}>
      <span className="h-px w-8 bg-primary" />
      <span className="text-primary font-display tracking-[0.3em] text-xs">{eyebrow}</span>
      <span className="h-px w-8 bg-primary" />
    </div>
    <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl leading-tight text-balance">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-muted-foreground md:text-lg">{subtitle}</p>
    )}
  </div>
);
