import React from "react";
import { useContext } from "react";
import { Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/Context";
import "../styles/Nav.css";
import SvgCarritoNav from "./svg/SvgCarritoNav";

const Nav = () => {
  const { sumar } = useContext(UserContext);

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
            {sumar}
          </Badge>
        </h6>
        <button className="svg-button">
          <SvgCarritoNav />
        </button>
      </NavLink>
    </nav>
  );
};

export default Nav;
