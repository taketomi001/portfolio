import { Link } from "react-router-dom";
import React from "react";

const Menu = ({ open, menuRef, closeMenu }) => {
  const handleLinkClick = () => {
    closeMenu(); // Ferme le menu après avoir cliqué sur un lien
  };
  return (
    <nav className={`menu ${open ? "open" : "!open"}`} ref={menuRef}>
      <ul onClick={handleLinkClick}>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
