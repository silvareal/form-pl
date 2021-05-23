import React from "react";
import TemplateList from "../components/template/TemplateList";
import Navbar from "../navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      <TemplateList />
    </div>
  );
}
