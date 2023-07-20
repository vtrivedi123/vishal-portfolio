import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Import Pages
import Navbar from "./Pages/Navbar.js";
import Name from "./Pages/Name.js";
import DownloadBTN from "./Pages/DownloadBTN";
import FadeInUp from "./Pages/FadeInUp";
import FadeInDown from "./Pages/FadeInDown";
import ShootingStar from "./Pages/Particles";
import Footer from "./Pages/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <ShootingStar />
        <Name />
        <DownloadBTN />
        <div className="fade-in-section-container">
          <div className="fade-in-section-1">
            <FadeInDown>
              &nbsp;&nbsp;&nbsp;I'm Vishal Trivedi, a college student on the pathway of Computer Science.
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;I have experience in software development and UI design which I did in my 
              free time or as a part of coursework. 
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;Even though I am studying Computer Science, 
              I have done work on the engineering side of things, namely, Engineering Graphics. 
              Most of my interests mainly stemmed from my interest in Japanese anime and video games.
            </FadeInDown>
          </div>
          <div className="fade-in-section-2">
            <FadeInUp>
              &nbsp;&nbsp;&nbsp;My time is spent trying to improve on my problem-solving abilities by using a straightforward 
              programming language called "lua" and the assistance of Chat GPT when I have troubles. 
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;Along with that, I took apart the HTML code for the anime list portion of <a href="https://myanimelist.net" target="_blank">MyAnimeList</a>&nbsp;and added 
              some custom elements to it.
            </FadeInUp>
          </div>
        </div>
      </header>
      <section id="about">ABOUT</section>
      <section id="about-i"></section>
      <section id="academics">ACADEMICS</section>
      <section id="academics-i"></section>
      <section id="personal">PERSONAL</section>
      <section id="personal-i"></section>
      <section id="downloads">DOWNLOADS</section>
      <section id="downloads-i"></section>
      <section id="contact">CONTACT</section>
      <section id="contact-i"></section>
      <Footer />
    </div>
  );
}

export default App;