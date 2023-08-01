import BtnEliminar from "../../components/svg/BtnEliminar";
import EliminarProducto from "../../services/EliminarProducto";

const ItemsCarrito = ({ item }) => {
  const { eliminarProductos } = EliminarProducto();
  return (
    <>
      <b>{item.title} </b>
      <b> Cantidad: {item.cantidad}</b>
      <i> $ {item.price * item.cantidad}</i>
      <button onClick={() => eliminarProductos(item.id)} className="eliminar">
        <BtnEliminar />
      </button>
    </>
  );
};

export default ItemsCarrito;
