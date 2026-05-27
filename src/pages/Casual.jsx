import Header from "../components/Header";
import Footer from "../components/Footer";

import toyota from "../assets/images/t.jpg";
import honda from "../assets/images/honda.webp";
import subaru from "../assets/images/s.avif";
import mazda from "../assets/images/mazda1.avif";

function Casual() {
  return (
    <>
      <Header />

      <main>

        <h2 className="casual-mode">
          Casual Collection
        </h2>

        <div className="inventory-grid">

          <article>

            <h3>2026 Toyota Land Cruiser</h3>

            <img
              src={toyota}
              alt="Toyota Land Cruiser"
            />

            <p>
              Built to last, ready for any adventure.
            </p>

            <table>
              <tbody>
                <tr>
                  <td><b>Engine</b></td>
                  <td><b>Drivetrain</b></td>
                  <td><b>Price</b></td>
                </tr>

                <tr>
                  <td>2.4L Hybrid</td>
                  <td>4WD</td>
                  <td>$57,000</td>
                </tr>
              </tbody>
            </table>

            <button type="button">
              Buy Now
            </button>

          </article>

          <article>

            <h3>2025 Honda Accord</h3>

            <img
              src={honda}
              alt="Honda Accord"
            />

            <p>
              The gold standard of family sedans.
            </p>

            <table>
              <tbody>
                <tr>
                  <td><b>Engine</b></td>
                  <td><b>Drivetrain</b></td>
                  <td><b>Price</b></td>
                </tr>

                <tr>
                  <td>2.0L Hybrid</td>
                  <td>FWD</td>
                  <td>$32,000</td>
                </tr>
              </tbody>
            </table>

            <button type="button">
              Buy Now
            </button>

          </article>

          <article>

            <h3>2026 Subaru Outback</h3>

            <img
              src={subaru}
              alt="Subaru Outback"
            />

            <p>
              Rugged, practical, and incredibly safe.
            </p>

            <table>
              <tbody>
                <tr>
                  <td><b>Engine</b></td>
                  <td><b>Drivetrain</b></td>
                  <td><b>Price</b></td>
                </tr>

                <tr>
                  <td>2.4L Turbo</td>
                  <td>AWD</td>
                  <td>$35,000</td>
                </tr>
              </tbody>
            </table>

            <button type="button">
              Buy Now
            </button>

          </article>

          <article>

            <h3>2025 Mazda CX-5</h3>

            <img
              src={mazda}
              alt="Mazda CX-5"
            />

            <p>
              Premium driving feel in a casual package.
            </p>

            <table>
              <tbody>
                <tr>
                  <td><b>Engine</b></td>
                  <td><b>Drivetrain</b></td>
                  <td><b>Price</b></td>
                </tr>

                <tr>
                  <td>2.5L Turbo</td>
                  <td>AWD</td>
                  <td>$31,000</td>
                </tr>
              </tbody>
            </table>

            <button type="button">
              Buy Now
            </button>

          </article>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Casual;