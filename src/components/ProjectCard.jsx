import React from "react";
import { motion } from "framer-motion";

/** simple SVG placeholder generator */
function placeholderSVG(title){
  const text = title.length > 24 ? title.slice(0,24)+"…" : title;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='480'><defs><linearGradient id='g' x1='0' x2='1'><stop offset='0' stop-color='#ff6b6b'/><stop offset='1' stop-color='#7c4dff'/></linearGradient></defs><rect width='100%' height='100%' fill='url(#g)' rx='10'/><text x='50%' y='50%' font-size='44' dominant-baseline='middle' text-anchor='middle' fill='rgba(255,255,255,0.95)' font-family='Inter, Arial' >${text}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export default function ProjectCard({title, desc, tech, img, demo, code, index=0}){
  const thumbnail = img || placeholderSVG(title);
  return (
    <motion.article className="project-card glass" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.45, delay: index * 0.06}}>
      <div className="project-thumb">
        <img src={thumbnail} alt={title} style={{width:'100%',height:'100%',objectFit:'cover'}} />
      </div>

      <div style={{padding:'8px 6px'}}>
        <h4 style={{margin:'6px 0'}}>{title}</h4>
        <p className="muted" style={{margin:0}}>{desc}</p>

        <div className="chips" style={{marginTop:10}}>
          {tech?.map(t => <span key={t} className="chip">{t}</span>)}
        </div>

        <div style={{marginTop:12, display:'flex', gap:8}}>
          {demo ? <a className="btn small primary" href={demo} target="_blank" rel="noreferrer">Live</a> : null}
          {code ? <a className="btn small ghost" href={code} target="_blank" rel="noreferrer">Code</a> : null}
        </div>
      </div>
    </motion.article>
  );
}
