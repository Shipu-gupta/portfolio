import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar(){
  const loc = useLocation();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme === "dark" ? "dark" : "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="nav glass">
      <div className="nav-left">
        <Link to="/" className="brand">Shilpa • Developer</Link>
      </div>

      <nav className="nav-links" aria-hidden={open}>
        <Link className={loc.pathname === "/" ? "active" : ""} to="/">Home</Link>
        <Link className={loc.pathname === "/projects" ? "active" : ""} to="/projects">Projects</Link>
        <Link className={loc.pathname === "/about" ? "active" : ""} to="/about">About</Link>
        <Link className={loc.pathname === "/contact" ? "active" : ""} to="/contact">Contact</Link>
      </nav>

      <div className="nav-right">
        <button
          className="theme-toggle"
          onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>

        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub/></a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin/></a>

        <a className="resume-btn" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>

        <button className="hamburger" onClick={() => setOpen(v => !v)} aria-label="Menu">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mobile-menu glass" role="menu">
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/projects">Projects</Link>
          <Link onClick={() => setOpen(false)} to="/about">About</Link>
          <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>
        </div>
      )}
    </header>
  );
}
