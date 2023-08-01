import { useContext } from "react";
import { UserContext } from "../context/Context";

const EliminarProducto = () => {
  const { setCarrito } = useContext(UserContext);
  /* eliminar productos del carrito*/
  const eliminarProductos = (id) => {
    setCarrito((old) => old.filter((item) => item.id !== id));
  };
  return { eliminarProductos };
};

export default EliminarProducto;
