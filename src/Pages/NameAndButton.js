import React from "react";
import '../Component/Name.css';
//import "../Component/DownloadBTN.css";
import "../Component/Scroll.css";

function NameAndButton() {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 container">
      {/* Name Section */}
      <div>
        <link href="" rel="stylesheet" />
        <svg viewBox="0 0 1320 300" className="name-svg">
          <text x="50%" y="50%" dy=".35em" textAnchor="middle" className="text">
            Vishal Trivedi
          </text>
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            Vishal Trivedi
          </text>
        </svg>
      </div>

      {/* Button Section */}
      <div className="button mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24">
        <div
          className="relative w-40 h-40 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-52 xl:h-52">
          <label 
            htmlFor="button" 
            onClick={(e) => scrollToSection(e, "about")}
            className="block w-full h-full"
          >
            <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-opacity-0 rounded-lg hover:bg-opacity-10 button_inner q">
              <i className="l ion-log-in"></i>
              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                {/* Downloads */}
              </span>
              <div className="b_l_quad"></div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default NameAndButton;