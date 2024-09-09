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
        <Link to="/inicio">istec</Link>
      </div>
      <div className="sidebar__box">
        <Link to="/iniciopuce">puce</Link>
      </div>
    
      <div className="sidebar__box">
        <Link to="/student">Bienestar</Link>
      </div>
    </div>
  );
};

export default SideBar;
