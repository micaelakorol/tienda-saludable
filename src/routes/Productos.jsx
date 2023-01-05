/* eslint-disable no-undef */
import React from "react";
import "../styles/Productos.css";
import data from "../data1/data";
import { Button, Badge } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../context/Context";
import { useSearchParams } from "react-router-dom";
import LupaInput from "../components/svg/LupaInput";

const Productos = () => {
  const { agregarProducto } = useContext(UserContext);

  let [searchParams, setSearchParams] = useSearchParams();
  let productos = data.items;
  const handleChange = (e) => {
    let filter = e.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };

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
        {productos
          .filter((items) => {
            let filter = searchParams.get("filter");
            if (!filter) {
              return true;
            }
            let title = items.title.toLowerCase();
            return title.startsWith(filter.toLowerCase());
          })
          .map((item) => (
            <ul key={item.id} className="card cardProductos">
              <img src={item.image} alt={item.title} className="imgProducto" />
              <li className="descripcion-producto">
                <h4>{item.title} </h4>
                  <p>{item.marca}</p>
                  <Badge bg="success" className="badge">${item.price}</Badge>
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
              </li>
            </ul>
          ))}
      </article>
    </main>
  );
};

export default Productos;
