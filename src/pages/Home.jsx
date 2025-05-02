import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-section">
        <h2>Featured Courses</h2>
        <div className="cards-container">
          <Card title="Web Development" description="Learn HTML, CSS, JavaScript" />
          <Card title="Salesforce Admin" description="Get started with CRM basics" />
          <Card title="AI & Machine Learning" description="Build intelligent applications" />
        </div>
      </section>
    </>
  );
};

export default Home;
