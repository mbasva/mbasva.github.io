import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to AUM Portal</h1>
        <p>Empowering education through innovation and excellence.</p>
        <a href="/Courses" className="hero-button">Explore Courses</a>
      </div>
    </section>
  );
};

export default Hero;
