import React from "react";
import facebook from "../../assets/icon-facebook.svg";
import instagram from "../../assets/icon-instagram.svg";
import envelope from "../../assets/envelope.svg";
import whatsapp from "../../assets/whatsapp.svg";
import "../../styles/SvgRedes.css";
const Redes = () => {
  return (
    <section className="redes">
      <img src={facebook} alt="facebook" />
      <img src={instagram} alt="instagram" />
      <img src={envelope} alt="email" />
      <img src={whatsapp} alt="whatsapp" />
    </section>
  );
};

export default Redes;
