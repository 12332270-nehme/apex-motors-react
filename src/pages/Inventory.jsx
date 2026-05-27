import Header from "../components/Header";
import Footer from "../components/Footer";

import porsche from "../assets/images/porche.avif";
import ferrari from "../assets/images/ferrari.jpg";
import lambo from "../assets/images/lambo.jpg";
import mclaren from "../assets/images/mac.avif";

import royce from "../assets/images/royce.avif";
import bentley from "../assets/images/bently.avif";
import maybach from "../assets/images/maybac.jpg";
import aston from "../assets/images/astonmartin.png";

import toyota from "../assets/images/t.jpg";
import honda from "../assets/images/honda.webp";
import subaru from "../assets/images/s.avif";
import mazda from "../assets/images/mazda1.avif";

function Inventory() {
  return (
    <>
      <Header />

      <section>
        <div className="inventory-grid">
          <h2>Our Premium Inventory</h2>
          <p>
            Explore the pinnacle of automotive engineering across our three core collections.
          </p>
        </div>

        <h3>Sport Performance</h3>

        <div className="inventory-grid">
          <article>
            <b>1. 2026 Porsche 911 GT3</b>
            <img src={porsche} alt="Porsche 911 GT3" />
            <p>The ultimate track weapon for the street.</p>

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

            <a href="/contact">
              <button type="button">Request VIP Appointment</button>
            </a>
          </article>

          <article>
            <b>2. 2025 Ferrari F8 Tributo</b>
            <img src={ferrari} alt="Ferrari F8 Tributo" />
            <p>A celebration of excellence and Italian performance.</p>

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

            <a href="/contact">
              <button type="button">Request VIP Appointment</button>
            </a>
          </article>

          <article>
            <b>3. 2026 Lamborghini Huracan</b>
            <img src={lambo} alt="Lamborghini Huracan" />
            <p>Pure naturally aspirated V10 symphony.</p>

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

            <a href="/contact">
              <button type="button">Request VIP Appointment</button>
            </a>
          </article>

          <article>
            <b>4. 2026 McLaren Artura</b>
            <img src={mclaren} alt="McLaren Artura" />
            <p>The next generation of hybrid performance.</p>

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

            <a href="/contact">
              <button type="button">Request VIP Appointment</button>
            </a>
          </article>
        </div>

        <h3>Luxury Collection</h3>

        <div className="inventory-grid">
          <article>
            <b>1. 2026 Rolls-Royce Phantom</b>
            <img src={royce} alt="Rolls-Royce Phantom" />
            <p>Unmatched presence and absolute tranquility.</p>

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

            <a href="/contact">
              <button type="button">Request VIP Appointment</button>
            </a>
          </article>

          <article>
            <b>2. 2025 Bentley Flying Spur</b>
            <img src={bentley} alt="Bentley Flying Spur" />
            <p>The definitive luxury grand touring sedan.</p>

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

            <a href="/contact">
              <button type="button">Request VIP Appointment</button>
            </a>
          </article>

          <article>
            <b>3. 2026 Maybach S-Class</b>
            <img src={maybach} alt="Maybach S-Class" />
            <p>First-class private jet experience on wheels.</p>

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

            <a href="/contact">
              <button type="button">Request VIP Appointment</button>
            </a>
          </article>

          <article>
            <b>4. 2025 Aston Martin DB11</b>
            <img src={aston} alt="Aston Martin DB11" />
            <p>The gentlemen's luxury grand tourer.</p>

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

            <a href="/contact">
              <button type="button">Request VIP Appointment</button>
            </a>
          </article>
        </div>

        <h3>Everyday Reliability</h3>

        <div className="inventory-grid">
          <article>
            <b>1. 2026 Toyota Land Cruiser</b>
            <img src={toyota} alt="Toyota Land Cruiser" />
            <p>Built to last, ready for any adventure.</p>

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

            <a href="/contact">
              <button type="button">Buy Now</button>
            </a>
          </article>

          <article>
            <b>2. 2025 Honda Accord</b>
            <img src={honda} alt="Honda Accord" />
            <p>The gold standard of family sedans.</p>

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

            <a href="/contact">
              <button type="button">Buy Now</button>
            </a>
          </article>

          <article>
            <b>3. 2026 Subaru Outback</b>
            <img src={subaru} alt="Subaru Outback" />
            <p>Rugged, practical, and incredibly safe.</p>

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

            <a href="/contact">
              <button type="button">Buy Now</button>
            </a>
          </article>

          <article>
            <b>4. 2025 Mazda CX-5</b>
            <img src={mazda} alt="Mazda CX-5" />
            <p>Premium driving feel in a casual package.</p>

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

            <a href="/contact">
              <button type="button">Buy Now</button>
            </a>
          </article>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Inventory;