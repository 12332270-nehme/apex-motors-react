import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Header />

      <hr width="100%" size="1" />

      <section>

        <h2 style={{ textAlign: "center" }}>
          Secure Your Appointment
        </h2>

        <p style={{ textAlign: "center" }}>
          Please provide your details, and our concierge team will reach out to confirm your slot.
        </p>

        <div style={{ textAlign: "center" }}>

          <form>

            <p>
              <b>Full Name:</b>
              <br />

              <input
                type="text"
                name="fullname"
                size="40"
                placeholder="e.g. John Doe"
              />
            </p>

            <p>

              <b>How should we reach you?</b>

              <br />

              <input
                type="radio"
                name="contact"
                value="email"
              />

              {" "}Email

              <input
                type="radio"
                name="contact"
                value="phone"
              />

              {" "}Phone Call

              <input
                type="radio"
                name="contact"
                value="whatsapp"
              />

              {" "}WhatsApp

            </p>

            <br />

            <p>

              <b>Preferred Appointment Window:</b>

              <br />

              <select name="time_slot">

                <option value="morning">
                  Morning (9:00 AM - 12:00 PM)
                </option>

                <option value="afternoon">
                  Afternoon (12:00 PM - 4:00 PM)
                </option>

                <option value="evening">
                  Evening (4:00 PM - 8:00 PM)
                </option>

              </select>

            </p>

            <br />

            <p>

              <b>Additional Interests:</b>

              <br />

              <input
                type="checkbox"
                name="service"
                value="finance"
              />

              {" "}Financing Options

              <input
                type="checkbox"
                name="service"
                value="trade"
              />

              {" "}Trade-In Appraisal

              <input
                type="checkbox"
                name="service"
                value="insurance"
              />

              {" "}Premium Insurance

            </p>

            <br />

            <p>

              <b>Special Requests (Optional):</b>

              <br />

              <textarea
                name="requests"
                rows="4"
                cols="50"
                placeholder="Any specific requirements..."
              />

            </p>

            <br />

            <input
              type="submit"
              value="Confirm Appointment"
            />

            <input
              type="reset"
              value="Clear Form"
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

export default Contact;