import React, { useState } from "react";
import { useEffect } from "react";
import "../styles/Inicio.css";
import destacados from "../data1/destacados";
import { Badge, Card } from "react-bootstrap";
import Footer from "../components/Footer";

const PaginaPrincipal = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const producto = destacados;
    setProductos(producto.items);
  }, [productos]);

  return (
    <main>
      {/* Imagen principal */}
      <section className="img-principal">
        <img src={require("../assets/logo.png")} alt="Oferta burger veggie" />
      </section>

      {/* Productos destacados de la ruta indice */}
      <article className="productos-destacados">
        <h1 className="destacados">Productos Destacados</h1>
        <section className="productos">
          {productos.map((item) => (
            <Card key={item.id} className="card">
              <img src={item.image} alt={item.titulo} />
              <Card.Body>
                <Card.Title>
                  <h3>
                    <Badge bg="danger" pill>
                      {item.descuento}%
                    </Badge>{" "}
                  </h3>{" "}
                </Card.Title>
                <Card.Text>
                  <i>{item.title}</i>
                </Card.Text>
                <Card.Text>
                  <b>{item.marca}</b>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </section>
      </article>
      <Footer />
    </main>
  );
};
export default PaginaPrincipal;
