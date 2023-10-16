/* eslint-disable no-undef */
import React, { useContext } from "react";
import "../../styles/Productos.css";
import data from "../../services/constants/productos";
import TarjetaProducto from "./Elementos/TarjetaProducto";
import InputBusqueda from "./Elementos/InputBusqueda";
import { UserContext } from "../../context/Context";
import { filterProductos } from "./Funciones/filtrarProducto";
import HandleValues from "./Funciones/handleChange";

const Productos = () => {
  const { searchParams, filter } = useContext(UserContext);
  const { handleChange } = HandleValues();
  const productos = data.items;

  return (
    <main>
      {/* Input de búsqueda */}
      <section className="contenedor-productos">
        <InputBusqueda
          searchParams={searchParams}
          handleChange={handleChange}
        />
      </section>

      {/* Sección de productos */}
      <article className="productos">
        {filterProductos(productos, filter).map((item) => (
          <React.Fragment key={item.id}>
            <TarjetaProducto item={item} />
          </React.Fragment>
        ))}
      </article>
    </main>
  );
};

export default Productos;
