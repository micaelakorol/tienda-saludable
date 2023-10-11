import React from "react";
import { Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../../styles/Nav.css";
import { cart } from "../../assets/variables";
import SumarProductos from "../../services/SumarProductos";
import Icons from "../../reusable/Icons";

const Nav = () => {
  const {sumaProducto} = SumarProductos()
  return (
    <nav>
      <NavLink to={"/"}>Inicio</NavLink>
      <NavLink to={"/productos"}>Productos</NavLink>
      <NavLink to={"#"}>Cosmética</NavLink>
      <NavLink to={"#"}>Ingresá</NavLink>
      <NavLink to={"#"}>Creá tu cuenta</NavLink>
      <NavLink to={"/carrito"}>
        <h6>
          <Badge bg="success" pill>
            {sumaProducto}
          </Badge>
        </h6>
        <button className="svg-button">
          <Icons src={cart} alt='cart'className='bi'/>
        </button>
      </NavLink>
    </nav>
  );
};

export default Nav;
