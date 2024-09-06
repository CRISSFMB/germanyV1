import React from "react";
import { Link } from "react-router-dom";
import istecImg from "../assets/img/istec.jpg"; // Ajusta la ruta según la ubicación del archivo
import "../css/navegacion.css";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__box">
        <Link to="/">Inicio</Link>
      </div>
      <div className="sidebar__box">
        <Link to="/">institucion</Link>
      </div>
      <div className="sidebar__box">
        <Link to="/inicio">istec</Link>
      </div>
      <div className="sidebar__box">
        <Link to="/iniciopuce">puce</Link>
      </div>
      <div className="sidebar__box">
        <Link to="/admin">Admin</Link>
      </div>
      <div className="sidebar__box">
        <Link to="/student">Student</Link>
      </div>
      <div className="sidebar__box">
        <Link to="/TicketList">Tickes</Link>
      </div>
      <div className="sidebar__box">
        <Link to="/mallaeducativa">Plan de Estudio</Link>
      </div>
    </div>
  );
};

export default SideBar;
