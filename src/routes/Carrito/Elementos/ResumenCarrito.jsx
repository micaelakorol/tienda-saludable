import React from 'react'
import EliminarProducto from '../../../services/EliminarProducto';
import { del } from '../../../assets/variables';
import Icons from '../../../reusable/Icons';

const ResumenCarrito = ({item}) => {
    const { eliminarProductos } = EliminarProducto();
    const {cantidad, nombre, precio} = item

    return (
      <>
        <b>{nombre} </b>
        <b> Cantidad: {cantidad}</b>
        <i> $ {precio * cantidad}</i>
        <button onClick={() => eliminarProductos(item.id)} className="eliminar">
          <Icons src={del} alt="boton-eliminar"/> 
        </button>
      </>
    );
  };

export default ResumenCarrito