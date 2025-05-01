import React from "react";
import Navbar from "../components/Navbar";

// ✅ Declare only once
const About = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: "40px" }}>
        <h2>About AUM Learn Portal</h2>
        <p>
          This portal is designed to help students explore programs, register for courses, and stay informed about university activities.
        </p>
      </div>
    </>
  );
};

export default About;
