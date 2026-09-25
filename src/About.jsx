import "./About.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-top">
        <span>01 / ABOUT</span>
        <span>CREATIVE TECHNOLOGIST</span>
      </div>

      <div className="about-content">
        <div className="about-heading">
          <p className="about-label">WHO I AM</p>

          <h2>
            I BUILD
            <br />
            <span>DIGITAL</span>
            <br />
            EXPERIENCES.
          </h2>
        </div>

        <div className="about-text">
          <p className="about-big-text">
  I'm Revanth H M — an Information Science and Engineering
  student, developer, NCC cadet and creative editor.
</p>

<p>
  I enjoy turning ideas into practical digital products,
  experimenting with modern web technologies, building
  AI-powered applications and exploring creative visual work.
</p>

          <div className="about-details">

  <div>
    <span>BASED IN</span>
    <strong>BENGALURU, INDIA</strong>
  </div>

  <div>
    <span>EDUCATION</span>
    <strong>BE — INFORMATION SCIENCE & ENGINEERING</strong>
  </div>

  <div>
    <span>IDENTITY</span>
    <strong>DEVELOPER · CADET · CREATOR</strong>
  </div>

</div>
        </div>
      </div>
      <div className="about-line">
        <span>SCROLL TO DISCOVER</span>
        <span>↓</span>
      </div>
    </section>
  );
}