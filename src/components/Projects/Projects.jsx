import React from "react";
import { ExternalLink, Globe } from "lucide-react";
import CinemaPic from "../../images/cinema3-pic.avif";
import WorldPic from "../../images/mundo3-pic.avif";
import SaludPic from "../../images/salud1-pic.avif";
import "./Projects.css";

export default function Projects() {
  const projectsList = [
    {
      id: 1,
      title: "Luminart Cinema",
      description:
        "Plataforma web de cine de autor con catálogo dinámico, interfaz interactiva y diseño centrado en la experiencia de usuario.",
      tags: ["React", "JavaScript", "CSS Modules", "REST API"],
      image: CinemaPic,
      liveUrl: "https://noemivaldiviagdl.github.io/luminart_cinema_frontend",
      githubLink:
        "https://github.com/NoemiValdiviaGDL/luminart_cinema_frontend.git",
      demoLink: "https://luminart-demo.com",
    },
    {
      id: 2,
      title: "Around The U.S.",
      description:
        "Aplicación web interactiva que permite a los usuarios compartir fotos, personalizar su perfil y gestionar tarjetas dinámicas mediante API.",
      tags: ["JavaScript", "HTML5", "CSS3", "Webpack"],
      image: WorldPic,
      githubLink: "https://github.com/tu-usuario/around-us",
      demoLink: "https://around-us-demo.com",
    },
    {
      id: 3,
      title: "Landing Sector Salud",
      description:
        "Landing personalizada y diseñada para incrementar las ventas y consultas de integrantes del sector salud.",
      tags: ["JavaScript", "HTML5", "CSS3", "Webpack"],
      image: SaludPic,
      liveUrl: "https://noemivaldiviagdl.github.io/salud-landing",
      githubLink: "https://github.com/NoemiValdiviaGDL/salud-landing.git",
      demoLink: "https://around-us-demo.com",
    },
  ];

  return (
    <section className="projects" id="proyectos">
      <div className="projects__container">
        <div className="projects__header">
          <span className="projects__tag">Proyectos Destacados</span>
          <h2 className="projects__title">Trabajos Web</h2>
          <p className="projects__subtitle">
            Haz clic en <strong>"Ver Sitio Web"</strong> para explorar la
            versión interactiva en vivo de cada proyecto.
          </p>
        </div>

        <div className="projects__grid">
          {projectsList.map((project) => (
            <article key={project.id} className="project-card">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__image-container"
              >
                <img
                  src={project.image}
                  alt={`Vista previa de ${project.title}`}
                  className="project-card__image"
                />
              </a>

              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">
                  {project.description}
                </p>

                <ul className="project-card__tags">
                  {project.tags.map((tag, index) => (
                    <li key={index} className="project-card__tag">
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="project-card__links">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-project btn-project--live"
                    >
                      <Globe size={16} />
                      <span>Ver Sitio Web</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
