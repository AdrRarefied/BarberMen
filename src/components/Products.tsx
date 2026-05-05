import { SectionTitle } from "./SectionTitle";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import pomade from "@/assets/product-pomade.jpg";
import oil from "@/assets/product-oil.jpg";
import comb from "@/assets/product-comb.jpg";
import { MessageCircle } from "lucide-react";

const products = [
  { name: "Pomada Modeladora", price: "$250", img: pomade, tag: "Fijación fuerte" },
  { name: "Aceite para Barba", price: "$180", img: oil, tag: "Hidratante premium" },
  { name: "Set Peine Madera", price: "$220", img: comb, tag: "Edición limitada" },
];

export const Products = () => {
  return (
    <section id="productos" className="py-24 md:py-32 bg-secondary/40 border-y border-border">
      <div className="container">
        <SectionTitle
          eyebrow="LA TIENDA"
          title="Productos de Cuidado"
          subtitle="Lo que usamos en el sillón, ahora en tu casa. Consulta disponibilidad por WhatsApp."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {products.map((p) => (
            <article
              key={p.name}
              className="group relative bg-card border border-border overflow-hidden hover:border-primary/60 transition-all duration-500"
            >
              <div className="relative aspect-square overflow-hidden bg-background">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm text-primary text-[10px] font-display tracking-[0.25em] px-3 py-1 border border-primary/30">
                  {p.tag}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif-display text-2xl">{p.name}</h3>
                  <span className="font-display text-2xl text-primary">{p.price}</span>
                </div>

                <Button variant="whatsapp" className="w-full" asChild>
                  <a
                    href={buildWhatsAppLink(`Hola, me interesa el producto: ${p.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Consultar por WhatsApp
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
