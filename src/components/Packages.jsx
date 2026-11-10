import React from "react";
import {
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Calendar,
  MapPin,
  Image,
  Flame,
  ArrowRight,
} from "lucide-react";

// Importamos imágenes cinematográficas para la portada de cada plantilla
import imgPediatria from "../assets/images/pediatra.avif";
import imgPsicologia from "../assets/images/psicologia.jpg";
import imgCosmetologia from "../assets/images/cosmetologa.jpg";

const packagesData = [
  {
    id: "pediatria",
    title: "Sitio Web para Pediatría",
    sector: "Salud Infantil",
    price: "$3,000",
    currency: "MXN",
    badge: "Básico",
    image: imgPediatria,
    vercelUrl: "https://noemivaldiviagdl.github.io/salud-landing/", // Cambia por tu link real de Vercel
    features: [
      "Llamados a la acción directos (WhatsApp y llamadas)",
      'Sección elegante "Sobre mí / Trayectoria"',
      "Calendario interactivo para agendar citas",
      "Galería sencilla de instalaciones / atención",
      "Ubicación en Google Maps integrada",
    ],
    popular: false,
  },
  {
    id: "psicologia",
    title: "Sitio Web para Psicología",
    sector: "Salud Mental & Bienestar",
    price: "$3,000",
    currency: "MXN",
    badge: "Básico",
    image: imgPsicologia,
    vercelUrl: "https://salud-landing-pro-olive.vercel.app/", // Cambia por tu link real de Vercel
    features: [
      "Llamados a la acción directos (WhatsApp y llamadas)",
      'Sección elegante "Sobre mí / Filosofía de consulta"',
      "Calendario interactivo para agendar sesiones",
      "Galería sencilla del consultorio",
      "Ubicación en Google Maps integrada",
    ],
    popular: false,
  },
  {
    id: "cosmetologia",
    title: "Sitio Web para Cosmetología",
    sector: "Estética & Belleza Premium",
    price: "$3,500",
    currency: "MXN",
    badge: "Más Completa",
    image: imgCosmetologia,
    vercelUrl: "https://salud-landing-premium.vercel.app/", // Cambia por tu link real de Vercel
    features: [
      "Todo lo del paquete básico (CTA, Sobre mí, Calendario y Mapa)",
      "Banner superior para Promociones del Mes",
      "Galería extra especial de Resultados Antes y Después",
      "Galería de servicios y tratamientos",
      "Diseño visual ultra elegante y enfocado en estética",
    ],
    popular: true,
  },
];

export const Packages = () => {
  return (
    <section
      id="proyectos-disponibles"
      className="relative py-24 bg-[#0b071a] overflow-hidden"
    >
      {/* Resplandor de fondo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#A11DA0] opacity-15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-[#201DA1] opacity-20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#761DA1]/40 bg-[#4B1DA1]/10 backdrop-blur-md">
            <Sparkles size={14} className="text-[#A11DA0]" />
            <span className="text-xs uppercase tracking-widest text-purple-300 font-semibold">
              Páginas Listas para Tu Negocio
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-light">
            Sitios web listos para{" "}
            <span className="font-cursive text-[#A11DA0] text-4xl sm:text-6xl px-1">
              salud y belleza
            </span>
          </h2>

          <p className="text-gray-200 text-base sm:text-lg font-light">
            Elige el diseño ideal para tu especialidad. Páginas listas para
            personalizar con tus datos, fotos y marca en tiempo récord.
          </p>
        </div>

        {/* Tarjetas de Proyectos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packagesData.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl overflow-hidden bg-slate-900/40 border transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between backdrop-blur-md ${
                pkg.popular
                  ? "border-[#A11DA0] shadow-[0_0_35px_rgba(161,29,160,0.3)] bg-gradient-to-b from-[#761DA1]/10 via-slate-900/50 to-slate-900/80"
                  : "border-white/10 hover:border-[#761DA1]/50 shadow-xl"
              }`}
            >
              {/* Tag de Destacado / Más Vendido */}
              {pkg.popular && (
                <div className="absolute top-4 right-4 z-30 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#A11DA0] to-[#761DA1] shadow-lg">
                  <Flame size={14} />
                  <span>{pkg.badge}</span>
                </div>
              )}

              <div>
                {/* Previsualización de la Imagen */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b071a] via-[#0b071a]/30 to-transparent" />

                  <span className="absolute bottom-3 left-4 text-xs font-semibold px-3 py-1 rounded-full bg-black/60 border border-white/20 text-purple-200 backdrop-blur-md">
                    {pkg.sector}
                  </span>
                </div>

                {/* Contenido y Características */}
                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {pkg.title}
                    </h3>

                    {/* Precio */}
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white tracking-tight">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-gray-400 font-semibold uppercase">
                        {pkg.currency}
                      </span>
                    </div>
                  </div>

                  {/* Lista de características */}
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <p className="text-xs font-bold uppercase tracking-wider text-purple-300">
                      Lo que incluye esta página:
                    </p>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-[#A11DA0] shrink-0 mt-0.5"
                          />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Botones de Acción */}
              <div className="p-6 pt-0 space-y-3">
                {/* Enlace al Demo en Vercel */}
                <a
                  href={pkg.vercelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-xs text-white bg-white/5 border border-white/15 hover:bg-white/15 transition-all duration-300"
                >
                  <span>Ver Demo en Vivo (Vercel)</span>
                  <ExternalLink size={14} className="text-[#A11DA0]" />
                </a>

                {/* Botón para Comprar / Cotizar */}
                <a
                  href="#contacto"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-xs text-white transition-all duration-300 ${
                    pkg.popular
                      ? "bg-gradient-to-r from-[#A11DA0] via-[#761DA1] to-[#4B1DA1] hover:shadow-[0_0_25px_rgba(161,29,160,0.6)]"
                      : "bg-[#761DA1] hover:bg-[#4B1DA1]"
                  }`}
                >
                  <span>Quiero esta página para mi negocio</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Garantía / Llamado de confianza */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#4B1DA1]/30 via-[#761DA1]/20 to-[#201DA1]/30 border border-[#A11DA0]/40 backdrop-blur-xl relative overflow-hidden text-center shadow-[0_0_40px_rgba(118,29,161,0.2)]">
          {/* Destello de luz ambiental de fondo */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#A11DA0] opacity-30 blur-3xl rounded-full pointer-events-none" />

          <div className="max-w-4xl mx-auto space-y-4 relative z-10">
            {/* Insignia / Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#A11DA0]/50 bg-[#A11DA0]/20 text-[#A11DA0] font-semibold text-xs tracking-wider uppercase">
              <Sparkles size={16} className="animate-pulse" />
              <span>Garantía & Servicio Completo</span>
            </div>

            {/* Texto Principal en Grande */}
            <h3 className="text-xl sm:text-3xl font-medium text-white leading-relaxed">
              Todos los paquetes incluyen{" "}
              <span className="font-cursive text-[#A11DA0] text-3xl sm:text-4xl">
                personalización completa
              </span>{" "}
              de colores, logo, textos y montaje final en tu propio dominio.
            </h3>

            {/* Subtexto aclaratorio */}
            <p className="text-gray-300 text-sm sm:text-base font-light">
              Tú no tienes que preocuparte por nada técnico. Te entrego tu
              página 100% terminada y lista para recibir clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
{
  /* Banner de Garantía y Beneficios Incluidos (Versión Destacada y Grande) */
}
