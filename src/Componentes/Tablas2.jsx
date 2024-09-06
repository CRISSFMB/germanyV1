import React from "react";
import DataTable from "./Tables"; // Asegúrate de que la ruta sea correcta
import Navbar from "./Navbar"; // Asegúrate de que la ruta sea correcta

const DataTable2 = () => {
  return (
    <>
      <Navbar
        inicio="Inicio"
        brandText="Carreras"
        linkTo="/iniciopuce"
        linkTo1="/lic.enfermeria "
        linkTo2="/ing.agricola"
        linkTo3="/lic.Administracion"
        linkTo4="/medicina"
        linkTo5="/veterinaria"
        materia1="Lic.Enfermeria"
        materia2="Ing.Agricola"
        materia3="Lic.Administracion"
        materia4="Medicina General"
        materia5="Veterinaria"
      />

      {/* <DataTable estudiantes={estudiantes2}  /> */}
    </>
  );
};

export default DataTable2;
