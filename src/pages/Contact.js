import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: "40px" }}>
        <h2>Contact Us</h2>
        <p>Email: support@aum.edu</p>
        <p>Phone: (334) 244-3000</p>
        <p>Address: Montgomery, AL 36117</p>
      </div>
    </>
  );
};

export default Contact;
