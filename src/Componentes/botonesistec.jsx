import React from "react";
import { Link } from "react-router-dom";
import "../css/botones.css";

const Botonesistec = ({ onEdit, onDelete }) => {
  return (
    <div className="container-button">
      <Link to="/seccionedicion" className="button">
        <i className="zmdi zmdi-view-dashboard zmdi-hc-fw"></i> Editar
      </Link>

      <Link to="/reportesistec" className="button">
        <i className="zmdi zmdi-view-dashboard zmdi-hc-fw"></i> Reportes
      </Link>
    </div>
  );
};

export default Botonesistec;
