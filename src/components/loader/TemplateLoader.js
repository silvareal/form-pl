import React from "react";
import "./templateLoader.css";

const TemplateLoader = () => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14">
      <div className="skeleton-template-loader"> </div>
      <div className="skeleton-template-loader"> </div>
      <div className="skeleton-template-loader"> </div>
      <div className="skeleton-template-loader"> </div>
      <div className="skeleton-template-loader"> </div>
      <div className="skeleton-template-loader"> </div>
    </div>
  );
};

export default TemplateLoader;
