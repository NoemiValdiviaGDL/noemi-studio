import React, { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "./Navbar.css";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
        <a href="#" className="navbar__logo">
          Noemí<span className="navbar__logo-accent">.studio</span>
        </a>

        {/* Botón Hamburguesa en Móvil */}
        <button
          className="navbar__toggle"
          onClick={toggleMenu}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Lista de enlaces */}
        <nav>
          <ul
            className={`navbar__links ${isOpen ? "navbar__links--open" : ""}`}
          >
            <li>
              <a href="#proyectos" className="navbar__link" onClick={closeMenu}>
                Proyectos Web
              </a>
            </li>
            <li>
              <a href="#paquetes" className="navbar__link">
                Paquetes
              </a>
            </li>
            <li>
              <a href="#cultura" className="navbar__link" onClick={closeMenu}>
                Fotografía & Cultura
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="navbar__link navbar__link--highlight"
                onClick={closeMenu}
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        {/* Botón CTA (Visible solo en Desktop) */}
        <a href="#contacto" className="navbar__cta">
          <span>Hablemos</span>
          <ArrowUpRight size={14} />
        </a>
      </div>
    </header>
  );
}
