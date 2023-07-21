import React, { useState, useEffect } from "react";
import { Navbar, Nav, OverlayTrigger, Tooltip } from "react-bootstrap";
import LogoImage from "../Assets/gh.png";
import "../Component/Navbar.css";

const scrollToTop = (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  let prevActiveSection = ""; // Variable to store the previously active section

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let maxOffset = 0;
    let activeSec = "";
    sections.forEach((section) => {
      const { top, bottom } = section.getBoundingClientRect();
      if (top >= 0 && bottom <= window.innerHeight) {
        activeSec = section.id;
      }
    });

    if (activeSec !== prevActiveSection) {
      setActiveSection(activeSec);
      prevActiveSection = activeSec; // Update the previously active section
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSectionClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });

    if (expanded) {
      setExpanded(false);
    }
  };

  const renderTooltip = (props) => (
    <Tooltip id="github-tooltip" {...props}>
      GitHub
    </Tooltip>
  );
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="fixed-top nav smooth-scroll"
      expanded={expanded}
    >
      <Navbar.Brand className="custom-margin" href="/" onClick={scrollToTop}>
        Portfolio
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="navbarNavDropdown"
        onClick={() => setExpanded(!expanded)}
      />
      <Navbar.Collapse id="navbarNavDropdown">
        <Nav className="mr-auto mt-2 mt-lg-0">
          <Nav.Link
            href="about"
            onClick={(e) => handleSectionClick(e, "about")}
            className={`smooth-scroll navbar-ani-under ${
              activeSection === "about" ? "active" : ""
            }`}
          >
            About
          </Nav.Link>
          <Nav.Link
            href="academics"
            onClick={(e) => handleSectionClick(e, "academics")}
            className={`smooth-scroll navbar-ani-under ${
              activeSection === "academics" ? "active" : ""
            }`}
          >
            Academics
          </Nav.Link>
          <Nav.Link
            href="personal"
            onClick={(e) => handleSectionClick(e, "personal")}
            className={`smooth-scroll navbar-ani-under ${
              activeSection === "personal" ? "active" : ""
            }`}
          >
            Personal
          </Nav.Link>
          <Nav.Link
            href="downloads"
            onClick={(e) => handleSectionClick(e, "downloads")}
            className={`smooth-scroll navbar-ani-under ${
              activeSection === "downloads" ? "active" : ""
            }`}
          >
            Downloads
          </Nav.Link>
          <Nav.Link
            href="contact"
            onClick={(e) => handleSectionClick(e, "contact")}
            className={`smooth-scroll navbar-ani-under ${
              activeSection === "contact" ? "active" : ""
            }`}
          >
            Contact me
          </Nav.Link>
        </Nav>
        {/* Add the GitHub logo button here */}
        <div className="github-logo-wrapper">
          <OverlayTrigger placement="bottom" overlay={renderTooltip}>
            <Nav.Link
              href="https://github.com/vtrivedi123/vishal-portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={LogoImage}
                alt="GitHub Logo"
                className="github-logo"
              />
            </Nav.Link>
          </OverlayTrigger>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;