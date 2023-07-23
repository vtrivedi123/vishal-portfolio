import './interactionObserverMock';
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './Component/Styles.css';

// Import Pages
import Navbar from "./Pages/Navbar.js";
import NameAndButton from "./Pages/NameAndButton.js";
// import FadeInUp from "./Pages/FadeInUp";
// import FadeInDown from "./Pages/FadeInDown";
import ShootingStar from "./Pages/Particles";
import Footer from "./Pages/Footer";
import TabMenu from './Pages/AboutMe';


function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <ShootingStar />
        <NameAndButton />
        <div className="flex flex-col items-center justify-center px-4 py-8 md:max-w-4xl md:mx-auto .textbox-container">
          <div className="textbox w-full max-w-lg mb-8">
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
          </div>
          <div className="textbox2 w-full max-w-lg">
            &nbsp;&nbsp;&nbsp;My time is spent trying to improve on my problem-solving abilities by using a straightforward 
            programming language called "lua" and the assistance of Chat GPT when I have troubles. 
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;Along with that, I took apart the HTML code for the anime list portion of <a href="https://myanimelist.net" target="_blank" rel="noreferrer">MyAnimeList</a>&nbsp;and added 
            some custom elements to it.
          </div>
        </div>
        <div className="w-full max-w-lg px-4 mx-auto">
          <TabMenu />
        </div>
      </header>
      <section id="about" className="flex items-center justify-center py-16">
        <h2 className="text-4xl font-bold" style={{ fontWeight: "100" }}>ABOUT</h2>
      </section>      
      <section id="about-i"></section>
      <section id="skills" className="flex items-center justify-center py-16">
        <h2 className="text-4xl font-bold" style={{ fontWeight: "100" }}>SKILLS</h2>
      </section>
      <section id="skills-i"></section>
      <section id="projects" className="flex items-center justify-center py-16">
        <h2 className="text-4xl font-bold" style={{ fontWeight: "100" }}>PROJECTS</h2>
      </section>
      <section id="projects-i"></section>
      <section id="contact" className="flex items-center justify-center py-16">
        <h2 className="text-4xl font-bold" style={{ fontWeight: "100" }}>CONTACT</h2>
      </section>
      <section id="contact-i"></section>
      <Footer />
    </div>
  );
}

export default App;