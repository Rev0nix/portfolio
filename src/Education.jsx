import "./Education.css";

const education = [
  {
    year: "01",
    level: "SCHOOL",
    name: "SRI ADICHUNCHANAGIRI VIDYAVARDAKA",
    description:
      "School education and the foundation of my academic journey.",
  },

  {
    year: "02",
    level: "PUC",
    name: "SRI ADICHUNCHANAGIRI VIDYAVARDAKA COMPOSITE PU COLLEGE",
    description:
      "Pre-university education and preparation for engineering.",
  },

  {
    year: "03",
    level: "ENGINEERING",
    name: "SRI VENKATESHWARA COLLEGE OF ENGINEERING",
    description:
      "BE — Information Science and Engineering.",
  },
];

function Education() {
  return (
    <section className="education-section" id="education">

      <div className="education-header">
        <span>06 / EDUCATION</span>
        <span>THE FOUNDATION</span>
      </div>

      <div className="education-intro">

        <div className="education-label">
          WHERE IT STARTED
        </div>

        <h2>
          MY
          <span>JOURNEY.</span>
        </h2>

        <p>
          From the classroom to engineering, every stage
          has been part of the journey that shaped how I
          learn, build and create.
        </p>

      </div>


      <div className="education-timeline">

        {education.map((item) => (
          <div className="education-item" key={item.year}>

            <div className="education-index">
              {item.year}
            </div>

            <div className="education-line">
              <div className="education-dot"></div>
            </div>

            <div className="education-content">

              <div className="education-level">
                {item.level}
              </div>

              <h3>
                {item.name}
              </h3>

              <p>
                {item.description}
              </p>

            </div>

            <div className="education-arrow">
              ↗
            </div>

          </div>
        ))}

      </div>


      <div className="education-footer">

        <span>LEARN / BUILD / EVOLVE</span>

        <span>INFORMATION SCIENCE & ENGINEERING</span>

      </div>

    </section>
  );
}

export default Education;