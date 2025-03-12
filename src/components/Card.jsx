import { Objets } from "../objet/card.js";
import "../css/card.css";
const BASE_URL = import.meta.env.BASE_URL;
export default function Card() {
  return (
    <>
      <div>
        <h1>Liste des projets</h1>
        <div className="cartes-container">
          {Objets.map((objet) => (
            <div className="carte" key={objet.id}>
              <img src={`${objet.image}`} alt={objet.titre} />
              <div className="carte-content">
                <h2>{objet.titre}</h2>
                <p className="description">{objet.description}</p>
                <div>
                  <a href={objet.url} target="_blank">
                    Voir site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
