import Header from "../components/Header";
import Footer from "../components/Footer";

import royce from "../assets/images/royce.avif";
import bentley from "../assets/images/bently.avif";
import maybach from "../assets/images/maybac.jpg";
import aston from "../assets/images/astonmartin.png";

function Luxury() {
  return (
    <>
      <Header />

      <main>

        <h2 className="luxury-mode">
          Luxury Collection
        </h2>

        <div className="inventory-grid">

          <article>

            <h3>2026 Rolls-Royce Phantom</h3>

            <img
              src={royce}
              alt="Rolls-Royce Phantom"
            />

            <p>
              Unmatched presence and absolute tranquility.
            </p>

            <table>
              <tbody>
                <tr>
                  <td><b>Interior</b></td>
                  <td><b>Features</b></td>
                  <td><b>Price</b></td>
                </tr>

                <tr>
                  <td>Hand-crafted</td>
                  <td>Starlight</td>
                  <td>$460,000</td>
                </tr>
              </tbody>
            </table>

            <button type="button">
              Request VIP Appointment
            </button>

          </article>

          <article>

            <h3>2025 Bentley Flying Spur</h3>

            <img
              src={bentley}
              alt="Bentley Flying Spur"
            />

            <p>
              The definitive luxury grand touring sedan.
            </p>

            <table>
              <tbody>
                <tr>
                  <td><b>Interior</b></td>
                  <td><b>Features</b></td>
                  <td><b>Price</b></td>
                </tr>

                <tr>
                  <td>Diamond seats</td>
                  <td>Rotating Display</td>
                  <td>$210,000</td>
                </tr>
              </tbody>
            </table>

            <button type="button">
              Request VIP Appointment
            </button>

          </article>

          <article>

            <h3>2026 Maybach S-Class</h3>

            <img
              src={maybach}
              alt="Maybach S-Class"
            />

            <p>
              First-class private jet experience on wheels.
            </p>

            <table>
              <tbody>
                <tr>
                  <td><b>Interior</b></td>
                  <td><b>Features</b></td>
                  <td><b>Price</b></td>
                </tr>

                <tr>
                  <td>Nappa Leather</td>
                  <td>Chauffeur Pkg</td>
                  <td>$195,000</td>
                </tr>
              </tbody>
            </table>

            <button type="button">
              Request VIP Appointment
            </button>

          </article>

          <article>

            <h3>2025 Aston Martin DB11</h3>

            <img
              src={aston}
              alt="Aston Martin DB11"
            />

            <p>
              The gentlemen's luxury grand tourer.
            </p>

            <table>
              <tbody>
                <tr>
                  <td><b>Interior</b></td>
                  <td><b>Features</b></td>
                  <td><b>Price</b></td>
                </tr>

                <tr>
                  <td>Brogue detail</td>
                  <td>B&O Audio</td>
                  <td>$220,000</td>
                </tr>
              </tbody>
            </table>

            <button type="button">
              Request VIP Appointment
            </button>

          </article>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Luxury;