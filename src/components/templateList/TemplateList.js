import React from "react";
import TemplateCard from "../templateCard/TemplateCard";

export default function TemplateList({ templates }) {
  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14">
        {templates.map((template) => (
          <TemplateCard
            name={template.name}
            description={template.description}
            link={template.link}
          />
        ))}
      </div>{" "}
    </div>
  );
}
