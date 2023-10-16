import React from "react";
import { Button, Badge } from "react-bootstrap";
import AñadirProducto from "../../../services/AñadirProducto";

const TarjetaProducto = ({ item }) => {
  const { agregarProducto } = AñadirProducto();
  return (
    <ul key={item.id} className="tarjeta">
      <img src={item.imagen} alt={item.nombre} className="imgProducto" />
      <li className="descripcion-producto">
        <h4>{item.nombre} </h4>
        <p>{item.marca}</p>
        <Badge bg="success" className="badge">
          ${item.precio}
        </Badge>
        <Button
          variant="warning"
          onClick={() =>
            agregarProducto(item.id, item.precio, item.nombre, item.cantidad)
          }
        >
          Agregar al carrito
        </Button>
      </li>
    </ul>
  );
};

export default TarjetaProducto;
