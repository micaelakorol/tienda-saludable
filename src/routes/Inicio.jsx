import React, { useState } from 'react'
import { useEffect } from 'react'
import '../styles/Inicio.css'
import destacados from '../data1/destacados'
import { Badge,Card } from 'react-bootstrap'
import Footer from '../components/Footer'
const Inicio = () => {

//destacados.js: = productos
  const [productos,setProductos] = useState([])
useEffect(() => {
const producto = destacados;
setProductos(producto.items)
},[productos])
  return (
    <>
    {/* Imagen principal */}
  <div className='img-principal'>
   <section>
    <img src={require('../img/logo.png')} alt="" />
      </section>
        </div>
{/* Productos destacados de la ruta indice */}
  <div className='productos-destacados'>
    <h1 className='destacados'>Productos Destacados</h1>  
      <div className='productos'>
        {productos.map((item)=> (
  <Card style={{ width: '18rem', textAlign:'center', padding:'1rem'}} key={item.id} className='card'>
    <img src={item.image} alt="" />
      <Card.Body>
         <Card.Title> <h3> <Badge bg="danger" pill>{item.descuento}%</Badge> </h3> </Card.Title>
           <Card.Text> <i>{item.title}</i></Card.Text>
           <Card.Text> <b>{item.marca}</b></Card.Text>
            </Card.Body>
               </Card>
   ))}
</div>  
</div>
<Footer/>
    </>
  )
}
export default Inicio