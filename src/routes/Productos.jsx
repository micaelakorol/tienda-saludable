/* eslint-disable no-undef */
import React from "react";
import "../styles/Productos.css";
import data from "../data1/data";
import { useState } from "react";
import { useEffect } from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../context/Context";
import { useSearchParams } from "react-router-dom";
import LupaInput from "../components/svg/LupaInput";

const Productos = () => {
  const { agregarProducto } = useContext(UserContext);
  //state = contiene los productos
  const [state, setState] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    let filter = e.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };

  useEffect(() => {
    const producto = data;
    setState(producto.items);
  }, [state]);

  return (
    <main>
      {/* Input de busqueda */}
      <section className="contenedor-productos">
        <form action="" method="post">
          <input
            type="text"
            placeholder="¿Qué estás buscando?"
            value={searchParams.get("filter") || ""}
            onChange={handleChange}
          />
          <LupaInput />
        </form>
      </section>

      {/* Seccion de productos */}
      <article className="productos">
        {state
          .filter((items) => {
            let filter = searchParams.get("filter");
            if (!filter) {
              return true;
            }
            let title = items.title.toLowerCase();
            return title.startsWith(filter.toLowerCase());
          })
          .map((item) => (
            <Card
              key={item.id}
              className="card cardProdutos"
            >
              <img src={item.image} alt={item.title} />
              <Card.Body>
                <Card.Title>{item.title} </Card.Title>
                <Card.Title>
                  {" "}
                  <b>{item.marca}</b>{" "}
                </Card.Title>
                <Card.Text>
                  <Badge bg="success">${item.price}</Badge>
                </Card.Text>
                <Button
                  variant="warning"
                  onClick={() =>
                    agregarProducto(
                      item.id,
                      item.price,
                      item.title,
                      item.cantidad
                    )
                  }
                >
                  Agregar al carrito
                </Button>
              </Card.Body>
            </Card>
          ))}
      </article>
    </main>
  );
};

export default Productos;
