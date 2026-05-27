import Header from "../components/Header";
import Footer from "../components/Footer";

import hero from "../assets/images/hero.webp";
import sporty from "../assets/images/sporty.avif";
import luxury from "../assets/images/luxury.jpg";
import casual from "../assets/images/casual.jpg";
import sportSound from "../assets/images/sport.wav";

function Home() {
  const playSound = () => {
    const audio = document.getElementById("apexRev");
    audio.play();
  };

  return (
    <>
      <Header />

      <hr width="100%" size="1" />

      <section>
        <h2 style={{ textAlign: "center" }}>
          Welcome to the Future of Performance
        </h2>

        <br />

        <div style={{ textAlign: "center" }}>
          <img
            src={hero}
            alt="Apex Motors Luxury Showroom Interior"
          />
        </div>
      </section>

      <br />

      <section>
        <blockquote style={{ textAlign: "center" }}>
          <h3>
            "The road is yours to command. The choice is yours to make."
          </h3>
        </blockquote>
      </section>

      <br />

      <section>
        <h2 style={{ textAlign: "center" }}>
          CHOOSE YOUR PATH
        </h2>

        <div className="path-container" style={{ textAlign: "center" }}>

          <div className="path-card">
            <a href="/sport">
              <img src={sporty} alt="Sport Performance" />
              <h3>SPORT</h3>
            </a>

            <ul>
              <li>High-RPM Engines</li>
              <li>Track-Ready Suspension</li>
            </ul>
          </div>

          <div className="path-card">
            <a href="/luxury">
              <img src={luxury} alt="Luxury Collection" />
              <h3>LUXURY</h3>
            </a>

            <ul>
              <li>Bespoke Interiors</li>
              <li>Advanced Soundproofing</li>
            </ul>
          </div>

          <div className="path-card">
            <a href="/casual">
              <img src={casual} alt="Casual Comfort" />
              <h3>CASUAL</h3>
            </a>

            <ul>
              <li>Reliability</li>
              <li>Pocket friendly</li>
            </ul>
          </div>

        </div>
      </section>

      <br />
      <br />

      <section className="apex-experience">
        <div className="apex-container">

          <h2 className="apex-title">
            THE APEX EXPERIENCE
          </h2>

          <blockquote className="apex-quote">
            "A vehicle is not just a machine; it is a symphony of power."
          </blockquote>

          <audio id="apexRev">
            <source src={sportSound} type="audio/wav" />
          </audio>

          <p className="apex-cta">
            Are you ready to hear the future of performance?
          </p>

          <button
            type="button"
            className="engine-btn"
            onClick={playSound}
          >
            <span className="gold-text">ACTIVATE</span> ENGINE TO FEEL THE POWER
          </button>

          <div className="audio-badge">
            <span className="v10-text">
              <strong>Immersive</strong> V10 Audio Profile
            </span>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;