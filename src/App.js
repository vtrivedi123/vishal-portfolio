import './interactionObserverMock';
import React from "react";
import ReactDOM from 'react-dom';
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
        <div className="fade-in-section-container flex flex-col items-center justify-center">
          <div className="fade-in-section-1 max-w-4xl">
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
          <div className="fade-in-section-2 max-w-4xl">
            <FadeInUp>
              &nbsp;&nbsp;&nbsp;My time is spent trying to improve on my problem-solving abilities by using a straightforward 
              programming language called "lua" and the assistance of Chat GPT when I have troubles. 
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;Along with that, I took apart the HTML code for the anime list portion of <a href="https://myanimelist.net" target="_blank" rel="noreferrer">MyAnimeList</a>&nbsp;and added 
              some custom elements to it.
            </FadeInUp>
          </div>
        </div>
      </header>
      <section id="about" className="flex items-center justify-center py-16">
        <h2 className="text-4xl font-bold" style={{ fontWeight: "100" }}>ABOUT</h2>
      </section>
      <section id="about-i"></section>
      <section id="academics" className="flex items-center justify-center py-16">
        <h2 className="text-4xl font-bold" style={{ fontWeight: "100" }}>ACADEMICS</h2>
      </section>
      <section id="academics-i"></section>
      <section id="personal" className="flex items-center justify-center py-16">
        <h2 className="text-4xl font-bold" style={{ fontWeight: "100" }}>PERSONAL</h2>
      </section>
      <section id="personal-i"></section>
      <section id="downloads" className="flex items-center justify-center py-16">
        <h2 className="text-4xl font-bold" style={{ fontWeight: "100" }}>DOWNLOADS</h2>
      </section>
      <section id="downloads-i"></section>
      <section id="contact" className="flex items-center justify-center py-16">
        <h2 className="text-4xl font-bold" style={{ fontWeight: "100" }}>CONTACT</h2>
      </section>
      <section id="contact-i"></section>
      <Footer />
    </div>
  );
}

export default App;