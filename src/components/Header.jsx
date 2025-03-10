import React, { useState, useRef, useEffect } from "react";
import Burger from "./Burger";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // Fonction pour fermer le menu si on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Fonction pour fermer le menu
  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header>
      <h1>Curriculum Vitae</h1>
      <nav>
        <menu>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/About-me">About me</Link>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
        </menu>
      </nav>
      <Burger open={open} setOpen={setOpen} />
      {/* Passer la fonction closeMenu à Menu */}
      <Menu open={open} menuRef={menuRef} closeMenu={closeMenu} />
    </header>
  );
};

export default Header;
