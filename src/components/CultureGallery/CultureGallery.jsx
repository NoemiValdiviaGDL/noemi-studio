import React, { useState, useEffect } from "react";
import { Camera, ExternalLink, Sparkles } from "lucide-react";
import CinemaPic from "../../images/cinema3-pic.avif"; // Utiliza tus imágenes de la galería aquí
import "./CultureGallery.css";
import PicGallery1 from "../../images/gallery-1.avif";
import PicGallery2 from "../../images/gallery-2.avif";
import PicGallery3 from "../../images/gallery-3.avif";

export default function CultureGallery() {
  const photos = [
    {
      id: 1,
      title: "Composición & Perspectiva",
      category: "Fotografía Editorial",
      image: PicGallery1,
    },
    {
      id: 2,
      title: "Geometría Urbana",
      category: "Exploración Cultural",
      image: PicGallery2,
    },
    {
      id: 3,
      title: "Luz & Sombra",
      category: "Dirección Visual",
      image: PicGallery3,
    },
  ];

  // Estado para la transición automática de imágenes en móvil (cada 3 segundos)
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000); // 3000ms = 3 segundos

    return () => clearInterval(timer); // Limpieza al desmontar
  }, [photos.length]);

  return (
    <section className="culture" id="cultura">
      <div className="culture__container">
        {/* Encabezado Editorial */}
        <div className="culture__header">
          <span className="culture__tag">Visión & Filosofía</span>
          <h2 className="culture__title">El arte como proyecto de vida</h2>

          {/* Cita Filosófica */}
          <blockquote className="culture__quote">
            "Tenemos el arte para no morir a causa de la verdad. Debemos hacer
            de la propia existencia una obra de arte, donde cada detalle
            cuente."
            <span className="culture__quote-author">— Friedrich Nietzsche</span>
          </blockquote>

          {/* Texto Persuasivo */}
          <div className="culture__text">
            <p style={{ marginBottom: "1rem" }}>
              El arte no es un pasatiempo aislado; es un estándar con el que
              decido abordar todo lo que construyo. Cuando nos entregamos a un
              proyecto con el rigor, la pasión y el ojo de un artista, el
              resultado trasciende lo ordinario.
            </p>
            <p>
              En el desarrollo web, aplicar esta sensibilidad estética hace toda
              la diferencia.{" "}
              <span className="culture__text-highlight">
                Una página web hermosa, cuidada y con una narrativa visual
                envolvente no solo comunica: cautiva, genera confianza inmediata
                y convierte a los visitantes en clientes leales.
              </span>{" "}
              Tu presencia digital es la primera galería donde el mundo aprecia
              el valor de tu trabajo.
            </p>
          </div>
        </div>

        {/* GALERÍA MÓVIL (Tarjeta única con transición cada 3 segundos) */}
        <div className="culture__slider-mobile">
          <div className="culture-card-slider">
            <div className="culture-card-slider__image-container">
              <img
                src={photos[currentIndex].image}
                alt={photos[currentIndex].title}
                className="culture-card-slider__image"
              />
            </div>
            <div className="culture-card-slider__content">
              <h3 className="culture-card-slider__title">
                {photos[currentIndex].title}
              </h3>
              <p className="culture-card-slider__caption">
                {photos[currentIndex].category}
              </p>
            </div>
          </div>

          {/* Indicadores de puntos */}
          <div className="culture-card-slider__dots">
            {photos.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "dot--active" : ""}`}
              />
            ))}
          </div>
        </div>

        {/* GALERÍA DESKTOP (Grid de 3 columnas) */}
        <div className="culture__grid-desktop">
          {photos.map((photo) => (
            <article key={photo.id} className="culture-card">
              <div className="culture-card__image-container">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="culture-card__image"
                />
              </div>
              <div className="culture-card__content">
                <h3 className="culture-card__title">{photo.title}</h3>
                <p className="culture-card__subtitle">{photo.category}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Botón para ver la galería/colección completa */}
        <div className="culture__footer">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="culture__link-all"
          >
            <Camera size={18} />
            <span>Explorar Galería de Fotos Completa</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
