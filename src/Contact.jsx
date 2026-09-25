import "./Contact.css";
import Magnetic from "./components/Magnetic";

function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="contact-top">
        <span>08 / CONTACT</span>
        <span>LET'S CREATE</span>
      </div>

      <div className="contact-main">

        <p className="contact-label">
          HAVE AN IDEA?
        </p>

        <h2>
          LET'S
          <span>BUILD</span>
        </h2>

        <p className="contact-description">
  Have a project, idea or collaboration in mind?
  I'm interested in building useful products,
  creative web experiences and new technology.
</p>

        <Magnetic strength={0.18}>
  <a
    href="mailto:revanthhmgowda@gmail.com"
    className="contact-button"
  >
    START A CONVERSATION
    <span>↗</span>
  </a>
</Magnetic>

      </div>

      <div className="contact-links">

  <a
    href="https://github.com/Rev0nix"
    target="_blank"
    rel="noreferrer"
  >
    GITHUB
  </a>

  <a
    href="https://www.linkedin.com/in/revanth-hm-939476331"
    target="_blank"
    rel="noreferrer"
  >
    LINKEDIN
  </a>

  <a
    href="https://www.instagram.com/rev_lyrics_73/"
    target="_blank"
    rel="noreferrer"
  >
    INSTAGRAM
  </a>

  <a href="mailto:revanthhmgowda@gmail.com">
    EMAIL
  </a>

</div>

      <div className="contact-footer">

        <span>REVANTH H M © 2026</span>

        <span>
          DEVELOPER · CADET · CREATOR
        </span>

        <span>BACK TO TOP ↑</span>

      </div>

    </section>
  );
}

export default Contact;