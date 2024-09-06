import React from 'react';
import '../css/mallaeducativa.css';

// Datos de ejemplo
const courseStructure = {
  "Primer Año": [
    "Introducción a la Programación",
    "Matemáticas para Computación",
    "Fundamentos de Bases de Datos"
  ],
  "Segundo Año": [
    "Estructuras de Datos",
    "Algoritmos",
    "Programación Web"
  ],
  "Tercer Año": [
    "Ingeniería de Software",
    "Desarrollo de Aplicaciones Móviles",
    "Redes y Comunicaciones"
  ]
};

const EducationalPlan = () => {
  return (
    <div className="educational-plan">
  
      {Object.keys(courseStructure).map((year) => (
        <div key={year} className="year-section">
          <h2>{year}</h2>
          <ul>
            {courseStructure[year].map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default EducationalPlan;
