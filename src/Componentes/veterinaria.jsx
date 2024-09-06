import React from "react";
import DataTable from "./Tables"; // Asegúrate de que la ruta sea correcta
import Navbar from "./Navbar"; // Asegúrate de que la ruta sea correcta
import DataTable2 from "./Tablas2";

import Formulario from "../paginas/matricula";

const Vete = () => {
  return (
    <>
      <DataTable2 />
      <Formulario />

      {/* <DataTable estudiantes={estudiantes2}  /> */}
    </>
  );
};

export default Vete;
