/* eslint-disable no-undef */
import React from 'react'
import '../styles/Productos.css'
import data from '../data1/data'
import { useState } from 'react'
import { useEffect } from 'react'
import {Card,Button,Badge} from 'react-bootstrap'
import { useContext } from 'react'
import { UserContext } from '../context/Context'
import { useSearchParams } from 'react-router-dom'

const Productos = () => {
const {agregarProducto} = useContext(UserContext)
//state = contiene los productos
const [state,setState] = useState([])
let [searchParams, setSearchParams] = useSearchParams()

  const handleChange = e => {
    let filter = e.target.value; 
      if(filter){
        setSearchParams({filter})
}
        else{
        setSearchParams({})
}}

useEffect(() => {
  const producto = data;
  setState(producto.items)
  },[state])

  return (
  <main>  
{/* Input de busqueda */}
<section className='contenedor-header' role='search'>
  <form action="">
    <input type="text" placeholder='Qué estás buscando?' value={searchParams.get('filter') || ""}
        onChange={handleChange} /> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
         </form>
           </section>
{/* Seccion de productos */}
<div className='productos'>
{
state.filter((items) => {
  let filter = searchParams.get('filter')
   if(!filter){
     return true
   }
    let title = items.title.toLowerCase()
     return title.startsWith(filter.toLowerCase())
      })
.map((item) => (
  <Card style={{ width: '18rem', textAlign:'center', padding:'.5rem'}} key={item.id} className='card'>
      <img src={item.image} alt="" />
       <Card.Body>
         <Card.Title>{item.title}  <i>{item.marca}</i> </Card.Title>
          <Card.Text>
           <Badge bg="success">${item.price}</Badge>
            </Card.Text>
             <Button variant="warning" onClick={() => agregarProducto(item.id, item.price,item.title,item.cantidad)}>Agregar al carrito</Button>
              </Card.Body>
                </Card>
  ))
}
</div>
</main>
  )
}

export default Productos