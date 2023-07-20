import React from "react";
import "../Component/DownloadBTN.css";

const DownloadBTN = () => {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="button" style={{ zIndex: "9999" }}>
      <label htmlFor="button" onClick={(e) => scrollToSection(e, "downloads")}>
        <div className="button_inner q">
          <i className="l ion-log-in"></i>
          <span className="t">Downloads</span>
          <div className="b_l_quad"></div>
        </div>
      </label>
    </div>
  );
};

export default DownloadBTN;
