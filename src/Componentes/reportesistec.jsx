import React from "react";
import "../css/reportes.css";
import Navbar from "./Navbar";
import DataTable1 from "./Desarrollo";

const Reportes = () => {
  // Datos simulados
  const reportData = {
    totalStudents: 250,
    totalCourses: 20,
    totalTeachers: 15,
    registeredToday: 5,
    totalGraduates: 120,
  };

  return (
    <>
      <DataTable1 />
      <div className="reports-container">
        <h2>Reportes del Sistema</h2>

        <div className="report-card">
          <h3>Total de Estudiantes Registrados</h3>
          <p>{reportData.totalStudents}</p>
        </div>

        <div className="report-card">
          <h3>Total de Cursos Ofrecidos</h3>
          <p>{reportData.totalCourses}</p>
        </div>

        <div className="report-card">
          <h3>Total de Profesores</h3>
          <p>{reportData.totalTeachers}</p>
        </div>

        <div className="report-card">
          <h3>Estudiantes Registrados Hoy</h3>
          <p>{reportData.registeredToday}</p>
        </div>

        <div className="report-card">
          <h3>Total de Graduados</h3>
          <p>{reportData.totalGraduates}</p>
        </div>
      </div>
    </>
  );
};

export default Reportes;
