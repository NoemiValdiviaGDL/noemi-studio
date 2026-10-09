import React from "react";
import "./Packages.css";
import {
  MessageSquare,
  Calendar,
  CreditCard,
  Check,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

export default function Packages() {
  const packagesList = [
    {
      id: "basico",
      name: "Landing Básica",
      icon: <MessageSquare size={22} />,
      popular: false,
      badge: "",
      description:
        "Ideal para profesionales o negocios que buscan presencia digital inmediata y captación directa por WhatsApp.",
      features: [
        "Diseño 100% Mobile-First y personalizado",
        "Sección Hero, Proyectos/Servicios y Sobre Mí",
        "Botón Flotante a WhatsApp directo",
        "Optimización de carga ultra rápida (Vite + React)",
        "Integración de Google Maps, Reseñas y Redes Sociales",
      ],
      demoUrl: "https://noemivaldiviagdl.github.io/salud-landing", // Reemplaza por tu enlace de demostración
      whatsappMsg:
        "Hola Noemí, me interesa obtener información sobre el paquete Landing Básica.",
    },
    {
      id: "pro",
      name: "Landing Pro + Citas",
      icon: <Calendar size={22} />,
      popular: true,
      badge: "Más Solicitado",
      description:
        "Perfecta para consultores, profesionales de salud o servicios que necesitan automatizar su agenda.",
      features: [
        "Todo lo incluido en el Plan Básico",
        "Formulario interactivo de captura de datos",
        "Sistema de agendamiento de citas en línea",
        "Integración con Email o Google Calendar",
        "Estructura orientada a alta conversión (sistema de ventas Funnel)",
      ],
      demoUrl: "https://noemivaldiviagdl.github.io/around-us", // Reemplaza por tu enlace de demostración
      whatsappMsg:
        "Hola Noemí, quiero cotizar la Landing Pro con sistema de agendamiento de citas.",
    },
    {
      id: "plus",
      name: "Landing Plus + Pagos",
      icon: <CreditCard size={22} />,
      popular: false,
      badge: "",
      description:
        "Solución completa e-commerce para vender productos o cobrar servicios directamente desde tu web.",
      features: [
        "Todo lo incluido en el Plan Pro",
        "Pasarela de pagos (Stripe, PayPal o MercadoPago)",
        "Catálogo de productos o servicios interactivo",
        "Notificaciones automáticas de confirmación",
        "Dominio, hosting y configuración inicial de pagos",
      ],
      demoUrl: "https://noemivaldiviagdl.github.io/luminart_cinema_frontend", // Reemplaza por tu enlace
      whatsappMsg:
        "Hola Noemí, me interesa la Landing Plus con pasarela de pagos integrada.",
    },
  ];

  // Número de WhatsApp formateado para los enlaces
  const whatsappPhone = "3327825329"; // Reemplaza por tu número real de WhatsApp

  return (
    <section className="packages" id="paquetes">
      <div className="packages__container">
        {/* Encabezado */}
        <div className="packages__header">
          <span className="packages__tag">Soluciones Web</span>
          <h2 className="packages__title">Paquetes de Desarrollo</h2>
          <p className="packages__subtitle">
            Planes diseñados a la medida para potenciar tu marca personal o
            negocio con tecnología moderna y diseño de alto impacto.
          </p>
        </div>

        {/* Grilla de Paquetes */}
        <div className="packages__grid">
          {packagesList.map((pkg) => (
            <article
              key={pkg.id}
              className={`package-card ${pkg.popular ? "package-card--popular" : ""}`}
            >
              {pkg.popular && (
                <span className="package-card__badge">{pkg.badge}</span>
              )}

              <div className="package-card__header">
                <div className="package-card__icon-wrapper">{pkg.icon}</div>
                <h3 className="package-card__name">{pkg.name}</h3>
                <p className="package-card__desc">{pkg.description}</p>
              </div>

              <ul className="package-card__features">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="package-card__feature">
                    <Check size={16} className="package-card__feature-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="package-card__actions">
                {pkg.demoUrl && (
                  <a
                    href={pkg.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-package btn-package--secondary"
                  >
                    <span>Ver Ejemplo en Vivo</span>
                    <ExternalLink size={14} />
                  </a>
                )}
                <a
                  href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent(pkg.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-package btn-package--primary"
                >
                  <span>Solicitar Paquete</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
