import {Objets} from '../objet/card.js'
import '../css/card.css'
export default function Card(){

return(<>
<div>
      <h1>Liste de Cartes</h1>
       <div className="cartes-container">
        {Objets.map((objet, index) => (
          <div className="carte">
      <img src={objet.image} alt={objet.titre} />
      <div className="carte-content">
        <h2>{objet.titre}</h2>
        <p className='description'>{objet.description}</p>
        <a href={objet.url} target="_blank" rel="noopener noreferrer">Voir site</a>
      </div>
    </div>
        ))}
      </div>
    </div> 
</>)
}