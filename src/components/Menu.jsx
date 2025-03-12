import { Link } from "react-router-dom";
import React from "react";

const Menu = ({ open, menuRef, closeMenu }) => {
  const handleLinkClick = () => {
    closeMenu();
  };
  return (
    <>
      <div
        className={`overlay1 ${open ? "open" : ""}`}
        onClick={handleLinkClick}
      ></div>
      <nav className={`menu ${open ? "open" : ""}`} ref={menuRef}>
        <ul onClick={handleLinkClick}>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about-me">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
