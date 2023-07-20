import React from "react";
import '../Component/Navbar.css';

const Navbar = () => {
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light nav">
      <a className="navbar-brand custom-margin" href="/" onClick={scrollToTop}>
        Portfolio
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-collapse collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="about" onClick={(e) => scrollToSection(e, "about")}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="academics" onClick={(e) => scrollToSection(e, "academics")}>
              Academics
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="personal" onClick={(e) => scrollToSection(e, "personal")}>
              Personal
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact" onClick={(e) => scrollToSection(e, "contact")}>
              Contact me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;