import "./Contact.css";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const phone = "+3327825329";
  const email = "baldiviablancanoemi@gmail.com";
  const location = "Guadalajara, Jalisco, México";

  return (
    <section className="contact" id="contacto">
      <div className="contact__container">
        {/* Encabezado */}
        <div className="contact__header">
          <span className="contact__tag">Contacto Directo</span>
          <h2 className="contact__title">Iniciemos tu proyecto</h2>
          <p className="contact__subtitle">
            Ponte en contacto directamente conmigo para cotizaciones o consultas
            sobre desarrollo web y diseño.
          </p>
        </div>

        <div className="contact__direct-grid">
          <a
            href={`https://wa.me/${phone.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-card__icon">
              <Phone size={22} />
            </div>
            <div>
              <span className="contact-card__label">Teléfono / WhatsApp</span>
              <span className="contact-card__value">{phone}</span>
            </div>
          </a>
          <a href={`mailto:${email}`} className="contact-card">
            <div className="contact-card__icon">
              <Mail size={22} />
            </div>
            <div>
              <span className="contact-card__label">Correo Electrónico</span>
              <span className="contact-card__value">{email}</span>
            </div>
          </a>
          <div className="contact-card">
            <div className="contact-card__icon">
              <MapPin size={22} />
            </div>
            <div>
              <span className="contact-card__label">Ubicación</span>
              <span className="contact-card__value">{location}</span>
            </div>
          </div>
        </div>
        <div className="contact__socials-discrete">
          <a
            href="https://www.facebook.com/share/1Lr8qVatQv/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link-subtle"
          >
            Facebook
          </a>
          <span style={{ color: "var(--border-color)" }}>•</span>
          <a
            href="https://www.instagram.com/paloma_negra_fotografia?cplk=Y2hvOGxueHR4c2hr"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link-subtle"
          >
            Instagram
          </a>
        </div>
        <footer className="contact__footer">
          <p>
            © {new Date().getFullYear()} Noemí Studio. Todos los derechos
            reservados.
          </p>
        </footer>
      </div>
    </section>
  );
}
