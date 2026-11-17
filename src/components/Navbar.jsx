import React, { useState, useEffect } from "react";
import { Sparkles, Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Lo que incluyen mis páginas", href: "#servicios" },
  { name: "Paquetes", href: "#proyectos-disponibles" },
  { name: "Sobre mí", href: "#sobre-mi" },
  { name: "Mis Fotografías", href: "#fotografia" },
  { name: "Preguntas sobre mis proyectos", href: "#preguntas-frecuentes" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0b071a]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
        {/* Marca / Logo en tipografía cursiva con destello */}
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <Sparkles
            size={18}
            className="text-[#A11DA0] group-hover:rotate-45 transition-transform duration-300"
          />
          <span className="font-cursive text-2xl sm:text-3xl text-white tracking-wide">
            Noemi Valdivia <span className="text-[#A11DA0]">Studio</span>
          </span>
        </a>

        {/* Enlaces en Escritorio en forma de botoncitos */}
        <nav className="hidden lg:flex items-center gap-2 p-1.5 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-2 rounded-full text-xs xl:text-sm font-medium text-gray-200 bg-white/[0.03] hover:bg-gradient-to-r hover:from-[#A11DA0]/25 hover:to-[#4B1DA1]/30 hover:text-white border border-white/[0.06] hover:border-[#A11DA0]/50 shadow-sm hover:shadow-[0_0_15px_rgba(161,29,160,0.35)] transition-all duration-300 whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Botón CTA en Escritorio */}
        <div className="hidden lg:block shrink-0">
          <a
            href="https://wa.me/523327825329?text=Hola%20Noemi%2C%20me%20gustar%C3%ADa%20cotizar%20mi%20p%C3%A1gina%20web."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#A11DA0] via-[#761DA1] to-[#4B1DA1] hover:shadow-[0_0_22px_rgba(161,29,160,0.7)] hover:scale-[1.03] border border-white/20 transition-all duration-300 whitespace-nowrap"
          >
            <span>Agendar Proyecto</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Botón Hamburguesa para Celular y Tablet */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white transition-colors"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menú Desplegable en Celular en forma de botoncitos */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0b071a]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-5 shadow-2xl">
          <nav className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-gray-200 bg-white/[0.04] hover:bg-[#A11DA0]/20 hover:text-white border border-white/10 hover:border-[#A11DA0]/50 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a
            href="https://wa.me/523327825329?text=Hola%20Noemi%2C%20me%20gustar%C3%ADa%20cotizar%20mi%20p%C3%A1gina%20web."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#A11DA0] via-[#761DA1] to-[#4B1DA1] border border-white/20 shadow-[0_0_20px_rgba(161,29,160,0.45)]"
          >
            <span>Cotiza tu página por WhatsApp</span>
            <ArrowRight size={16} />
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
