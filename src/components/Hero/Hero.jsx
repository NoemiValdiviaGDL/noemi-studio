import React from "react";
import { Sparkles, ArrowUpRight, Code2 } from "lucide-react";
import "./Hero.css";
import PerfilPic from "../../images/perfil1.avif";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__badge">
            <Sparkles size={14} />
            <span>Desarrollo Web & Dirección Visual</span>
          </div>

          <h1 className="hero__title">
            Creando experiencias digitales{" "}
            <span className="hero__title-highlight">
              con sensibilidad artística
            </span>{" "}
            & criterio técnico.
          </h1>

          <div className="hero__media">
            <div className="hero__image-wrapper">
              <img
                src={PerfilPic}
                alt="Fotografía de Noemí"
                className="hero__image"
              />
            </div>
          </div>
          <p className="hero__description">
            Soy Noemí Valdivia, desarrolladora Web y fotografa de profesion. Me
            gusta combinar la ingeniería de software con la fotografía y la
            exploración cultural para construir landings y aplicaciones que
            cautivan y solucionan problemas de manera creativa y profesional.
          </p>

          <div className="hero__actions">
            <a href="#contacto" className="btn btn--primary">
              <span>Iniciar Proyecto</span>
              <ArrowUpRight size={18} />
            </a>
            <a href="#proyectos" className="btn btn--secondary">
              <Code2 size={18} />
              <span>Ver Trabajos</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
