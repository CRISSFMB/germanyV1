import React from "react";
import DataTable from "./Tables"; // Asegúrate de que la ruta sea correcta
import Navbar from "./Navbar"; // Asegúrate de que la ruta sea correcta

const DataTable1 = () => {
  return (
    <>
      <Navbar
        inicio="Inicio"
        brandText="Carreras"
        linkTo="/inicio"
        linkTo1="/enfermeria "
        linkTo2="/agroforesteria "
        linkTo3="/contabilidad "
        linkTo4="/software"
        linkTo5="/procesamiento"
        linkTo6="/construccion"
        materia1="Enfermeria"
        materia2="Agroforesteria"
        materia3="Administracion"
        materia4="Desarrolloooo"
        materia5="Procesamiento"
        materia6="Contruccion"
      />

      {/* <DataTable estudiantes={estudiantes2}  /> */}
    </>
  );
};

export default DataTable1;
