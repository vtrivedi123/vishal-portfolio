import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../Component/Navbar.css";

const MyNavbar = () => {
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
    <Navbar bg="light" expand="lg" className="fixed-top nav">
      <Navbar.Brand className="custom-margin" href="/" onClick={scrollToTop}>
        Portfolio
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNavDropdown" />
      <Navbar.Collapse id="navbarNavDropdown">
        <Nav className="mr-auto mt-2 mt-lg-0">
          <Nav.Link href="about" onClick={(e) => scrollToSection(e, "about")}>
            About
          </Nav.Link>
          <Nav.Link href="academics" onClick={(e) => scrollToSection(e, "academics")}>
            Academics
          </Nav.Link>
          <Nav.Link href="personal" onClick={(e) => scrollToSection(e, "personal")}>
            Personal
          </Nav.Link>
          <Nav.Link href="contact" onClick={(e) => scrollToSection(e, "contact")}>
            Contact me
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;