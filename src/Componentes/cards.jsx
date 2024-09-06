import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Cards.css';

const CardComponent = ({ imgSrc, altText, cardTitle, buttonText, linkUrl }) => {
  return (
    <div className="card" style={{ width: '15rem', textAlign: 'center', position: 'relative', zIndex: 70 }}>
      <img src={imgSrc} className="card-img-top" alt={altText} />
      <div className="card-body">
        {/* Título centrado */}
        <h5 className="card-title" style={{ position: 'relative', zIndex: 2 }}>{cardTitle}</h5>
        {/* Enlace de navegación interna utilizando Link de react-router-dom */}
        <Link to={linkUrl} className="btn btn-primary" style={{ position: 'relative', zIndex: 2 }}>
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

CardComponent.defaultProps = {
  cardTitle: 'Card Title',
  linkUrl: '/', // Ruta predeterminada si no se proporciona
};

export default CardComponent;
