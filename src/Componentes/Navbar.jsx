// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

const Navbar = ({
  inicio,
  brandText,
  linkTo,
  linkTo1,
  linkTo2,
  linkTo3,
  linkTo4,
  linkTo5,
  linkTo6,
  materia1,
  materia2,
  materia3,
  materia4,
  materia5,
  materia6,
  onSelectCarrera,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleCarreraClick = (materia) => {
    onSelectCarrera(materia); // Llama a la función pasada como prop
  };

  return (
    <nav className="nav">
      <div className="nav__brandText">
        <Link to={"#"}>{brandText}</Link>
      </div>
      <ul className="list">
        <li className="list__item">
          <Link to={linkTo}>{inicio}</Link>
        </li>
        <li className="list__item">
          <Link to={linkTo1} onClick={() => handleCarreraClick(materia1)}>
            {materia1}
          </Link>
        </li>

        <li className="list__item">
          <Link to={linkTo2} onClick={() => handleCarreraClick(materia2)}>
            {materia2}
          </Link>
        </li>

        <li className="list__item">
          <Link to={linkTo3} onClick={() => handleCarreraClick(materia3)}>
            {materia3}
          </Link>
        </li>

        <li className="list__item">
          <Link to={linkTo4} onClick={() => handleCarreraClick(materia4)}>
            {materia4}
          </Link>
        </li>

        <li className="list__item">
          <Link to={linkTo5} onClick={() => handleCarreraClick(materia5)}>
            {materia5}
          </Link>
        </li>

        <li className="list__item">
          <Link to={linkTo6} onClick={() => handleCarreraClick(materia6)}>
            {materia6}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
