import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "./Tables"; // Asegúrate de que la ruta sea correcta
import Navbar from "./Navbar"; // Asegúrate de que la ruta sea correcta
import DataTable1 from "./Desarrollo";
import Botonesistec from "./botonesistec";

const ISTEC = () => {
  const [estudiantes2, setEstudiantes2] = useState([]); // Estado para almacenar los estudiantes
  const apiUrl = "http://127.0.0.1:8000/api/Estudiantes"; // URL de la API

  useEffect(() => {
    const fetchEstudiantes = async () => {
      try {
        const response = await axios.get(apiUrl); // Realiza la solicitud GET
        setEstudiantes2(response.data); // Almacena los datos en el estado
      } catch (error) {
        console.error("Error fetching estudiantes:", error); // Manejo de errores
      }
    };

    fetchEstudiantes(); // Llama a la función para obtener los datos
  }, []); // El array vacío asegura que se ejecute solo al montar el componente

  return (
    <>
      <DataTable1 />
      <Botonesistec />
      <DataTable estudiantes={estudiantes2} />
    </>
  );
};

export default ISTEC;
