import React from "react";
import { Sparkles, ArrowRight, Code2, Play } from "lucide-react";
import perfilImg from "../assets/images/hero.avif";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 px-6 sm:px-12">
      {/* Luces y destellos cinematográficos de fondo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#4B1DA1] via-[#761DA1] to-[#A11DA0] opacity-30 blur-[120px] rounded-full pointer-events-none animate-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#1D44A1] opacity-25 blur-[100px] rounded-full pointer-events-none" />

      {/* Destello decorativo flotante 1 */}
      <div className="absolute top-1/3 left-[15%] text-[#A11DA0] opacity-75 animate-sparkle pointer-events-none">
        <Sparkles size={28} />
      </div>
      {/* Destello decorativo flotante 2 */}
      <div className="absolute bottom-1/4 right-[20%] text-[#761DA1] opacity-60 animate-sparkle delay-1000 pointer-events-none">
        <Sparkles size={20} />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Columna Izquierda: Copywriting enfocado en Embudo de Ventas */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-8">
          {/* Badge Superior */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#761DA1]/40 bg-[#4B1DA1]/10 backdrop-blur-md">
            <Sparkles size={16} className="text-[#A11DA0] animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-purple-200 font-semibold">
              Desarrollo Web & Arquitectura Digital
            </span>
          </div>

          {/* Título Principal Cinematográfico con Tipografía Cursiva */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-tight">
            Transformo tu visión en una{" "}
            <span className="font-cursive font-normal text-[#A11DA0] drop-shadow-[0_0_25px_rgba(161,29,160,0.6)] px-2">
              experiencia digital
            </span>{" "}
            que vende.
          </h1>

          {/* Subtítulo / Propuesta de Valor */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
            Hola, soy{" "}
            <strong className="text-white font-semibold">
              Noemi Valdivia{" "}
            </strong>
            Desarrolladora Web y Fotógrafa. Desarrollo sitios web dinámicos,
            elegantes y llenos de color, optimizados estratégicamente para
            convertir visitantes en clientes.
          </p>

          {/* Llamados a la Acción (CTA) */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
            <a
              href="https://wa.me/5213300000000?text=Hola%20Noemi%2C%20me%20gustar%C3%ADa%20agendar%20un%20proyecto%20para%20mi%20p%C3%A1gina%20web."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-[#761DA1] via-[#4B1DA1] to-[#1D44A1] hover:shadow-[0_0_30px_rgba(118,29,161,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Agendar Proyecto</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="#proyectos-disponibles"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-medium text-gray-200 border border-white/15 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              <Play size={16} className="text-[#A11DA0]" />
              <span>Ver Portafolio</span>
            </a>
          </div>

          {/* Métricas rápidas de credibilidad */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
            <div>
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-xs text-gray-400">Diseño a Medida</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">+ ROI</p>
              <p className="text-xs text-gray-400">Enfoque a Ventas</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">High-End</p>
              <p className="text-xs text-gray-400">Estética Premium</p>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Fotografía Cinematográfica con Marcos y Destellos */}
        <div className="lg:col-span-5 relative flex justify-center">
          {/* Glow de fondo de la foto */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#201DA1] to-[#A11DA0] rounded-3xl blur-2xl opacity-40 transform rotate-3 scale-95" />

          {/* Contenedor Principal de la Imagen */}
          <div className="relative z-10 w-full max-w-sm sm:max-w-md rounded-3xl overflow-hidden border border-white/20 bg-slate-900/40 backdrop-blur-md shadow-2xl group">
            <img
              src={perfilImg}
              alt="Noemi Valdivia - Programadora y Diseñadora Web"
              className="w-full h-[480px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Overlay Gradiente de Cine sobre la foto */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b071a] via-transparent to-transparent opacity-80" />

            {/* Destello animado sobre la esquina de la foto */}
            <div className="absolute top-4 right-4 text-[#A11DA0] bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/20">
              <Sparkles
                size={20}
                className="animate-spin"
                style={{ animationDuration: "8s" }}
              />
            </div>

            {/* Etiqueta flotante inferior */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-lg border border-white/10 flex items-center justify-between">
              <div>
                <p className="text-xs text-purple-300 font-medium">
                  Noemi Valdivia
                </p>
                <p className="text-sm font-semibold text-white">
                  Full-Stack & UX Designer
                </p>
              </div>
              <div className="p-2 rounded-xl bg-[#761DA1]/30 border border-[#761DA1]/50 text-purple-200">
                <Code2 size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
