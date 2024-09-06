import React from "react";
import { Link } from "react-router-dom";
import "../css/botones.css";

const ActionButtons = ({ onEdit, onDelete }) => {
  return (
    <div>
      <button onClick={onEdit} className="button">
        Editar
      </button>

      <Link to="/reportes" className="button">
        <i className="zmdi zmdi-view-dashboard zmdi-hc-fw"></i> Reportes
      </Link>
    </div>
  );
};

export default ActionButtons;
