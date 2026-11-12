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
          ? "bg-[#0b071a]/85 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
        {/* Marca / Logo en tipografía cursiva con destello */}
        <a href="#" className="flex items-center gap-2 group">
          <Sparkles
            size={18}
            className="text-[#A11DA0] group-hover:rotate-45 transition-transform duration-300"
          />
          <span className="font-cursive text-2xl sm:text-3xl text-white tracking-wide">
            Noemi Valdivia <span className="text-[#A11DA0]">Studio</span>
          </span>
        </a>

        {/* Enlaces en Escritorio */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-light text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#A11DA0] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Botón CTA en Escritorio */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/5213300000000?text=Hola%20Noemi%2C%20me%20gustar%C3%ADa%20cotizar%20mi%20p%C3%A1gina%20web."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#761DA1] to-[#4B1DA1] hover:shadow-[0_0_20px_rgba(161,29,160,0.6)] border border-white/15 transition-all duration-300"
          >
            <span>Agendar Proyecto</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Botón Hamburguesa para Celular */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-white/5 border border-white/15 text-white"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menú Desplegable en Celular */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0b071a]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-gray-200 hover:text-[#A11DA0] py-1.5 border-b border-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a
            href="https://wa.me/5213300000000?text=Hola%20Noemi%2C%20me%20gustar%C3%ADa%20cotizar%20mi%20p%C3%A1gina%20web."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#A11DA0] via-[#761DA1] to-[#4B1DA1]"
          >
            <span>Cotiza tu página por WhatsApp</span>
            <ArrowRight size={16} />
          </a>
        </div>
      )}
    </header>
  );
};
