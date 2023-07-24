import React, { useState } from "react";
import { Navbar, Nav, OverlayTrigger, Tooltip } from "react-bootstrap";
import LogoImage from "../Assets/gh.png";
import "../Component/Navbar.css";

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (event, sectionId) => {
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
      className="fixed-top nav smooth-scroll custom-text-color"
      expanded={expanded}
    >
      <Navbar.Brand className="custom-margin custom-text-color" href="/" onClick={scrollToTop}>
        Portfolio
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="navbarNavDropdown"
        onClick={() => setExpanded(!expanded)}
        className="custom-dropdown-btn custom-dropdown-menu"
      />
      <Navbar.Collapse id="navbarNavDropdown">
        <Nav className="mr-auto mt-2 mt-lg-0 custom-text-color">
          <Nav.Link
            href="about"
            onClick={(e) => scrollToSection(e, "about")}
            className="smooth-scroll navbar-ani-under custom-text-color"
          >
            About
          </Nav.Link>
          <Nav.Link
            href="academics"
            onClick={(e) => scrollToSection(e, "skills")}
            className="smooth-scroll navbar-ani-under custom-text-color"
          >
            Skills
          </Nav.Link>
          <Nav.Link
            href="personal"
            onClick={(e) => scrollToSection(e, "projects")}
            className="smooth-scroll navbar-ani-under custom-text-color"
          >
            Projects
          </Nav.Link>
          <Nav.Link
            href="contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="smooth-scroll navbar-ani-under custom-text-color"
          >
            Contact
          </Nav.Link>
        </Nav>
        {/* Add the GitHub logo button here */}
        <div className="github-logo-wrapper">
          <OverlayTrigger
            placement="bottom"
            overlay={renderTooltip}
          >
            <Nav.Link
              href="https://github.com/vtrivedi123/vishal-portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LogoImage} alt="GitHub Logo" className="github-logo" />
            </Nav.Link>
          </OverlayTrigger>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;