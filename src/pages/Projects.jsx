import React from "react";
import ProjectCard from "../components/ProjectCard";

/* YOUR PROJECTS HERE */
const PROJECTS = [
  {
    title: "Calculator App",
    desc: "Simple calculator with clean UI.",
    tech: ["HTML", "CSS", "JS"],
    img: "/projects/calculator-app/screenshot.png",
    demo: "/projects/calculator-app/index.html",
    code: null
  },
  {
    title: "Clock App",
    desc: "Live ticking digital clock.",
    tech: ["HTML", "CSS", "JS"],
    img: "/projects/clock/screenshot.png",
    demo: "/projects/clock/index.html"
  },
  {
    title: "Countdown Timer",
    desc: "Countdown with UI effects.",
    tech: ["HTML", "CSS", "JS"],
    img: "/projects/countdown/screenshot.png",
    demo: "/projects/countdown/index.html"
  },
  {
    title: "Day 11 – Lightbox Gallery",
    desc: "Interactive lightbox image viewer.",
    tech: ["HTML", "CSS", "JS"],
    img: "/projects/day11-lightbox/screenshot.png",
    demo: "/projects/day11-lightbox/index.html"
  },
  {
    title: "Day 12 – Notes App",
    desc: "Local storage-based Notes application.",
    tech: ["React", "CSS"],
    img: "/projects/day12-notes-app/screenshot.png",
    demo: "/projects/day12-notes-app/index.html"
  },
  {
    title: "Day 12 – Todo App",
    desc: "Simple responsive todo app.",
    tech: ["React", "CSS"],
    img: "/projects/day12-todo-app/screenshot.png",
    demo: "/projects/day12-todo-app/index.html"
  },
  {
    title: "Form Validator",
    desc: "Validates user input with rules.",
    tech: ["HTML", "CSS", "JS"],
    img: "/projects/day8-form-validation/screenshot.png",
    demo: "/projects/day8-form-validation/index.html"
  },
  {
    title: "Scroll Reveal",
    desc: "Scroll animations demo.",
    tech: ["HTML", "CSS", "JS"],
    img: "/projects/day10-scroll-reveal/screenshot.png",
    demo: "/projects/day10-scroll-reveal/index.html"
  },
];

export default function Projects() {
  if (!PROJECTS.length) return <p>No projects found.</p>;

  return (
    <section className="projects-page">
      <h2>Projects</h2>

      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} index={i} {...p} />
        ))}
      </div>
    </section>
  );
}
