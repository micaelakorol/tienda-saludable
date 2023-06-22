import React from "react";
import "../styles/Inicio.css";
import destacados from "../data1/destacados";
import { Badge } from "react-bootstrap";
import Footer from "../components/Footer";
import organizador from "../assets/organizador.png";

const PaginaPrincipal = () => {
  let productosDestacados = destacados.items;

  return (
    <main>
      {/* Imagen principal */}
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

      {/* Productos destacados de la ruta indice */}
      <article className="productos-destacados">
        <h1 className="destacados">Productos Destacados</h1>
        <section className="productos">
          {productosDestacados.map((item) => (
            <ul key={item.id} className="card">
              <img src={item.image} alt={item.titulo} className="imgProducto" />
              <h4>
                <Badge bg="warning" pill>
                  {item.descuento}%
                </Badge>{" "}
              </h4>{" "}
              <li>
                <p>{item.title}</p>
                <b>{item.marca}</b>
              </li>
            </ul>
          ))}
        </section>
      </article>
      <Footer />
    </main>
  );
};
export default PaginaPrincipal;
