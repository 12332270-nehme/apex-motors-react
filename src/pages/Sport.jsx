import Header from "../components/Header";
import Footer from "../components/Footer";

import porsche from "../assets/images/porche.avif";
import ferrari from "../assets/images/ferrari.jpg";
import lambo from "../assets/images/lambo.jpg";
import mclaren from "../assets/images/mac.avif";

function Sport() {
  return (
    <>
      <Header />

      <main>

        <h2 className="category-title sporty-mode">
          Sport Performance
        </h2>

        <div className="inventory-grid">

          <article>

            <h3>2026 Porsche 911 GT3</h3>

            <img
              src={porsche}
              alt="Porsche 911 GT3"
            />

            <p>
              The ultimate track weapon for the street.
            </p>

            <table>
              <tbody>
                <tr>
                  <td><b>Engine</b></td>
                  <td><b>0-60 mph</b></td>
                  <td><b>Price</b></td>
                </tr>

                <tr>
                  <td>4.0L Boxer-6</td>
                  <td>3.2 Seconds</td>
                  <td>$185,000</td>
                </tr>
              </tbody>
            </table>

            <button type="button">
              Request VIP Appointment
            </button>

          </article>

          <article>

            <h3>2025 Ferrari F8 Tributo</h3>

            <img
              src={ferrari}
              alt="Ferrari F8 Tributo"
            />

            <p>
              A celebration of excellence and Italian performance.
            </p>

            <table>
              <tbody>
                <tr>
                  <td><b>Engine</b></td>
                  <td><b>0-60 mph</b></td>
                  <td><b>Price</b></td>
                </tr>

                <tr>
                  <td>3.9L V8</td>
                  <td>2.9 Seconds</td>
                  <td>$280,000</td>
                </tr>
              </tbody>
            </table>

            <button type="button">
              Request VIP Appointment
            </button>

          </article>

          <article>

            <h3>2026 Lamborghini Huracan</h3>

            <img
              src={lambo}
              alt="Lamborghini Huracan"
            />

            <p>
              Pure naturally aspirated V10 symphony.
            </p>

            <table>
              <tbody>
                <tr>
                  <td><b>Engine</b></td>
                  <td><b>0-60 mph</b></td>
                  <td><b>Price</b></td>
                </tr>

                <tr>
                  <td>5.2L V10</td>
                  <td>2.9 Seconds</td>
                  <td>$250,000</td>
                </tr>
              </tbody>
            </table>

            <button type="button">
              Request VIP Appointment
            </button>

          </article>

          <article>

            <h3>2026 McLaren Artura</h3>

            <img
              src={mclaren}
              alt="McLaren Artura"
            />

            <p>
              The next generation of hybrid performance.
            </p>

            <table>
              <tbody>
                <tr>
                  <td><b>Engine</b></td>
                  <td><b>0-60 mph</b></td>
                  <td><b>Price</b></td>
                </tr>

                <tr>
                  <td>3.0L V6 Hybrid</td>
                  <td>3.0 Seconds</td>
                  <td>$235,000</td>
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

export default Sport;