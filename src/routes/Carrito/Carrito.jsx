import { useContext } from "react";
import "../../styles/Carrito.css";
import { UserContext } from "../../context/Context";
import TotalCompra from "./Elementos/TotalCompra";
import ResumenCarrito from "./Elementos/ResumenCarrito";

const Carrito = () => {
  const { carrito } = useContext(UserContext);

  return (
    <section className="carrito">
      <h2 className="titulo__carrito">Carrito de compras</h2>
      {carrito.length > 0 ? (
        carrito.map((item) => {
          return (
            <div key={item.id} className="productos_carrito">
              <ResumenCarrito item={item} />
            </div>
          );
        })
      ) : (
        <p>Aun no has agregado productos al carrito :( </p>
      )}
      <TotalCompra />
    </section>
  );
};

export default Carrito;
