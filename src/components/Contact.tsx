// src/components/Contact.tsx
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message from ${name}: ${message}`);
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>If you’d like to reach out, feel free to fill out the form below or contact me via email.</p>
      <div className="contact-info">
        <p>Email: <a href="mailto:manasa@example.com">manasa@example.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/manasa" target="_blank" rel="noopener noreferrer">linkedin.com/in/manasa</a></p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
