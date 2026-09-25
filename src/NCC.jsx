import "./NCC.css";

const nccHighlights = [
  {
    number: "01",
    title: "39 KAR INF BN NCC",
    text: "Infantry Battalion",
  },

  {
    number: "02",
    title: "23 OCTOBER 2024",
    text: "NCC journey started",
  },

  {
    number: "03",
    title: "TSC / OT / IGC",
    text: "NCC training and selection experiences",
  },

  {
    number: "04",
    title: "DISCIPLINE",
    text: "Drill • Teamwork • Training • Responsibility",
  },
];

function NCC() {
  return (
    <section className="ncc-section" id="ncc">

      <div className="ncc-header">
        <span>05 / NCC EXPERIENCE</span>
        <span>CADET JOURNEY / 2024—</span>
      </div>

      <div className="ncc-hero">

        <div className="ncc-year">
          <span>STARTED</span>
          <strong>23</strong>
          <small>OCT / 2024</small>
        </div>

        <div className="ncc-title">
          <p>BEYOND CODE</p>

          <h2>
            NCC
            <span>JOURNEY.</span>
          </h2>

         <p className="ncc-description">
  My NCC journey began on 23 October 2024 with
  39 Kar Inf Bn NCC. The experience has introduced
  me to discipline, drill, teamwork, training and
  responsibility beyond the classroom.
</p>
        </div>

      </div>

      <div className="ncc-grid">

        {nccHighlights.map((item) => (
          <div className="ncc-card" key={item.number}>

            <span className="ncc-number">
              {item.number}
            </span>

            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>

            <span className="ncc-plus">+</span>

          </div>
        ))}

      </div>

      <div className="ncc-bottom">

  <div>
    <span>JOINED</span>
    <strong>23 / 10 / 2024</strong>
  </div>

  <div>
    <span>UNIT</span>
    <strong>39 KAR INF BN NCC</strong>
  </div>

  <div>
    <span>EXPERIENCE</span>
    <strong>TSC / OT / IGC</strong>
  </div>

</div>

    </section>
  );
}

export default NCC;