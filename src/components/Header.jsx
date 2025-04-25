import  { useState,} from "react";
import Burger from "./Burger";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header>
      <div className="title">
        <h1>DYKHOUNPHYPHETH</h1>
        <h2>Charles-Eric</h2>
      </div>
      <nav>
        <menu>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/cv">CV</Link>
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
