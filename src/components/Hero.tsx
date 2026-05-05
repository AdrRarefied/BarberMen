import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import heroImg from "@/assets/hero.jpg";

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Interior de barbería premium con sillón vintage"
          className="w-full h-full object-cover animate-slow-zoom"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-radial" />
      </div>

      <div className="container relative z-10 pt-24">
        <div className="max-w-3xl animate-fade-up">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-primary" />
            <span className="text-primary font-display tracking-[0.3em] text-sm">
              EST. GUADALAJARA
            </span>
          </div>

          <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-balance text-foreground">
            Cortes de <em className="text-primary not-italic font-light italic">Autor</em>
            <br />
            & Estilo <span className="font-display block sm:inline">Moderno</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            No cortamos el cabello, estructuramos tu presencia. Diseño capilar de alto nivel en Guadalajara.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Button
              variant="hero"
              size="xl"
              asChild
            >
              <a href={buildWhatsAppLink("Hola, quiero agendar una cita en Modern Barber Studio.")} target="_blank" rel="noopener noreferrer">
                Agendar Cita
              </a>
            </Button>
            <Button variant="outlineGold" size="xl" asChild>
              <a href="#servicios">Ver Servicios</a>
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap gap-x-12 gap-y-4 text-sm">
            {[
              ["10+", "Años de oficio"],
              ["5K+", "Clientes felices"],
              ["100%", "Ritual artesanal"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl text-primary">{n}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground text-xs uppercase tracking-[0.4em] animate-fade-in">
        Scroll
      </div>
    </section>
  );
};
