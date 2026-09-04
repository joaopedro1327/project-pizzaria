// Header.jsx
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import logoMobile from "../assets/logo-mobile.png";
import StoreStatus from "./StoreStatus";
import "../css/Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // trava o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
      <div className="header-inner">
        {/* HAMBÚRGUER */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* LOGO — borda preta no mobile, original no desktop */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <picture>
            <source media="(max-width: 768px)" srcSet={logoMobile} />
            <img src={logo} alt="Logo Pizzaria Rafaela" />
          </picture>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="nav-desktop">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/menu">Cardápio</NavLink>
          <NavLink to="/delivery">Delivery</NavLink>
        </nav>
      </div>

      {/* STATUS ABERTO/FECHADO */}
      <StoreStatus />

      {/* MENU MOBILE (overlay) */}
      <nav className={`nav-mobile ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={closeMenu} end>Home</NavLink>
        <NavLink to="/menu" onClick={closeMenu}>Cardápio</NavLink>
        <NavLink to="/delivery" onClick={closeMenu}>Delivery</NavLink>
      </nav>
    </header>
  );
}
