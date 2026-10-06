import React from "react";
import { X } from "lucide-react";
import "./GalleryModal.css";

export default function GalleryModal({ isOpen, onClose, photos }) {
  // Si el modal no está abierto, no renderiza nada
  if (!isOpen) return null;

  return (
    <div className="gallery-modal" onClick={onClose}>
      <div
        className="gallery-modal__container"
        onClick={(e) =>
          e.stopPropagation()
        } /* Previene que al hacer clic dentro del modal se cierre */
      >
        <button
          type="button"
          className="gallery-modal__close"
          onClick={onClose}
          aria-label="Cerrar galería"
        >
          <X size={20} />
        </button>

        <h3 className="gallery-modal__title">Galería Fotográfica</h3>
        <p className="gallery-modal__subtitle">
          Un vistazo a la perspectiva visual y la exploración cultural que
          alimentan mi trabajo de diseño.
        </p>

        <div className="gallery-modal__grid">
          {photos.map((item) => (
            <div key={item.id} className="gallery-modal__item">
              <div className="gallery-modal__image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-modal__image"
                />
              </div>
              <div className="gallery-modal__info">
                <h4 className="gallery-modal__item-title">{item.title}</h4>
                <span className="gallery-modal__item-category">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
