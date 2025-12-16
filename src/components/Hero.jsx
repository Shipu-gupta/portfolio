import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  const initials = "SG";

  return (
    <section className="hero">
      <motion.div 
        className="hero-left"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Hi — I'm <span className="accent">Shilpa</span></h1>

        <p className="lead">
          Front-End developer building clean UI, React apps and small utilities.
          I build daily to level up my craft.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="btn primary">See Projects</Link>
          <a href="/resume.pdf" className="btn ghost" target="_blank" rel="noreferrer">
            Download Resume
          </a>
        </div>
      </motion.div>

      <motion.div 
        className="hero-right"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="avatar">
          {initials}
        </div>
      </motion.div>
    </section>
  );
}
