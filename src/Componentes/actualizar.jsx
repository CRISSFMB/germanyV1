import React from "react";
import { Link } from "react-router-dom";
import "../css/Table.css";
import Navbar from "./Navbar";

const DataTable = () => {
  const handleEdit = () => {
    // Lógica para editar
    alert("Edit button clicked");
  };

  const handleDelete = () => {
    // Lógica para eliminar
    alert("Delete button clicked");
  };

  const handleAdd = () => {
    // Lógica para agregar
    alert("Add button clicked");
  };

  return (
    <>
      <div className="card shadow mb-4 Datos">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Datos</h6>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <li>
              <Link to="/actualizar">Actualizar</Link>
            </li>
          </div>
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Cedula</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Sexo</th>
                  <th>Edad</th>
                  <th>Fecha de Incripcion</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tfoot>
                {/* Puedes agregar un pie de tabla si es necesario */}
              </tfoot>
              <tbody>
                <tr>
                  <td>2104784687</td>
                  <td>Pablo</td>
                  <td>Enrique</td>
                  <td>Masculino</td>
                  <td>15</td>
                  <td>2011/04/25</td>
                  <td>$320,800</td>
                </tr>
                {/* Agrega más filas aquí */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataTable;
