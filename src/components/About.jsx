import React from "react";
import {
  Sparkles,
  Film,
  Camera,
  BookOpen,
  Code2,
  ArrowRight,
} from "lucide-react";

// Importación de tus imágenes atmosféricas
import Perfil2 from "../assets/images/perfil2.jpg";
import Perfil3 from "../assets/images/perfil3.jpg";

const pillars = [
  {
    icon: Film,
    title: "Estética Cinematográfica",
    description:
      "Mi pasión por el cine guía cada proyecto: cuido la iluminación, el ritmo visual y la atmósfera para que entrar a tu página se sienta como ver una gran historia.",
  },
  {
    icon: Camera,
    title: "Fotografía de Arte",
    description:
      "Entiendo el valor de una buena composición, el encuadre y los detalles. Sé cómo hacer que tus imágenes y tu imagen profesional luzcan impecables.",
  },
  {
    icon: BookOpen,
    title: "Mirada Filosófica",
    description:
      "La filosofía me enseñó a ir al fondo de las cosas: no hago páginas de relleno, busco transmitir la verdadera esencia y propósito de tu trabajo.",
  },
  {
    icon: Code2,
    title: "Desarrollo Web Estratégico",
    description:
      "Transformo toda esa sensibilidad artística en código limpio, rápido y funcional, pensado para que tus clientes naveguen fácil y te contacten sin rodeos.",
  },
];

export const About = () => {
  return (
    <section
      id="sobre-mi"
      className="relative py-24 px-6 sm:px-12 bg-[#0b071a] overflow-hidden"
    >
      {/* Resplandores ambientales de la paleta */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#761DA1] opacity-20 blur-[150px] rounded-full pointer-events-none animate-glow" />
      <div className="absolute bottom-20 left-10 w-[450px] h-[450px] bg-[#1D44A1] opacity-20 blur-[150px] rounded-full pointer-events-none" />

      {/* Destello decorativo */}
      <div className="absolute top-1/4 left-[8%] text-[#A11DA0] opacity-60 animate-sparkle pointer-events-none">
        <Sparkles size={24} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          {/* Columna Izquierda: Composición Visual Cinematográfica */}
          <div className="lg:col-span-5 relative">
            {/* Aura detrás de las imágenes */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#4B1DA1] via-[#761DA1] to-[#A11DA0] rounded-3xl blur-2xl opacity-30 pointer-events-none" />

            <div className="relative space-y-6">
              {/* Fotografía Principal */}
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl group">
                <img
                  src={Perfil2}
                  alt="Universo creativo de Noemi Valdivia"
                  className="w-full h-[380px] sm:h-[430px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b071a] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-purple-300 uppercase tracking-wider font-semibold">
                      Noemi Valdivia Studio
                    </p>
                    <p className="text-sm text-white font-light">
                      Arte, pensamiento y código con propósito
                    </p>
                  </div>
                  <Sparkles size={18} className="text-[#A11DA0] shrink-0" />
                </div>
              </div>

              {/* Tarjeta flotante secundaria con segunda imagen y cita */}
              <div className="sm:ml-12 p-4 rounded-3xl bg-slate-900/70 border border-[#761DA1]/40 backdrop-blur-xl shadow-xl flex items-center gap-4">
                <img
                  src={Perfil3}
                  alt="Fotografía y cine"
                  className="w-20 h-20 rounded-2xl object-cover shrink-0 border border-white/15"
                />
                <p className="text-xs sm:text-sm text-gray-300 italic font-light leading-relaxed">
                  "Una página web no solo debe funcionar bien; debe despertar
                  emociones y reflejar quién eres."
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Narrativa Personal y Pilares */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#761DA1]/40 bg-[#4B1DA1]/10 backdrop-blur-md">
                <Sparkles size={14} className="text-[#A11DA0]" />
                <span className="text-xs uppercase tracking-widest text-purple-300 font-semibold">
                  Detrás del Estudio
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-light leading-tight">
                Donde el arte, el cine y el{" "}
                <span className="font-cursive text-[#A11DA0] text-4xl sm:text-6xl px-1">
                  desarrollo web
                </span>{" "}
                se encuentran
              </h2>

              <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
                Soy{" "}
                <strong className="text-white font-semibold">
                  Noemi Valdivia
                </strong>
                , desarrolladora web apasionada por crear espacios digitales con
                alma. Mi forma de diseñar nace de cuatro mundos que definen
                quién soy: el <span className="text-purple-300">cine</span>, la{" "}
                <span className="text-purple-300">fotografía de arte</span>, la{" "}
                <span className="text-purple-300">filosofía</span> y la{" "}
                <span className="text-purple-300">programación</span>.
              </p>

              <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed">
                Mientras la mayoría hace páginas genéricas y frías, yo aplico la
                sensibilidad visual del arte y la claridad del pensamiento
                filosófico para construir sitios elegantes, humanos y diseñados
                estratégicamente para conectar con tus clientes desde el primer
                vistazo.
              </p>
            </div>

            {/* Grilla de los 4 Pilares */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-900/40 border border-white/10 hover:border-[#A11DA0]/50 backdrop-blur-md transition-all duration-300 space-y-2.5 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#761DA1]/25 border border-[#761DA1]/50 flex items-center justify-center text-[#A11DA0] group-hover:scale-110 transition-transform">
                        <IconComponent size={18} />
                      </div>
                      <h3 className="text-base font-semibold text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Cierre de sección con llamado a la acción */}
            <div className="pt-4">
              <a
                href="#contacto"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-[#761DA1] via-[#4B1DA1] to-[#1D44A1] hover:shadow-[0_0_30px_rgba(161,29,160,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base"
              >
                <span>Trabajemos juntos en tu proyecto</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
