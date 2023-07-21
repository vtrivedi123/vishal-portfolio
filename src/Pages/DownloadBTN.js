import React from "react";
import "../Component/DownloadBTN.css";

const DownloadBTN = () => {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-center button">
      <div className="relative w-40 h-40 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-52 xl:h-52">
        <label
          htmlFor="button"
          onClick={(e) => scrollToSection(e, "downloads")}
          className="block w-full h-full"
        >
          <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-opacity-0 rounded-lg hover:bg-opacity-10 button_inner q">
            <i className="l ion-log-in"></i>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
              Downloads
            </span>
            <div className="b_l_quad"></div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default DownloadBTN;