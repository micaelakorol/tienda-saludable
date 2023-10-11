import React from "react";
import { facebook, wsp, email, instagram } from "../../assets/variables";
import "../../styles/SvgRedes.css";
const RedesSociales = () => {
  return (
    <section className="redes">
      <img src={facebook} alt="facebook" />
      <img src={instagram} alt="instagram" />
      <img src={email} alt="email" />
      <img src={wsp} alt="whatsapp" />
    </section>
  );
};

export default RedesSociales;
