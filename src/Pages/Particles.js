import React from "react";
import '../Component/ShootingStar.css';

const ShootingStar = () => {
  return (
    <div className="relative w-full h-full">
      <div className="shooting-star-container">
      <section>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </section>
    </div>
      <div className="stars fixed top-0 left-0 w-full h-full bg-repeat bg-top-center z-0"></div>
      <div className="twinkling fixed top-0 left-0 w-full h-full bg-repeat bg-top-center z-0"></div>
      <div className="clouds fixed top-0 left-0 w-full h-full bg-transparent bg-repeat bg-top-center opacity-40 z-2 animate-move-clouds-back"></div>
    </div>
    
  );
};

export default ShootingStar;