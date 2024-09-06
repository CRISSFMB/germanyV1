import React from "react";
import { Link } from "react-router-dom";
import "../css/botones.css";

const Botonregresar = ({ onEdit, onDelete }) => {
  return (
    <div className="container-button">
      <Link to="/seccionedicion" className="button2">
        <i className="zmdi zmdi-view-dashboard zmdi-hc-fw"></i> Regresar
      </Link>
    </div>
  );
};

export default Botonregresar;
