import React from "react";
import { Sparkles, ArrowUpRight, Heart } from "lucide-react";

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contacto"
      className="relative bg-[#070412] border-t border-white/10 pt-20 pb-10 px-6 sm:px-12 overflow-hidden"
    >
      {/* Resplandor superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gradient-to-b from-[#4B1DA1]/25 to-transparent blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Cierre Final de Embudo */}
        <div className="text-center max-w-2xl mx-auto space-y-5 pb-16 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#A11DA0]/40 bg-[#A11DA0]/10">
            <Sparkles size={14} className="text-[#A11DA0]" />
            <span className="text-xs uppercase tracking-widest text-purple-300 font-semibold">
              Comencemos Hoy
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-light text-white leading-tight">
            Hagamos realidad la página que{" "}
            <span className="font-cursive text-[#A11DA0] text-4xl sm:text-6xl">
              tu proyecto merece
            </span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base font-light">
            Escríbeme por WhatsApp, cuéntame sobre tu negocio o especialidad y
            en pocos días estarás recibiendo clientes en línea.
          </p>

          <div className="pt-2">
            <a
              href="https://wa.me/5213300000000?text=Hola%20Noemi%2C%20quiero%20iniciar%20mi%20p%C3%A1gina%20web%20contigo."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-[#A11DA0] via-[#761DA1] to-[#4B1DA1] hover:shadow-[0_0_35px_rgba(161,29,160,0.6)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Enviar mensaje directo a WhatsApp</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* Columnas del Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Marca */}
          <div className="space-y-3">
            <a href="#" className="flex items-center gap-2">
              <Sparkles size={18} className="text-[#A11DA0]" />
              <span className="font-cursive text-3xl text-white">
                Noemi Valdivia <span className="text-[#A11DA0]">Studio</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-gray-400 font-light max-w-xs leading-relaxed">
              Desarrollo web cinematográfico y fotografía de autor. Uniendo
              estética, estrategia y código limpio.
            </p>
          </div>

          {/* Navegación Rápida */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-purple-300">
              Explorar
            </h4>
            <ul className="space-y-2 text-sm text-gray-400 font-light">
              <li>
                <a
                  href="#servicios"
                  className="hover:text-white transition-colors"
                >
                  Lo que incluyen mis páginas
                </a>
              </li>
              <li>
                <a
                  href="#proyectos-disponibles"
                  className="hover:text-white transition-colors"
                >
                  Paquetes Salud & Belleza
                </a>
              </li>
              <li>
                <a
                  href="#sobre-mi"
                  className="hover:text-white transition-colors"
                >
                  Sobre mí
                </a>
              </li>
              <li>
                <a
                  href="#fotografia"
                  className="hover:text-white transition-colors"
                >
                  Enfoque fotográfico
                </a>
              </li>
              <li>
                <a
                  href="#preguntas-frecuentes"
                  className="hover:text-white transition-colors"
                >
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-purple-300">
              Conecta conmigo
            </h4>
            <div className="flex flex-col space-y-2.5">
              <a
                href="https://www.instagram.com/paloma_negra_fotografia?cplk=Y2hvOGxueHR4c2hr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm text-gray-300 hover:text-[#A11DA0] transition-colors"
              >
                <InstagramIcon className="w-[18px] h-[18px] text-[#A11DA0]" />
                <span>Instagram • Fotografía de Autor</span>
              </a>
            </div>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {currentYear} Noemi Valdivia Studio. Todos los derechos
            reservados.
          </p>
          <p className="flex items-center gap-1.5">
            Diseñado y programado con{" "}
            <Heart size={13} className="text-[#A11DA0] fill-[#A11DA0]" /> en
            Guadalajara, México.
          </p>
        </div>
      </div>
    </footer>
  );
};
