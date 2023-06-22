import React from "react";
import { useContext } from "react";
import "../styles/Carrito.css";
import { UserContext } from "../context/Context";
import { Button } from "react-bootstrap";
import BtnEliminar from "./svg/BtnEliminar";

const Carrito = () => {
  const { carrito, setCarrito, totales, irAPagar } = useContext(UserContext);
  /* eliminar productos del carrito*/
  const eliminarProductos = (id) => {
    setCarrito((old) => old.filter((item) => item.id !== id));
  };
  return (
    <section className="carrito">
      <h2 className="titulo__carrito">Carrito de compras</h2>
      {carrito.length > 0 ? (
        carrito.map((item) => {
          const { cantidad, title, price, id } = item;
          return (
            <div key={id} className="productos">
              <b>{title} </b>
              <b> Cantidad: {item.cantidad}</b>
              <i> $ {price * cantidad}</i>
              <button
                onClick={() => eliminarProductos(item.id)}
                className="eliminar"
              >
                <BtnEliminar />
              </button>
            </div>
          );
        })
      ) : (
        <p>Aun no has agregado productos al carrito :( </p>
      )}
      <i className="compra-total">Total de Compra: $ {totales} </i>
      {totales > 1 && (
        <Button variant="light" onClick={() => irAPagar()}>
          <a href="https://shrtco.de/g87Vir" target="_blank" rel="noreferrer">
            {" "}
            Ir a Pagar{" "}
          </a>
        </Button>
      )}
    </section>
  );
};

export default Carrito;
