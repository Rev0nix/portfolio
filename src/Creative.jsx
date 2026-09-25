import "./Creative.css";

function Creative() {
  return (
    <section className="creative-section" id="creative">

      <div className="creative-header">
        <span>07 / CREATIVE</span>
        <span>VIDEO / EDITING / VISUALS</span>
      </div>

      <div className="creative-intro">

        <div className="creative-label">
          ANOTHER SIDE OF ME
        </div>

        <h2>
          FRAME
          <span>BY FRAME.</span>
        </h2>

        <p>
  I explore video editing, anime edits, reels and
  visual storytelling through music, motion and timing.
  Creative work gives me another way to experiment
  beyond software development.
</p>
      </div>

      <div className="creative-grid">

        <div className="creative-feature">
          <div className="feature-overlay">
            <span>01 / SHOWREEL</span>

            <div className="play-button">
              ▶
            </div>

            <h3>
              VISUAL
              <br />
              STORIES
            </h3>
          </div>
        </div>

        <div className="creative-side">

          <div className="creative-card creative-card-one">
            <span>02</span>
            <strong>VIDEO EDITING</strong>
            <p>Rhythm · Music · Motion</p>
          </div>

          <div className="creative-card creative-card-two">
            <span>03</span>
            <strong>SHORT FORM</strong>
            <p>Reels · Anime · Visual edits</p>
          </div>

          <div className="creative-card creative-card-three">
            <span>04</span>
            <strong>EXPERIMENTS</strong>
            <p>Color · Sound · Storytelling</p>
          </div>

        </div>

      </div>

      <div className="creative-social">

  <div>
    <span>CREATIVE HANDLE</span>
    <strong>@rev_lyrics_73</strong>
  </div>

  <a
    href="#"
    className="creative-link"
  >
    VIEW INSTAGRAM ↗
  </a>

</div>

      <div className="creative-footer">
        <span>EDIT / CREATE / REPEAT</span>
        <span>VISUAL STORYTELLING</span>
      </div>

    </section>
  );
}

export default Creative;