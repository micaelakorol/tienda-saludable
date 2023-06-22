import React from "react";
import organizador from "../../assets/organizador.png";

const ImagenPresentacion = () => {
  return (
    <section className="img-principal">
      <img
        src="https://i.ibb.co/dLwybvV/promocion.png"
        alt="Oferta burger veggie"
      />

      <p className="organizador">
        <a
          href={organizador}
          download="Organizador-Semanal"
          className="organizador"
        >
          {" "}
          ¡Descarga gratis nuestro organizador semanal!{" "}
        </a>
      </p>
    </section>
  );
};

export default ImagenPresentacion;
