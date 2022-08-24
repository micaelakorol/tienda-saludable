import React from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/Footer.css'
const Footer = () => {
  return (
    <div className='container-footer'>
     <footer>
    
<NavLink to={'/#'}>Trabajá con Nosotros</NavLink>
<NavLink to={'/#'}>Términos y condiciones</NavLink>
<NavLink to={'/#'}>Ayuda</NavLink>
<NavLink to={'/#'}>Contacto</NavLink>
</footer>   
    </div>
  )
}

export default Footer