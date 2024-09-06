import React, { useState, useEffect } from 'react';
import '../css/Table.css';


const DataTable = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [estadoEstudiante, setEstadoEstudiante] = useState({});

  useEffect(() => {
    const fetchEstudiantes = async () => {
      try {
        const response = await fetch('http://localhost/api/estudiantes'); // Ajusta la URL según sea necesario
        const data = await response.json();
        setEstudiantes(data);

        // Configura el estado inicial
        const inicialEstado = data.reduce((acc, estudiante) => {
          acc[estudiante.cedula] = 'matriculado';
          return acc;
        }, {});
        setEstadoEstudiante(inicialEstado);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchEstudiantes();
  }, []);

  const handleMoreInfo = (cedula) => {
    setEstadoEstudiante((prevEstado) => ({
      ...prevEstado,
      [cedula]: prevEstado[cedula] === 'matriculado' ? 'retirado' : 'matriculado',
    }));
  };

  const handlePrint = () => {
    window.print(); // Abre la ventana de impresión
  };

  if (!estudiantes.length) {
    return <p>No hay datos de estudiantes disponibles.</p>;
  }

  return (
    <div className="Datos">
      <div className="card-header py-3 d-flex justify-content-between align-items-center">
        <h6 className="m-0 font-weight-bold text-primary">Datos</h6>
        <button onClick={handlePrint} className="btn btn-primary">
          Imprimir Tabla
        </button>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
            <thead>
              <tr>
                <th>Cédula</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Sexo</th>
                <th>Edad</th>
                <th>Fecha de Inscripción</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {estudiantes.map((estudiante) => (
                <tr key={estudiante.cedula}>
                  <td>{estudiante.cedula}</td>
                  <td>{estudiante.nombre}</td>
                  <td>{estudiante.apellido}</td>
                  <td>{estudiante.sexo}</td>
                  <td>{estudiante.edad}</td>
                  <td>{estudiante.fechaInscripcion}</td>
                  <td>
                    <button
                      className={`btn ${estadoEstudiante[estudiante.cedula] === 'matriculado' ? 'btn-danger' : 'btn-success'}`}
                      onClick={() => handleMoreInfo(estudiante.cedula)}
                    >
                      {estadoEstudiante[estudiante.cedula] === 'matriculado' ? 'Matriculado' : 'Retirado'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
