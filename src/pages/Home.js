import React from "react";
import InfoAlert from "../components/infoAlert/InfoAlert";
import TemplateLoader from "../components/loader/TemplateLoader";
import TemplateList from "../components/templateList/TemplateList";
import useFetch from "../hooks/useFetch";
import Navbar from "../navbar/Navbar";

export default function Home() {
  const url = `${process.env.REACT_APP_API}`;
  // eslint-disable-next-line
  const [{ status, data, error }, fetchData] = useFetch(url);

  return (
    <div className="container mx-auto px-3">
      <header>
        <Navbar />
        <InfoAlert />
        <div className="flex justify-between py-4">
          <p className="text-help-main">All Templates</p>
          <p className="text-help-sub">2000 templates</p>
        </div>
      </header>
      <main>
        {status === "fetching" && <TemplateLoader />}

        {status === "fetched" && <TemplateList templates={data} />}

        {status === "error" && (
          <div class="flex items-center justify-center alert-bg  alert-text text-sm px-4 py-5 my-8">
            {error}
          </div>
        )}
      </main>

      <footer>
        <div className="flex justify-between py-10 max-w-6xl mx-auto">
          <p className="text-help-main">Previous</p>
          <div>
            <p className="text-help-sub">2000 templates</p>
          </div>
          <p className="text-help-main">Next</p>
        </div>
      </footer>
    </div>
  );
}
