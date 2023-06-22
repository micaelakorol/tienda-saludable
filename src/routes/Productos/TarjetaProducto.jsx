import React, { useContext } from "react";
import { UserContext } from "../../context/Context";
import { Button, Badge } from "react-bootstrap";

const TarjetaProducto = ({ item }) => {
  const { agregarProducto } = useContext(UserContext);
  return (
    <ul key={item.id} className="tarjeta">
      <img src={item.image} alt={item.title} className="imgProducto" />
      <li className="descripcion-producto">
        <h4>{item.title} </h4>
        <p>{item.marca}</p>
        <Badge bg="success" className="badge">
          ${item.price}
        </Badge>
        <Button
          variant="warning"
          onClick={() =>
            agregarProducto(item.id, item.price, item.title, item.cantidad)
          }
        >
          Agregar al carrito
        </Button>
      </li>
    </ul>
  );
};

export default TarjetaProducto;
