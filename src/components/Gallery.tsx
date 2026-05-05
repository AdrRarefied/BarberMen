import { SectionTitle } from "./SectionTitle";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const items = [
  { src: g1, alt: "Cliente con corte fade moderno", className: "md:row-span-2 md:col-span-1 aspect-[3/4] md:aspect-auto" },
  { src: g2, alt: "Perfilado de barba con navaja", className: "aspect-square" },
  { src: g3, alt: "Retrato editorial de cliente", className: "aspect-square" },
  { src: g4, alt: "Herramientas vintage de barbería", className: "md:col-span-2 aspect-[16/9]" },
];

export const Gallery = () => {
  return (
    <section id="galeria" className="py-24 md:py-32">
      <div className="container">
        <SectionTitle
          eyebrow="EL PORTAFOLIO"
          title="Nuestro Trabajo"
          subtitle="Una muestra de los cortes, barbas y rituales que definen el estilo de la casa."
        />

        <div className="grid md:grid-cols-3 gap-3 md:gap-4 mt-16">
          {items.map((it, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden bg-card ${it.className}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="font-display text-primary tracking-widest text-xs">MODERN BARBER</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
