import React from "react";
import { Badge } from "react-bootstrap";

const ProductosDestacados = ({ item }) => {
  return (
    <ul key={item.id} className="tarjeta">
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
  );
};

export default ProductosDestacados;
