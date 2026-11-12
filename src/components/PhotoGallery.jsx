import React, { useState, useRef } from "react";
import {
  Sparkles,
  Camera,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react";

import gal1 from "../assets/images/gallery-1.avif";
import gal2 from "../assets/images/gallery-2.avif";
import gal3 from "../assets/images/gallery-3.avif";
import gal4 from "../assets/images/gallery-4.avif";
import gal5 from "../assets/images/gallery-5.avif";
import gal6 from "../assets/images/gallery-6.avif";
import gal7 from "../assets/images/gallery-7.avif";
import gal9 from "../assets/images/gallery-9.avif";
import gal10 from "../assets/images/gallery-10.avif";
import gal11 from "../assets/images/gallery-11.avif";
import gal12 from "../assets/images/gallery-12.avif";

const photoGallery = [
  {
    id: 11,
    img: gal11,
    title: "Habitarse con orgullo",
    caption:
      "La sensualidad entendida como un diálogo íntimo contigo misma, libre de juicios.",
  },
  {
    id: 10,
    img: gal10,
    title: "Elegancia visceral",
    caption:
      "Una estética editorial que honra lo natural, lo crudo y lo profundamente femenino.",
  },
  {
    id: 1,
    img: gal1,
    title: "Libertad sin filtros",
    caption:
      "Retrato íntimo que celebra el derecho a habitar el propio cuerpo sin pedir permiso ni seguir moldes.",
  },
  {
    id: 2,
    img: gal2,
    title: "Sensualidad sutil",
    caption:
      "Juegos de luces y sombras que revelan la elegancia natural de la piel y el movimiento.",
  },
  {
    id: 3,
    img: gal3,
    title: "Seguridad femenina",
    caption:
      "Miradas que sostienen el lente con calma, carácter y una presencia imposible de ignorar.",
  },
  {
    id: 4,
    img: gal4,
    title: "Rebeldia y Locura",
    caption:
      "La belleza que nace cuando una mujer decide ser la única autora de su historia y su imagen.",
  },
  {
    id: 5,
    img: gal5,
    title: "Luz entre sombras",
    caption:
      "Contrastes cinematográficos que abrazan la vulnerabilidad y la transforman en fuerza.",
  },
  {
    id: 6,
    img: gal6,
    title: "Sin etiquetas",
    caption:
      "Un instante honesto donde desaparecen las expectativas externas y queda solo la esencia.",
  },
  {
    id: 7,
    img: gal7,
    title: "Fuerza en calma",
    caption:
      "No hace falta levantar la voz para imponer presencia; basta con estar en paz con quien eres.",
  },
  {
    id: 9,
    img: gal9,
    title: "Mirada indómita",
    caption:
      "Retratos que capturan el instante exacto en que el miedo cede lugar al orgullo de ser mujer.",
  },

  {
    id: 12,
    img: gal12,
    title: "Atmósfera de autor",
    caption:
      "Composición y luz pensadas como un fotograma de cine donde tú eres la protagonista absoluta.",
  },
];

export const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
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
      id="fotografia"
      className="relative py-24 bg-[#0b071a] overflow-hidden border-t border-white/5"
    >
      {/* Resplandores ambientales */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#A11DA0] opacity-15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#4B1DA1] opacity-20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Encabezado y Descripción del Enfoque Fotográfico */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#A11DA0]/40 bg-[#A11DA0]/10 backdrop-blur-md">
              <Camera size={14} className="text-[#A11DA0]" />
              <span className="text-xs uppercase tracking-widest text-purple-300 font-semibold">
                Mi Faceta como Fotógrafa
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-light leading-tight">
              Conoce más sobre mi{" "}
              <span className="font-cursive text-[#A11DA0] text-4xl sm:text-6xl px-1">
                trabajo y pasión por la fotografía
              </span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
              A través de mi lente busco capturar la esencia más auténtica de
              cada mujer: una celebración de la{" "}
              <strong className="text-white font-medium">libertad</strong> de
              ser sin etiquetas, la{" "}
              <strong className="text-white font-medium">sensualidad</strong>{" "}
              entendida como expresión natural y la{" "}
              <strong className="text-white font-medium">
                seguridad femenina
              </strong>{" "}
              que nace cuando te miras con orgullo y sin miedo.
            </p>

            <p className="text-xs sm:text-sm text-purple-300/80 flex items-center gap-2 pt-1">
              <Maximize2 size={14} className="text-[#A11DA0]" />
              <span>
                Desliza hacia la derecha y haz clic en cualquier fotografía para
                abrirla en pantalla completa
              </span>
            </p>
          </div>

          {/* Controles de desplazamiento horizontal */}
          <div className="flex items-center gap-3 shrink-0">
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

        {/* Galería Horizontal Deslizable Amplia */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {photoGallery.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="snap-start flex-none w-[280px] sm:w-[340px] h-[420px] sm:h-[480px] rounded-3xl overflow-hidden relative group cursor-pointer border border-white/15 hover:border-[#A11DA0] transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            >
              <img
                src={photo.img}
                alt={photo.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Overlay gradiente cinematográfico */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b071a] via-transparent to-transparent opacity-85" />

              {/* Botón visual de expandir */}
              <div className="absolute top-4 right-4 p-2.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white group-hover:bg-[#A11DA0] group-hover:border-[#A11DA0] transition-all duration-300">
                <Maximize2 size={16} />
              </div>

              {/* Pie de foto */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/65 backdrop-blur-md border border-white/10 space-y-1">
                <p className="text-base font-medium text-white group-hover:text-purple-200 transition-colors">
                  {photo.title}
                </p>
                <p className="text-xs text-gray-300 font-light line-clamp-2">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Banner Promocional de Venta Cruzada + Botón Directo a WhatsApp */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#201DA1]/40 via-[#761DA1]/30 to-[#A11DA0]/30 border border-[#A11DA0]/50 backdrop-blur-xl shadow-[0_0_45px_rgba(161,29,160,0.25)] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          {/* Resplandor decorativo */}
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#A11DA0] opacity-25 blur-3xl rounded-full pointer-events-none" />

          <div className="space-y-2 max-w-2xl relative z-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#A11DA0] bg-black/40 px-3 py-1 rounded-full border border-[#A11DA0]/40">
              ✨ Beneficio Exclusivo para tu Marca
            </span>
            <h3 className="text-xl sm:text-2xl font-medium text-white leading-snug">
              En la compra de un paquete para tu página recibe un{" "}
              <span className="font-cursive text-[#A11DA0] text-3xl sm:text-4xl">
                descuento especial
              </span>{" "}
              en la toma de tus fotografías para tu proyecto.
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-light">
              Proyecta una imagen profesional, auténtica y coherente desde el
              primer clic.
            </p>
          </div>

          {/* Botón Directo a WhatsApp */}
          <div className="shrink-0 relative z-10 w-full sm:w-auto">
            <a
              href="https://wa.me/3327825329?text=Hola%20Noemi%2C%20me%20interesa%20un%20paquete%20para%20mi%20p%C3%A1gina%20web%20y%20quiero%20aprovechar%20el%20descuento%20especial%20en%20la%20toma%20de%20fotograf%C3%ADas%20para%20mi%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-[#A11DA0] via-[#761DA1] to-[#4B1DA1] hover:shadow-[0_0_30px_rgba(161,29,160,0.7)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              {/* Ícono de WhatsApp en SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 shrink-0"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" />
              </svg>
              <span>Aprovechar promoción por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* MODAL DE IMAGEN EN GRANDE */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#0b071a] border border-[#A11DA0]/50 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(161,29,160,0.45)]"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/75 hover:bg-[#A11DA0] text-white border border-white/20 transition-colors"
              aria-label="Cerrar imagen"
            >
              <X size={20} />
            </button>

            <div className="bg-black flex items-center justify-center max-h-[75vh]">
              <img
                src={selectedPhoto.img}
                alt={selectedPhoto.title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 bg-gradient-to-r from-[#201DA1]/40 via-[#4B1DA1]/30 to-[#0b071a] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="font-cursive text-[#A11DA0] text-2xl sm:text-3xl">
                  {selectedPhoto.title}
                </h4>
                <p className="text-sm text-gray-300 font-light">
                  {selectedPhoto.caption}
                </p>
              </div>
              <span className="text-xs uppercase tracking-widest text-purple-300/70">
                Noemi Valdivia • Fotografía de Autor
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
