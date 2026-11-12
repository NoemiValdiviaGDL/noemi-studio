import React, { useRef } from "react";
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Smartphone,
} from "lucide-react";

// Importación de tus capturas de pantalla / galería
import gal1 from "../assets/images/services-1.jpg";
import gal2 from "../assets/images/services-2.jpg";
import gal3 from "../assets/images/services-3.jpg";
import gal4 from "../assets/images/services-4.jpg";
import gal5 from "../assets/images/services-5.jpg";
import gal6 from "../assets/images/services-6.jpg";
const includesList = [
  {
    title: "Se ve perfecta en celulares y computadoras",
    description:
      "Tu página se adapta automáticamente al tamaño de cualquier pantalla para que nadie se vaya por un mal diseño.",
  },
  {
    title: "Botón directo a tu WhatsApp y llamadas",
    description:
      "Tus clientes podrán contactarte o pedir informes con un solo clic de forma inmediata.",
  },
  {
    title: "Carga al instante sin esperas",
    description:
      "Optimizada para abrir de inmediato. Si una página tarda en cargar, los clientes se van con la competencia.",
  },
  {
    title: "Formularios y agenda de citas",
    description:
      "Tus clientes podrán dejarte sus datos o agendar una cita directamente en tu sitio a la hora que sea.",
  },
  {
    title: "Diseño elegante y personalizado",
    description:
      "Nada de plantillas aburridas. Una imagen profesional que genera confianza desde el primer segundo.",
  },
  {
    title: "Lista para aparecer en Google",
    description:
      "Estructurada para que las personas que buscan tus servicios en internet te encuentren fácilmente.",
  },
];

const galleryImages = [
  { id: 1, img: gal1, tag: "Diseño para Celulares" },
  { id: 2, img: gal2, tag: "Botones Directos a WhatsApp" },
  { id: 3, img: gal3, tag: "Formularios de Contacto" },
  { id: 4, img: gal4, tag: "Galería de Productos / Trabajos" },
  { id: 5, img: gal5, tag: "Agenda de Citas en Línea" },
  { id: 6, img: gal6, tag: "Mapa interactivo Google Maps" },
];

export const ServicesGallery = () => {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="servicios"
      className="relative py-24 bg-[#0b071a] overflow-hidden"
    >
      {/* Luz y resplandor de fondo */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#761DA1] opacity-20 blur-[150px] rounded-full pointer-events-none animate-glow" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[#201DA1] opacity-20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Encabezado Principal */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#761DA1]/40 bg-[#4B1DA1]/10 backdrop-blur-md">
            <Sparkles size={14} className="text-[#A11DA0]" />
            <span className="text-xs uppercase tracking-widest text-purple-300 font-semibold">
              Todo Incluido en Tu Sitio Web
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-light">
            Todo lo que necesita tu página para{" "}
            <span className="font-cursive text-[#A11DA0] text-4xl sm:text-6xl px-1">
              conseguir clientes
            </span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg font-light">
            Olvídate de tecnicismos complicados. Entrego páginas web listas para
            usar, creadas para dar una imagen profesional y facilitarle la
            compra a tus clientes.
          </p>
        </div>

        {/* Grilla de Lo Que Incluye */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {includesList.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-900/40 border border-white/10 hover:border-[#761DA1]/50 backdrop-blur-md transition-all duration-300 space-y-3 group hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#761DA1]/20 border border-[#761DA1]/40 flex items-center justify-center text-[#A11DA0] group-hover:scale-110 transition-transform">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:text-purple-200 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Encabezado del Carrusel Deslizable */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Smartphone size={16} />
              <span>Optimizadas para Móvil</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-light">
              Así se ven mis páginas{" "}
              <span className="font-cursive text-[#A11DA0] text-3xl sm:text-5xl">
                en el celular
              </span>
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Desliza para ver la experiencia vertical real de tus futuros
              clientes.
            </p>
          </div>

          {/* Botones de Navegación del Carrusel */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScroll("left")}
              className="p-3.5 rounded-full bg-white/5 border border-white/15 text-white hover:bg-[#761DA1] hover:border-[#761DA1] transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="p-3.5 rounded-full bg-white/5 border border-white/15 text-white hover:bg-[#761DA1] hover:border-[#761DA1] transition-all"
              aria-label="Siguiente"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Galería Horizontal Deslizable para Capturas Verticales */}
      {/* Contenedor alineado al centro con el resto del contenido en Desktop */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Galería Horizontal Deslizable */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-none pb-10 snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="snap-start flex-none w-[300px] sm:w-[340px] rounded-[2.5rem] p-3 bg-gradient-to-b from-white/15 via-white/5 to-white/10 border border-white/20 hover:border-[#A11DA0] transition-all duration-500 group shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative"
            >
              {/* Mockup / Marco del Teléfono Celular */}
              <div className="relative w-full h-[580px] sm:h-[620px] rounded-[2rem] overflow-hidden bg-black border border-white/10">
                {/* Isla Dinámica / Cámara del Celular */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 border border-white/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-purple-900/50 mr-2" />
                </div>

                {/* Imagen Vertical Completa */}
                <img
                  src={item.img}
                  alt={item.tag}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Sombra y Overlay Cinematográfico Inferior */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b071a] via-transparent to-transparent opacity-90 z-10" />

                {/* Etiqueta / Descripción Flotante */}
                <div className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 text-center">
                  <p className="text-xs font-semibold text-purple-200 tracking-wide">
                    {item.tag}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Llamado a la Acción al final del carrusel */}
        <div className="mt-8 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-[#761DA1] via-[#4B1DA1] to-[#1D44A1] hover:shadow-[0_0_35px_rgba(161,29,160,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base"
          >
            <span>Quiero una página así para mi negocio</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
