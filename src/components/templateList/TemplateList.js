import React from "react";
import TemplateCard from "../templateCard/TemplateCard";

export default function TemplateList() {
  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14">
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
      </div>{" "}
    </div>
  );
}
