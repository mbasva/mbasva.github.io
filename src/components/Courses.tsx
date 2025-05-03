// src/components/Courses.tsx
import React from 'react';

const Courses: React.FC = () => {
  return (
    <div className="courses-container">
      <h1>Courses & Skills</h1>
      <div className="course-list">
        <div className="course">
          <h3>React Development</h3>
          <p>Learn how to build modern web applications using React and hooks.</p>
        </div>
        <div className="course">
          <h3>TypeScript Basics</h3>
          <p>Understanding TypeScript for safer, more maintainable code.</p>
        </div>
        <div className="course">
          <h3>Salesforce Development</h3>
          <p>Customizing Salesforce CRM and building robust applications.</p>
        </div>
        <div className="course">
          <h3>Cloud Computing with AWS</h3>
          <p>Learning how to deploy and manage applications using AWS cloud services.</p>
        </div>
        <div className="course">
          <h3>Machine Learning with Python</h3>
          <p>An introduction to machine learning algorithms and their applications.</p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
