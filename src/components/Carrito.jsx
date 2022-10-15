import React from 'react'
import { useContext } from 'react'
import '../styles/Carrito.css'
import { UserContext } from '../context/Context'
import { Button } from 'react-bootstrap'

const Carrito = () => {

  const {carrito,setCarrito,totales,irAPagar} = useContext(UserContext)
  /* eliminar productos del carrito*/
    const eliminarProductos = (id) => {
        setCarrito((old) => old.filter(item => item.id !== id))
    }
  return (
  <div className='contenedor-carrito' role='listitem'>
    <section className='carrito'>
      <h2 className='titulo__carrito'>Carrito de compras</h2>
        {carrito.length > 0 ?
				  carrito.map((item) => {
           const {cantidad,title,price} = item
				      return(
						    <div key={item.id} className='productos'>
						      <b>{title} </b>                           
					          	<b>	Cantidad: {item.cantidad}</b>
                         {/* Precio:<b> $ {item.price} </b> */}  
                         <i> $ {price * cantidad}</i> 
                            <button onClick={()=> eliminarProductos(item.id)} className='eliminar'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></button>
</div>
					);
				})
			:
				<p>Aun no has agregado productos al carrito :( </p>
			}   <i className='compra-total'>Total de Compra: $ {totales} </i> 
            <Button variant="light" onClick={() => irAPagar()}>Ir a Pagar</Button>
              </section>
               </div>
  )
}

export default Carrito
