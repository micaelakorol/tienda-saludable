import React from "react";
import "../../styles/Inicio.css";
import destacados from "../../dataProducts/destacados";
import Footer from "../Footer/Footer";
import ImagenPresentacion from "./ImagenPresentacion";
import ProductosDestacados from "./ProductosDestacados";

const PaginaPrincipal = () => {
  let productosDestacados = destacados.items;

  return (
    <main>
      {/* Imagen principal y presentación */}
      <ImagenPresentacion />

      {/* Productos destacados de la ruta indice */}
      <article className="productos-destacados">
        <h1 className="destacados">Productos Destacados</h1>
        <section className="productos">
          {productosDestacados.map((item) => (
             <React.Fragment key={item.id}>
            <ProductosDestacados item={item}/>
            </React.Fragment>
          ))}
        </section>
      </article>
      <Footer />
    </main>
  );
};
export default PaginaPrincipal;
