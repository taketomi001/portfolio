import React, { useState, useRef, useEffect } from "react";
import Burger from "./Burger";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  // const menuRef = useRef();

  // Fonction pour fermer le menu si on clique à l'extérieur
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (menuRef.current && !menuRef.current.contains(event.target)) {
  //       setOpen(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header>
      <div>
        <h1>DYKHOUNPHYPHETH</h1>
        <h2>Charles-Eric</h2>
      </div>
      <nav>
        <menu>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/About-me">About me</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </menu>
      </nav>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} closeMenu={closeMenu} />
    </header>
  );
};

export default Header;
