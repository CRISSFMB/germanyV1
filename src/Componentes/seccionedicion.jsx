import React from "react";
import CardComponent from "./cards"; // Asegúrate de que la ruta sea correcta
import Navbar from "./Navbar";
import DataTable1 from "./Desarrollo";
import DashboardContent from "./header";
import Formulario from "../paginas/matricula";
import "../css/cards/seccionEdicionCards.css";

const Cards = () => {
  const cardData = [
    {
      imgSrc:
        "https://cdn-icons-png.freepik.com/256/3076/3076404.png?semt=ais_hybrid",
      altText: "Imagen de Datos Personales",
      cardTitle: "Datos Personales",
      buttonText: "Editar",
      linkUrl: "/loginform",
    },
    {
      imgSrc:
        "https://estudiaenelexterior.com/wp-content/uploads/2022/08/Residencia-estudiantil-vs-Casa-de-Familia-%C2%BFQue%CC%81-alojamiento-me-conviene-ma%CC%81s.jpg",
      altText: "Imagen de Residencia",
      cardTitle: "Residencia",
      buttonText: "Editar",
      linkUrl: "/reportes",
    },
    {
      imgSrc:
        "https://i0.wp.com/www3.gobiernodecanarias.org/medusa/edublog/ceipaguere/wp-content/uploads/sites/109/2022/02/image_gallery.jpg?ssl=1",
      altText: "Imagen de Informacion General",
      cardTitle: "Informacion General",
      buttonText: "Editar",
      linkUrl: "/reportes",
    },
    {
      imgSrc: "https://cdn-icons-png.freepik.com/512/10106/10106041.png",
      altText: "Imagen de Ingreso",
      cardTitle: "Ingresos",
      buttonText: "Editar",
      linkUrl: "/reportes",
    },
    {
      imgSrc:
        "https://files.merca20.com/uploads/2024/03/feliz-dia-de-la-familia-2024.jpg",
      altText: "Imagen de Datos Personales",
      cardTitle: "Familia",
      buttonText: "Editar",
      linkUrl: "/reportes",
    },
    {
      imgSrc: "https://cdn-icons-png.flaticon.com/512/6073/6073873.png",
      altText: "Imagen de Datos Personales",
      cardTitle: "Usuario",
      buttonText: "Editar",
      linkUrl: "/reportes",
    },
    {
      imgSrc:
        "https://www.ecoavant.com/uploads/s1/29/22/70/imagen-que-es-la-salud.webp",
      altText: "Imagen de Salud",
      cardTitle: "Informacion de Salud",
      buttonText: "Editar",
      linkUrl: "/reportes",
    },
    {
      imgSrc:
        "https://revistaseguridad360.com/wp-content/uploads/2022/07/depositphotos_79190948-stock-illustration-emergency-concept-design.webp",
      altText: "Imagen de Emergencia",
      cardTitle: "Emergencia",
      buttonText: "Editar",
      linkUrl: "/reportes",
    },
    {
      imgSrc:
        "https://www.laprensa.com.ec/wp-content/uploads/2023/09/Dia-Internacional-Personas-con-Discapacidad-2022-2.jpg",
      altText: "Imagen de Discapacidad",
      cardTitle: "Discapacidad",
      buttonText: "Ir a Reportes",
      linkUrl: "/reportes",
    },
    {
      imgSrc:
        "https://www.aauniv.com/s/blog/wp-content/uploads/2020/03/empezar-estudiar-en-linea-en-casa.jpg",
      altText: "Imagen de Datos Estudios",
      cardTitle: "Estidios",
      buttonText: "Editar",
      linkUrl: "/reportes",
    },
    {
      imgSrc:
        "https://www.patrimoniocultural.gob.ec/wp-content/uploads/2022/09/Mesa-de-trabajo-158@4x-8-1.png",
      altText: "Imagen de Servicios",
      cardTitle: "Servicios",
      buttonText: "Editar",
      linkUrl: "/reportes",
    },
    {
      imgSrc:
        "https://www.utelvt.edu.ec/site/wp-content/uploads/2022/01/foto_utelvt.png",
      altText: "Proceso de Matriculacion",
      cardTitle: "Matriculacion",
      buttonText: "Editar",
      linkUrl: "/reportes",
    },
  ];

  return (
    <>
      <DashboardContent />
      <DataTable1 />
      <div className="gridCards">
        {cardData.map((card, index) => (
          <div key={index}>
            <CardComponent
              imgSrc={card.imgSrc}
              altText={card.altText}
              cardTitle={card.cardTitle}
              buttonText={card.buttonText}
              linkUrl={card.linkUrl}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
