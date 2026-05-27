import Header from "../components/Header";
import Footer from "../components/Footer";

function TestDrive() {
  return (
    <>
      <Header />

      <hr width="100%" size="1" />

      <section>

        <h2 style={{ textAlign: "center" }}>
          Schedule Your Test Drive
        </h2>

        <p style={{ textAlign: "center" }}>
          Take the wheel of a masterpiece. Please complete the driver verification below.
        </p>

        <div style={{ textAlign: "center" }}>

          <form>

            <fieldset style={{ width: "60%", margin: "auto" }}>

              <legend>
                <b>Driver Verification</b>
              </legend>

              <p>
                Full Legal Name:
                <input
                  type="text"
                  name="driver_name"
                  size="40"
                />
              </p>

              <p>
                Driving License Number:
                <input
                  type="text"
                  name="license_id"
                  size="40"
                />
              </p>

              <p>
                Age:

                <input
                  type="number"
                  name="age"
                  min="18"
                  max="99"
                />

                <small> (Must be 18+)</small>

              </p>

            </fieldset>

            <br />

            <p>

              <b>
                Which vehicle are you interested in driving?
              </b>

              <br />

              <select name="test_vehicle">

                <optgroup label="Sport Performance">
                  <option>Porsche 911 GT3</option>
                  <option>Ferrari 296 GTB</option>
                </optgroup>

                <optgroup label="Luxury Collection">
                  <option>Rolls-Royce Phantom</option>
                  <option>Bentley Continental GT</option>
                </optgroup>

              </select>

            </p>

            <p>

              <b>Preferred Track/Location:</b>

              <br />

              <input
                type="radio"
                name="loc"
                value="showroom"
              />

              {" "}Main Showroom

              <input
                type="radio"
                name="loc"
                value="track"
              />

              {" "}Private Track Experience

              <input
                type="radio"
                name="loc"
                value="home"
              />

              {" "}Home Delivery Drive

            </p>

            <p>

              Preferred Date:

              <input
                type="date"
                name="drive_date"
              />

            </p>

            <br />

            <p>

              <input
                type="checkbox"
                name="insurance_agree"
                required
              />

              {" "}I agree to the test drive insurance terms and liability waiver.

            </p>

            <br />

            <input
              type="submit"
              value="Request Test Drive"
            />

            <input
              type="reset"
              value="Reset Form"
            />

          </form>

        </div>

      </section>

      <br />
      <br />

      <Footer />
    </>
  );
}

export default TestDrive;