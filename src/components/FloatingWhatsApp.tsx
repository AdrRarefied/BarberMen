import { buildWhatsAppLink } from "@/lib/whatsapp";

export const FloatingWhatsApp = () => (
  <a
    href={buildWhatsAppLink("Hola, quiero información de Barber Men Studio.")}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chatear por WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-deep animate-pulse-gold hover:scale-110 transition-transform"
  >
    <svg viewBox="0 0 32 32" className="w-7 h-7" fill="currentColor" aria-hidden="true">
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 01-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 01-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.717.315-.43.473-1.27 1.29-1.27 2.78 0 1.418 1.13 3.14 1.276 3.34 1.65 2.31 3.296 4.158 5.84 5.39.4.198 2.58.946 3.06.946.345 0 1.018-.245 1.318-.418.31-.173.5-.487.5-.86s-.215-.5-.5-.6c-.215-.072-2.005-.972-2.105-1.072z"/>
      <path d="M16.001 0C7.165 0 0 7.164 0 16.001c0 2.823.74 5.583 2.143 8.012L.057 31.674a.5.5 0 00.612.622l7.92-2.077A15.93 15.93 0 0016 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.5a13.46 13.46 0 01-7.063-1.998.5.5 0 00-.39-.057l-5.65 1.482 1.49-5.453a.5.5 0 00-.06-.4A13.5 13.5 0 1129.5 16c0 7.456-6.044 13.5-13.5 13.5z"/>
    </svg>
  </a>
);
