import React from "react";
import { MessageCircle } from "lucide-react";
import "./whatsAppButton.css";

export default function WhatsAppButton() {
  // Reemplaza por tu número de teléfono con código de país (ej. México +52)
  const phoneNumber = "3327825329";
  const defaultMessage =
    "Hola Noemí, me interesa cotizar una página web para mi proyecto.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage,
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <span className="whatsapp-float__tooltip">¿Hablamos de tu proyecto?</span>
      <div className="whatsapp-float__icon">
        <MessageCircle size={28} />
      </div>
    </a>
  );
}
