import { del } from "../../assets/variables";
import Icons from "../../reusable/Icons";
import EliminarProducto from "../../services/EliminarProducto";

const ItemsCarrito = ({ item }) => {
  const { eliminarProductos } = EliminarProducto();
  return (
    <>
      <b>{item.title} </b>
      <b> Cantidad: {item.cantidad}</b>
      <i> $ {item.price * item.cantidad}</i>
      <button onClick={() => eliminarProductos(item.id)} className="eliminar">
        <Icons src={del} alt="button-delete-item"/> 
      </button>
    </>
  );
};

export default ItemsCarrito;
