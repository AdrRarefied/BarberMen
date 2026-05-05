import { Scissors } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <Scissors className="w-4 h-4 text-primary" />
        <span className="font-display tracking-[0.25em]">BARBER·MEN STUDIO</span>
      </div>
      <p>© {new Date().getFullYear()} · Hecho con oficio en Guadalajara.</p>
    </div>
  </footer>
);
