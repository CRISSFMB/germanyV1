import React from "react";
import DataTable from "./Tables"; // Asegúrate de que la ruta sea correcta
import Navbar from "./Navbar"; // Asegúrate de que la ruta sea correcta
import DataTable1 from "./Desarrollo";
import Botonesistec from "./botonesistec";
import ActionButtons from "./botones";
import Formulario from "../paginas/matricula";
import ISTEC from "./ISTEC";

const Inicio = () => {
  return (
    <>
      <Botonesistec />
      <DataTable1 />
      <ISTEC />
    </>
  );
};

export default Inicio;
