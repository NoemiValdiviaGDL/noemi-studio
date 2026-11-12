import React, { useState } from "react";
import {
  Sparkles,
  ChevronDown,
  MessageCircleQuestion,
  ArrowRight,
} from "lucide-react";

const faqData = [
  {
    question: "¿En cuánto tiempo queda lista mi página web?",
    answer:
      "Una vez que me envíes tus fotos, logotipo, información de tus servicios y colores preferidos, tu página queda lista y publicada en un plazo de 7 a 10 días hábiles.",
  },
  {
    question: "¿Necesito saber de programación o diseño para manejarla?",
    answer:
      "Para nada. Yo me encargo de todo el armado, montaje y configuración inicial. Te entrego tu sitio funcionando al 100%, listo para que compartas el enlace en tu Instagram, Facebook o WhatsApp.",
  },
  {
    question: "¿Cómo funciona el pago? ¿Tengo que pagar todo al inicio?",
    answer:
      "Para comenzar trabajamos con un 25% de anticipo y el 50% restante lo liquidas hasta que tu página esté terminada, revisada y lista para salir al aire.",
  },
  {
    question: "¿Qué necesito tener listo para empezar mi proyecto?",
    answer:
      "Solo necesitas tus datos de contacto (WhatsApp, redes sociales, dirección de tu consultorio o estudio), la lista de tus servicios o tratamientos, tus fotos y tu logotipo (si aún no tienes logo, podemos usar tu nombre con una tipografía elegante).",
  },
  {
    question:
      "¿Qué pasa con el nombre de mi página (dominio) y dónde se guarda?",
    answer:
      "Te asesoro paso a paso para registrar el nombre oficial de tu negocio en internet (por ejemplo: tunegocio.com) y dejo todo conectado a tu nombre para que tú seas la única dueña o dueño de tu sitio.",
  },
  {
    question: "¿Mis clientes realmente pueden agendar citas desde la página?",
    answer:
      "Sí. El calendario interactivo permite que tus pacientes o clientes elijan el día y horario disponible y te envíen su solicitud directo a tu WhatsApp o correo con todos sus datos.",
  },
  {
    question:
      "¿Puedo pedir cambios o agregar promociones después de entregada?",
    answer:
      "Claro. Antes de publicar hacemos rondas de revisión para que quedes encantada con el resultado. Si más adelante necesitas actualizar precios, cambiar fotos o subir promociones del mes, cuento con planes de actualización accesibles.",
  },
];

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="preguntas-frecuentes"
      className="relative py-24 px-6 sm:px-12 bg-[#0b071a] overflow-hidden"
    >
      {/* Resplandores cinematográficos de fondo */}
      <div className="absolute top-1/4 -left-32 w-[450px] h-[450px] bg-[#4B1DA1] opacity-20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-[450px] h-[450px] bg-[#A11DA0] opacity-15 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Encabezado de la sección */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#761DA1]/40 bg-[#4B1DA1]/10 backdrop-blur-md">
            <Sparkles size={14} className="text-[#A11DA0]" />
            <span className="text-xs uppercase tracking-widest text-purple-300 font-semibold">
              Resolvemos tus dudas
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-light">
            Preguntas{" "}
            <span className="font-cursive text-[#A11DA0] text-4xl sm:text-6xl px-1">
              frecuentes
            </span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg font-light max-w-2xl mx-auto">
            Todo claro desde el principio. Aquí tienes las respuestas a las
            dudas más comunes antes de iniciar tu página web.
          </p>
        </div>

        {/* Lista de Acordeón */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 backdrop-blur-md overflow-hidden ${
                  isOpen
                    ? "bg-gradient-to-r from-[#4B1DA1]/25 via-slate-900/60 to-[#761DA1]/20 border-[#A11DA0]/60 shadow-[0_10px_30px_rgba(118,29,161,0.2)]"
                    : "bg-slate-900/40 border-white/10 hover:border-[#761DA1]/40"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base sm:text-lg font-medium transition-colors ${
                      isOpen ? "text-white" : "text-gray-200"
                    }`}
                  >
                    {item.question}
                  </span>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen
                        ? "bg-[#A11DA0] border-[#A11DA0] text-white rotate-180"
                        : "bg-white/5 border-white/15 text-purple-300"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 pt-1 text-gray-300 text-sm sm:text-base font-light leading-relaxed border-t border-white/5">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cierre / CTA directo si queda alguna duda */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#761DA1]/30 border border-[#761DA1]/50 flex items-center justify-center text-[#A11DA0] shrink-0">
              <MessageCircleQuestion size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                ¿Tienes otra pregunta sobre tu proyecto?
              </h3>
              <p className="text-sm text-gray-400 font-light">
                Escríbeme directo y te asesoro sin compromiso sobre cuál paquete
                te conviene más.
              </p>
            </div>
          </div>

          <a
            href="#contacto"
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-[#761DA1] to-[#4B1DA1] hover:shadow-[0_0_25px_rgba(161,29,160,0.5)] transition-all duration-300"
          >
            <span>Hacer una pregunta</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
