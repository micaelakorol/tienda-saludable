import React from "react";
import logo from "../assets/logow.png";
import "../styles/Footer.css";
import Redes from "./svg/Redes";
const Footer = () => {
  return (
    <footer>
      <section>
        <img src={logo} alt="logo" className="logoFooter" />
      </section>

      <section>
        <p>Trabajá con Nosotros</p>
        <p>Quienes Somos</p>
        <p>Formas de Pago</p>
      </section>

      <section>
        <p>Términos y condiciones</p>
        <p>Preguntas Frecuentes</p>
        <p>Ayuda</p>
      </section>

      <section>
        <p>Contacto</p>
        <Redes />
      </section>
    </footer>
  );
};

export default Footer;
