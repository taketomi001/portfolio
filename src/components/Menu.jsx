import { Link } from "react-router-dom";
import React from "react";

const Menu = ({ open, menuRef, closeMenu }) => {
  const handleLinkClick = () => {
    closeMenu(); 
  };
  return (<>
    <div className={`overlay1 ${open ? "open" : ""}`} onClick={handleLinkClick}
    ></div>
    <nav className={`menu ${open ? "open" : ""}`} ref={menuRef}>
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
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default Menu;
