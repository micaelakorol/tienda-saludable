import { useContext } from "react";
import { UserContext } from "../context/Context";

const useAñadirProducto = () => {
  const { carrito, setCarrito } = useContext(UserContext);
  const agregarProducto = (idProducto, precio, nombre) => {
    const productoExistente = carrito.find(
      (productoCarrito) => productoCarrito.id === idProducto
    );
    if (productoExistente) {
      setCarrito((prevCarrito) =>
        prevCarrito.map((productoCarrito) =>
          productoCarrito.id === idProducto
            ? {
                ...productoCarrito,
                cantidad: productoCarrito.cantidad + 1,
                total: (productoCarrito.cantidad + 1) * precio,
              }
            : productoCarrito
        )
      );
    } else {
      setCarrito((prevCarrito) => [
        ...prevCarrito,
        {
          id: idProducto,
          nombre: nombre,
          cantidad: 1,
          precio: precio,
          total: precio * 1,
        },
      ]);
    }
  };
  return { agregarProducto };
};

export default useAñadirProducto;
