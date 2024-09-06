import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SideBar from "./Componentes/navegacion";
import Datos from "./Componentes/Datos";
import Formulario from "./paginas/matricula";
import EducationalPlan from "./Componentes/mallaeducativa";
import SimpleForm from "./Componentes/actualizar";
import Desarrollo from "./Componentes/Desarrollo";
import Sabermas from "./Componentes/sabermas";
import Inicio from "./Componentes/inicio";
import Enfermeria from "./Componentes/enfermeria";
import Agroforesteria from "./Componentes/agroforesteria";
import Contabilidad from "./Componentes/contabilidad";
import Software from "./Componentes/software";
import Procesamiento from "./Componentes/procesamiento";
import Construccion from "./Componentes/construccion";
import Iniciopuce from "./Componentes/iniciopuce";
import Enfermeria2 from "./Componentes/lic.enfermeria";
import Agricola from "./Componentes/ing.agricola";
import Licadministracion from "./Componentes/lic.administracion";
import Medicina from "./Componentes/medicina";
import Vete from "./Componentes/veterinaria";
import TicketsPage from "./Componentes/TicketList";
import ReportsPage from "./Componentes/resportes";
import Reportes from "./Componentes/reportesistec";
import Cards from "./Componentes/seccionedicion";
import LoginForm from "./Componentes/loginform";
import Botonregresar from "./Componentes/botonderetorno";

/*componentes sin usar*/

// import ISTEC from "./Componentes/ISTEC";
// import DashboardContent from "./Componentes/header";
// import MainPage from "./paginas/principal";
// import Formulario2 from "./paginas/matricula2";
// import DataTable from "./Componentes/Tables";
// import Navbar from "./Componentes/navistec";

/*CSS*/
import "./app.css";

function App() {
  return (
    <Router>
      <div className="GridAppMainContainer">
        <SideBar />
        <div className="flex-center relative">
          <Routes>
            <Route path="/" element={<Datos />} />
            <Route path="/Datos" element={<Datos />} />
            <Route path="/actualizar" element={<SimpleForm />} />
            <Route path="/mallaeducativa" element={<EducationalPlan />} />
            <Route path="/Desarrollo" element={<Desarrollo />} />
            <Route path="/sabermas" element={<Sabermas />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/enfermeria" element={<Enfermeria />} />
            <Route path="/agroforesteria" element={<Agroforesteria />} />
            <Route path="/contabilidad" element={<Contabilidad />} />
            <Route path="/software" element={<Software />} />
            <Route path="/procesamiento" element={<Procesamiento />} />
            <Route path="/construccion" element={<Construccion />} />
            <Route path="/iniciopuce" element={<Iniciopuce />} />
            <Route path="/lic.enfermeria" element={<Enfermeria2 />} />
            <Route path="/ing.agricola" element={<Agricola />} />
            <Route path="/lic.administracion" element={<Licadministracion />} />
            <Route path="/medicina" element={<Medicina />} />
            <Route path="/veterinaria" element={<Vete />} />
            <Route path="/TicketList" element={<TicketsPage />} />
            <Route path="/reportes" element={<ReportsPage />} />
            <Route path="/reportesistec" element={<Reportes />} />
            <Route path="/matricula" element={<Formulario />} />
            <Route path="/seccionedicion" element={<Cards />} />
            <Route path="/loginform" element={<LoginForm />} />
            <Route path="/botonderetorno" element={<Botonregresar />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
