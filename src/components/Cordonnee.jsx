import IconePhone from "../assets/tel.png";
import IconeMail from "../assets/mail.png";
import GITHUB from "../assets/github.png";
import "../css/footer.css";
export default function Cordonnee() {
  return (
    <>
      <footer className="cordonnée">
        <div className="footer-content">
          <p>DYKHOUNPHYPHETH </p>
          <p>Charles-Eric</p>
          <address>Orléans</address>
        </div>

        <div className="footer-content">
          <div className="phone">
            <img src={IconePhone} alt="icone phone" className="icone" />
            <a href="tel:0628029684" className=""> 06.28.02.96.84</a>
          </div>
          <div className="mail">
            <img src={IconeMail} alt="icone mail" className="icone" />
            <a href="mailto:dykhounphypheth@gmail.com">
              dykhounphypheth@gmail.com
            </a>
          </div>
          <div className="github">
            <img src={GITHUB} alt="icone github" className="icone" />
            <a href="https://github.com/taketomi001">github.com/taketomi001</a>
          </div>
        </div>
      </footer>
    </>
  );
}
