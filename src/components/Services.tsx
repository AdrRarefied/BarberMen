import { Scissors, Brush, Crown } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const services = [
  {
    icon: Scissors,
    name: "Corte Moderno",
    description: "Incluye lavado y peinado. Diseñado a tu rostro y estilo, con técnicas actuales y acabado impecable.",
    price: "$220",
    duration: "45 min",
  },
  {
    icon: Brush,
    name: "Barba de Autor",
    description: "Perfilado con navaja y ritual de toalla caliente. Aceites y bálsamos premium para un acabado de revista.",
    price: "$180",
    duration: "30 min",
    featured: true,
  },
  {
    icon: Crown,
    name: "Combo Premium",
    description: "Corte + Barba + Bebida de cortesía. La experiencia completa Modern Barber, sin prisas.",
    price: "$380",
    duration: "75 min",
  },
];

export const Services = () => {
  return (
    <section id="servicios" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-grain opacity-50" />
      <div className="container relative">
        <SectionTitle
          eyebrow="LA CARTA"
          title="Nuestros Servicios"
          subtitle="Cada servicio es un ritual. Tiempo, técnica y producto premium para que salgas como entraste: mejor."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {services.map((s, i) => (
            <article
              key={s.name}
              className={`group relative p-8 md:p-10 border border-border bg-card hover:border-primary/60 transition-all duration-500 ${
                s.featured ? "md:-mt-6 md:mb-6 border-primary/40 shadow-deep" : ""
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {s.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-display tracking-[0.25em] px-3 py-1">
                  POPULAR
                </span>
              )}

              <s.icon className="w-10 h-10 text-primary mb-6 transition-transform group-hover:scale-110" strokeWidth={1.2} />

              <h3 className="font-serif-display text-3xl mb-3">{s.name}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8 min-h-[72px]">
                {s.description}
              </p>

              <div className="flex items-end justify-between pb-6 border-b border-border">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Desde</div>
                  <div className="font-display text-3xl text-primary">{s.price}</div>
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  {s.duration}
                </div>
              </div>

              <Button
                variant="outlineGold"
                size="default"
                className="w-full mt-6"
                asChild
              >
                <a
                  href={buildWhatsAppLink(`Hola, quiero agendar: ${s.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reservar
                </a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
