import  { useContext } from 'react'
import { UserContext } from '../context/Context';

const useAñadirProducto  = () => {
    const {carrito, setCarrito} = useContext(UserContext)
    const agregarProducto = (idProducto, price, title) => {
        const productoExistente = carrito.find((productoCarrito) => productoCarrito.id === idProducto);
        if (productoExistente) {
          setCarrito((prevCarrito) =>
            prevCarrito.map((productoCarrito) =>
              productoCarrito.id === idProducto
                ? {
                    ...productoCarrito,
                    cantidad: productoCarrito.cantidad + 1,
                    total: (productoCarrito.cantidad + 1) * price,
                  }
                : productoCarrito
            )
          );
        } else {
          setCarrito((prevCarrito) => [
            ...prevCarrito,
            {
              id: idProducto,
              title: title,
              cantidad: 1,
              price: price,
              total: price * 1,
            },
          ]);
        }
      };
   return{agregarProducto}   
}


export default useAñadirProducto 