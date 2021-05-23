import React from "react";
import TemplateCard from "./TemplateCard";

export default function TemplateList() {
  return (
    <div className="container mx-auto px-3">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
      </div>
    </div>
  );
}
