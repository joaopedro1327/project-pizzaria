import "../css/Footer.css";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import jpxFooter from "../assets/jplz-footer.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">

        <div className="footer-main">

          <div className="footer-column">
            <h5>Social</h5>
            <div className="footer-icons">
              <a
                href="https://www.instagram.com/rafaela_pizzaria/"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/12996090978"
                aria-label="WhatsApp"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h5>Atendimento</h5>
            <div className="footer-info">
              <FaClock />
              <span>
                Quarta a Domingo<br />
                19h às 23h
              </span>
            </div>
          </div>

          <div className="footer-column">
            <h5>Localização</h5>
            <div className="footer-info">
              <FaMapMarkerAlt />
              <span>
                Av. Ministro Nelson Hungria, 62<br />
                Santo Antônio do Pinhal
              </span>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <a
            href="https://www.instagram.com/jplzdev/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={jpxFooter}
              alt="JPX Tech"
              className="footer-logo"
            />
          </a>
          <span>© 2026 • Desenvolvido por JPLZ DEVELOPMENT</span>
        </div>

      </div>
    </footer>
  );
}
