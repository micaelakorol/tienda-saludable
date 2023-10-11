import React from "react";
import { logoBrotes } from "../../assets/variables";
import "../../styles/Footer.css";
import RedesSociales from "./RedesSociales";
const Footer = () => {
  return (
    <footer>
      <section>
        <img src={logoBrotes} alt="logo" className="logoFooter" />
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
        <RedesSociales />
      </section>
    </footer>
  );
};

export default Footer;
