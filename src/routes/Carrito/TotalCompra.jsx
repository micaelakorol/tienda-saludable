import { Button } from "react-bootstrap";
import SumarProductos from "../../services/SumarProductos";

const TotalCompra = () => {
  const { totales } = SumarProductos();
  return (
    <>
      <i className="compra-total">Total de Compra: $ {totales} </i>
      {totales > 1 && (
        <Button variant="light">
          <a href="https://shrtco.de/g87Vir" target="_blank" rel="noreferrer">
            {" "}
            Ir a Pagar{" "}
          </a>
        </Button>
      )}
    </>
  );
};

export default TotalCompra;
