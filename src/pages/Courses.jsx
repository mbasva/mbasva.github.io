import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import courseData from "../data/courses";

const Courses = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: "40px", backgroundColor: "#f0f0f0" }}>
        <h2>All Courses</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {courseData.map((course, index) => (
            <Card key={index} title={course.title} description={course.description} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
