import React from "react";

export default function About(){
  return (
    <section className="about-page">
      <h2>About Me</h2>
      <div className="card glass">
        <p>I am Shilpa — front-end developer focused on React and clean UI.</p>
        <div style={{marginTop:12, display:'flex', gap:8, flexWrap:'wrap'}}>
          <span className="chip">React</span>
          <span className="chip">JavaScript</span>
          <span className="chip">CSS</span>
          <span className="chip">Vite</span>
          <span className="chip">Netlify</span>
        </div>
      </div>
    </section>
  );
}
