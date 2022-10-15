import React from 'react'
import { useContext } from 'react'
import { Badge } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../context/Context'
import '../styles/Nav.css'

const Nav = () => {
const {sumar} = useContext(UserContext)

  return (
<div className='contenedor-nav' role='navigation'>
  <nav className='nav'>
    <NavLink to={'/'}>Inicio</NavLink>
      <NavLink to={'/productos'}>Productos</NavLink>
        <NavLink to={'#'}>Cosmética</NavLink>
          <NavLink to={'#'}>Ingresá</NavLink>
            <NavLink to={'#'}>Creá tu cuenta</NavLink>
              <NavLink to={'/carrito'}> 
                <h6><Badge bg="success" pill>{sumar}</Badge></h6>
<button className='svg-button'>
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="40" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
   <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
     </svg>
      </button>
        </NavLink>
          </nav>
            </div>
  )
}

export default Nav