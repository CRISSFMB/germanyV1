import React, { useState } from 'react';
import DataTable1 from './Desarrollo';
import '../css/loginform.css';
import Botonregresar from './botonderetorno';

const LoginForm = ({ onLogin }) => {
  const [cedula, setCedula] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí deberías hacer la autenticación (simulada aquí)
    if (cedula) {
      onLogin(); // Llama a la función pasada como prop para cerrar el formulario
    }
  };

  return (
    <>
      <Botonregresar /> 
      <DataTable1 />
      <div className="login-form">
        <h2>CI Del Estudiante</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="cedula">Cédula:</label>
            <input
              type="text"
              id="cedula"
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
              required
            />
          </div>
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;

