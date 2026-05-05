import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";

// ==============================
// COMPONENTE PRINCIPAL
// ==============================
export const Contact = () => {

  const address = "Av. Presa de Osorio 3762C, Lagos de Oriente, 44770 Guadalajara, Jal., México";

  const lat = 20.6704769613926;
  const lng = -103.2790917633184;

  // ==============================
  // BARBEROS
  // ==============================
  const barbers = [
    {
      name: "Cris",
      phone: "523325068305"
    },
    {
      name: "Saul",
      phone: "523312345678"
    },
    {
      name: "Miguel",
      phone: "523398765432"
    }
  ];

  return (
    <section id="ubicacion" className="py-24 md:py-32 bg-secondary/40 border-t border-border">

      <div className="container">

        <SectionTitle eyebrow="LA CASA" title="Visítanos" />

        <div className="grid lg:grid-cols-2 gap-8 mt-16 items-stretch">

          {/* ==============================
              INFO
          ============================== */}
          <div className="bg-card border border-border p-8 md:p-12 flex flex-col">

            <h3 className="font-serif-display text-3xl mb-8">
              Modern Barber Studio
            </h3>

            <div className="space-y-7 flex-1">

              {/* DIRECCIÓN */}
              <Detail icon={MapPin} label="Dirección">
                {address}
              </Detail>

              {/* ==============================
                  BARBEROS CON BOTÓN
              ============================== */}
              <Detail icon={Phone} label="Barberos">

                <div className="space-y-4">

                  {barbers.map((barber, index) => (
                    <div key={index} className="flex items-center justify-between gap-4 border-b border-border pb-3">

                      {/* Nombre + número */}
                      <div>
                        <div className="font-medium">{barber.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {barber.phone.replace("52", "+52 ")}
                        </div>
                      </div>

                      {/* Botón individual */}
                      <Button size="sm" variant="hero" asChild>
                        <a
                          href={buildWhatsAppLink(
                            `Hola ${barber.name}, quiero agendar una cita contigo.`,
                            barber.phone
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Agendar
                        </a>
                      </Button>

                    </div>
                  ))}

                </div>

              </Detail>

              {/* HORARIO */}
              <Detail icon={Clock} label="Horario">
                Lun – Sáb · 10:00 — 21:00
                <br />
                Dom · 11:00 — 18:00
              </Detail>

              {/* INSTAGRAM */}
              <Detail icon={Instagram} label="Síguenos">
                @modernbarber.gdl
              </Detail>

            </div>

            {/* BOTÓN ÚNICO DE UBICACIÓN */}
            <div className="mt-10">
              <Button variant="outlineGold" asChild>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cómo llegar
                </a>
              </Button>
            </div>

          </div>

          {/* ==============================
              MAPA
          ============================== */}
          <div className="relative min-h-[400px] border border-border overflow-hidden">

            <iframe
              title="Ubicación Modern Barber Studio"
              src={`https://www.google.com/maps?ll=${lat},${lng}&q=${lat},${lng}&z=17&output=embed`}
              className="absolute inset-0 w-full h-full grayscale contrast-125"
              loading="lazy"
            />

          </div>

        </div>
      </div>
    </section>
  );
};

// ==============================
// COMPONENTE DETALLE
// ==============================
const Detail = ({
  icon: Icon,
  label,
  children
}: {
  icon: any;
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex gap-4">

    <Icon
      className="w-5 h-5 text-primary mt-1 shrink-0"
      strokeWidth={1.5}
    />

    <div className="w-full">
      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </div>

      <div className="text-foreground leading-relaxed">
        {children}
      </div>
    </div>
  </div>
);