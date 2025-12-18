import React from "react";

export default function Resume() {
  return (
    <section
      className="glass"
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "24px"
      }}
    >
      <h2>Resume</h2>

      <p className="lead">
        Frontend Developer with hands-on experience in React, JavaScript, and
        modern UI development.
      </p>

      <h3>Skills</h3>
      <ul>
        <li>React, Vite, JavaScript (ES6+)</li>
        <li>HTML, CSS, Responsive Design</li>
        <li>API Integration, State Management</li>
        <li>Git, GitHub</li>
      </ul>

      <h3>Projects</h3>
      <ul>
        <li>
          <strong>Creative Portfolio</strong> – Built with React and Vite,
          featuring reusable components, routing, and an API-based Product
          Explorer with search, loader, and error handling.
        </li>
      </ul>

      <h3>Contact</h3>
      <p>Email: your-email@example.com</p>

      <a
        href="/resume.pdf"
        className="btn primary"
        style={{ marginTop: "16px", display: "inline-block" }}
      >
        Download Resume
      </a>
    </section>
  );
}
