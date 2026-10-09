import React, { useState, useEffect } from "react";
import { Images, Pause, Play } from "lucide-react";
import GalleryModal from "../GalleryModal/GalleryModal";
import "./CultureGallery.css";

//imágenes
import PicGallery1 from "../../images/gallery-1.avif";
import PicGallery2 from "../../images/gallery-2.avif";
import PicGallery3 from "../../images/gallery-3.avif";
import PicGallery4 from "../../images/gallery-4.avif";
import PicGallery5 from "../../images/gallery-5.avif";
import PicGallery6 from "../../images/gallery-6.avif";
import PicGallery7 from "../../images/gallery-7.avif";
import PicGallery8 from "../../images/gallery-8.avif";
import PicGallery9 from "../../images/gallery-9.avif";
import PicGallery10 from "../../images/gallery-10.avif";
import PicGallery11 from "../../images/gallery-11.avif";
import PicGallery12 from "../../images/gallery-12.avif";

export default function CultureGallery() {
  const allPhotos = [
    {
      id: 1,
      image: PicGallery1,
    },
    {
      id: 2,
      image: PicGallery2,
    },
    {
      id: 3,

      image: PicGallery3,
    },
    {
      id: 4,

      image: PicGallery4,
    },
    {
      id: 5,

      image: PicGallery5,
    },
    {
      id: 6,

      image: PicGallery6,
    },
    {
      id: 7,

      image: PicGallery7,
    },
    {
      id: 8,

      image: PicGallery8,
    },
    {
      id: 9,

      image: PicGallery9,
    },
    {
      id: 10,

      image: PicGallery10,
    },
    {
      id: 11,

      image: PicGallery11,
    },
    {
      id: 12,

      image: PicGallery12,
    },
  ];

  // 2. Solo las 3 primeras fotos para la animación en la landing
  const featuredPhotos = allPhotos.slice(0, 3);

  // Estados
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Transición suave cada 3.5 segundos
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredPhotos.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [featuredPhotos.length, isPaused]);

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <section className="culture" id="cultura">
      <div className="culture__container">
        <div className="culture__header">
          <span className="culture__tag">Visión & Filosofía</span>
          <h2 className="culture__title">El arte como proyecto de vida</h2>

          <blockquote className="culture__quote">
            "Tenemos el arte para no morir a causa de la verdad. Debemos hacer
            de la propia existencia una obra de arte, donde cada detalle
            cuente."
            <span className="culture__quote-author">— Friedrich Nietzsche</span>
          </blockquote>

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

        <div className="culture__slider-container">
          <div
            className={`culture-card-slider ${isPaused ? "culture-card-slider--paused" : ""}`}
            onClick={togglePause}
            title={
              isPaused
                ? "Hacer clic para reanudar la animación"
                : "Hacer clic para pausar la animación"
            }
          >
            <div className="culture-card-slider__image-container">
              <img
                key={currentIndex}
                src={featuredPhotos[currentIndex].image}
                className="culture-card-slider__image"
              />
              <div className="culture-card-slider__status-badge">
                {isPaused ? <Pause size={14} /> : <Play size={14} />}
                <span>{isPaused ? "Pausado" : "Auto"}</span>
              </div>
            </div>
          </div>

          {/* Indicadores de 3 Puntos */}
          <div className="culture-card-slider__dots">
            {featuredPhotos.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "dot--active" : ""}`}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsPaused(true);
                }}
              />
            ))}
          </div>
        </div>

        {/* Botón para abrir el Modal */}
        <div className="culture__footer">
          <button
            type="button"
            className="culture__link-all"
            onClick={() => setIsModalOpen(true)}
          >
            <Images size={18} />
            <span>Explorar Galería de Fotos Completa ({allPhotos.length})</span>
          </button>
        </div>
      </div>

      {/* COMPONENTE SEPARADO: Modal Flotante con las 12 Fotos */}
      <GalleryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        photos={allPhotos}
      />
    </section>
  );
}
