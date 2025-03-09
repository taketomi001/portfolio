import "../css/header.css";
import { Link } from "react-router-dom";
import React from "react";

import Burger from "./Burger";
// import Menu from "./Menu";

import "../css/header.css";

const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <>
      <header>
        <h1>Currilum Vitae</h1>
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

        <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        {/* <Menu open={open} setOpen={setOpen} /> */}
      </div>

      </header>
    </>
  );
}
