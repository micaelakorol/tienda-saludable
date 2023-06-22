/* eslint-disable no-undef */
import React from "react";
import "../../styles/Productos.css";
import data from "../../dataProducts/data";
import { useSearchParams } from "react-router-dom";
import InputBusqueda from "./InputBusqueda";
import TarjetaProducto from "./TarjetaProducto";

const Productos = () => {
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
        <InputBusqueda
          searchParams={searchParams}
          handleChange={handleChange}
        />
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
            <React.Fragment key={item.id}>
            <TarjetaProducto item={item}/>
           </React.Fragment> 
          ))}
          
      </article>
    </main>
  );
};

export default Productos;
