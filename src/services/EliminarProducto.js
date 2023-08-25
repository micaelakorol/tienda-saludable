import { useContext } from "react";
import { UserContext } from "../context/Context";

const EliminarProducto = () => {
  const { setCarrito } = useContext(UserContext);
  const eliminarProductos = (id) => {
    setCarrito((old) => old.filter((item) => item.id !== id));
  };
  return { eliminarProductos };
};

export default EliminarProducto;
