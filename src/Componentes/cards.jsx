import React from "react";
import { Link } from "react-router-dom";
import "../css/cards/singleCard.css";

const CardComponent = ({ imgSrc, altText, cardTitle, buttonText, linkUrl }) => {
  return (
    <div className="card-component">
      <img className="card-component__img" src={imgSrc} alt={altText} />
      <div className="card-component__body">
        <h5 className="card-component__body__title">{cardTitle}</h5>

        <div className="card-component__btn">
          <Link className="card-component__body__link" to={linkUrl}>
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
