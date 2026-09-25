import "./Work.css";
import Reveal from "./components/Reveal";

function Work() {
  const projects = [
  {
    number: "01",
    title: "AETHRIX",
    category: "FULL STACK / E-COMMERCE",
    description:
      "A multi-category e-commerce platform built with React, Node.js, Express and MongoDB.",
    tech: "REACT · NODE.JS · EXPRESS · MONGODB",
  },

  {
    number: "02",
    title: "AETHERLINK",
    category: "DESKTOP / RUST / TAURI",
    description:
      "A desktop connectivity platform exploring USB, Bluetooth and Wi-Fi device interaction.",
    tech: "RUST · TAURI · REACT",
  },

  {
    number: "03",
    title: "HEY RG",
    category: "ANDROID / AI ASSISTANT",
    description:
      "An Android AI assistant focused on voice interaction, automation and intelligent mobile assistance.",
    tech: "KOTLIN · JETPACK COMPOSE · AI",
  },

  {
    number: "04",
    title: "AGROSENTINEL",
    category: "SMART AGRICULTURE",
    description:
      "A real-time irrigation and drought-warning system concept for smarter agricultural monitoring.",
    tech: "REACT · DATA · IOT CONCEPT",
  },

  {
    number: "05",
    title: "BANGALORE PINCODE EXPLORER",
    category: "WEB APPLICATION",
    description:
      "A full-stack application for exploring pincode and area information using a postal API.",
    tech: "REACT · EXPRESS · REST API",
  },
];

  return (
    <section className="work-section" id="work">

      <div className="work-header">
        <span>SELECTED WORK / 2026</span>
        <span>03 PROJECTS</span>
      </div>

      <Reveal>
      <div className="work-title">
        <div className="work-label">PROJECTS / EXPERIMENTS</div>

        <h2>
          SELECTED
          <span>WORK</span>
        </h2>

        <p>
          A collection of digital products, experiments and
          interactive experiences built with technology and creativity.
        </p>
      </div>
      </Reveal>

      <div className="projects-list">

        {projects.map((project, index) => (
  <Reveal key={project.number} delay={index * 0.12}>
    <article className="project-card">

            <div className="project-number">
              {project.number}
            </div>

            <div className="project-main">

              <div className="project-category">
                {project.category}
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech}
              </div>

            </div>

            <div className="project-arrow">
              ↗
            </div>

          </article>
          </Reveal>
        ))}

      </div>

      <div className="work-footer">
        <span>MORE PROJECTS</span>
        <span>SCROLL / EXPLORE ↓</span>
      </div>

    </section>
  );
}

export default Work;