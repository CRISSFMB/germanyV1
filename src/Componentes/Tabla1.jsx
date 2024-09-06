import React from 'react';
import DataTable from './Tables'; // Asegúrate de que la ruta sea correcta
import Navbar from './navistec'; // Asegúrate de que la ruta sea correcta

const DataTable1 = () => {
  const estudiantes2 = [
    { cedula: '1104784677', nombre: 'Paulina', apellido: 'Ortiz', sexo: 'Masculino', edad: 18, fechaInscripcion: '2014/07/25' },
    { cedula: '1104784688', nombre: 'Laura', apellido: 'Martinez', sexo: 'Femenino', edad: 19, fechaInscripcion: '2015/08/15' },
    { cedula: '1104784699', nombre: 'Ana', apellido: 'Diaz', sexo: 'Femenino', edad: 20, fechaInscripcion: '2016/09/05' },
  ];

  return (
    
    <>

       <Navbar inicio="inicio"   brandText="Carreras" linkTo="/Tablas2"/>
       <DataTable estudiantes={estudiantes2} /> 



      
      {/* <DataTable estudiantes={estudiantes2}  /> */}
  
      
    </>
  );
};

export default DataTable1;

