import "./Skills.css";

const skills = [
  {
    number: "01",
    name: "FRONTEND",
    items: "HTML · CSS · JAVASCRIPT · REACT",
  },

  {
    number: "02",
    name: "BACKEND",
    items: "NODE.JS · EXPRESS · REST API",
  },

  {
    number: "03",
    name: "DATABASE",
    items: "MONGODB · SQL",
  },

  {
    number: "04",
    name: "PROGRAMMING",
    items: "JAVA · PYTHON · JAVASCRIPT",
  },

  {
    number: "05",
    name: "MOBILE / DESKTOP",
    items: "ANDROID · KOTLIN · TAURI · RUST",
  },

  {
    number: "06",
    name: "TOOLS",
    items: "GIT · GITHUB · LINUX · VS CODE",
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-header">
        <span>03 / SKILLS</span>
        <span>TECHNOLOGY / CREATIVITY</span>
      </div>

      <div className="skills-title">
        <p>WHAT I WORK WITH</p>

        <h2>
          MY
          <br />
          <span>ARSENAL</span>
        </h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-item" key={skill.number}>
            <div className="skill-number">{skill.number}</div>

            <div className="skill-info">
              <h3>{skill.name}</h3>
              <p>{skill.items}</p>
            </div>

            <div className="skill-symbol">+</div>
          </div>
        ))}
      </div>

      <div className="skills-bottom">
        <span>ALWAYS LEARNING</span>
        <span>BUILD / BREAK / REBUILD</span>
      </div>
    </section>
  );
}