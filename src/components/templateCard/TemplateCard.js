import React from "react";
import "./templateCard.css";

const TemplateCard = ({ name, description, link }) => {
  return (
    <div className="template-card">
      <div className="template-card__head">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>

      <div className="template-card__footer">
        <a href={link}>Use Template</a>
      </div>
    </div>
  );
};

export default TemplateCard;
