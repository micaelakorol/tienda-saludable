import { useContext } from "react";
import { UserContext } from "../context/Context";

const SumarProductos = () => {
  const { carrito } = useContext(UserContext);
  // Va sumando los elementos que se van añadiendo al carrito:
  const sumaProducto = carrito
    .map((item) => item.cantidad)
    .reduce((prev, curr) => prev + curr, 0);
  const totales = carrito
    .map((item) => item.total)
    .reduce((prev, curr) => prev + curr, 0);
  return { sumaProducto,totales };
};

export default SumarProductos;
