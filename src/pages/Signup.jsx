import Header from "../components/Header";
import Footer from "../components/Footer";

function Signup() {
  return (
    <>
      <Header />

      <hr />

      <section>

        <h2 style={{ textAlign: "center" }}>
          Create Your VIP Account
        </h2>

        <div style={{ textAlign: "center" }}>

          <form>

            <fieldset style={{ width: "50%", margin: "auto" }}>

              <legend>
                Personal Information
              </legend>

              <p>
                First Name:
                <input
                  type="text"
                  name="fname"
                  placeholder="Jane"
                />
              </p>

              <p>
                Last Name:
                <input
                  type="text"
                  name="lname"
                  placeholder="Doe"
                />
              </p>

              <p>
                Email Address:
                <input
                  type="text"
                  name="email"
                  placeholder="jane@example.com"
                />
              </p>

              <p>
                Phone Number:
                <input
                  type="text"
                  name="phone"
                  placeholder="+961 -- --- ---"
                />
              </p>

            </fieldset>

            <br />

            <fieldset style={{ width: "50%", margin: "auto" }}>

              <legend>
                Account Security
              </legend>

              <p>
                Username:
                <input
                  type="text"
                  name="user"
                  placeholder="Choose a username"
                />
              </p>

              <p>
                Password:
                <input
                  type="password"
                  name="pass"
                  placeholder="Create a password"
                />
              </p>

              <p>
                Confirm Password:
                <input
                  type="password"
                  name="confirm"
                  placeholder="Repeat password"
                />
              </p>

            </fieldset>

            <br />

            <p>

              <input
                type="checkbox"
                name="terms"
                required
              />

              {" "}I agree to the Apex Motors Privacy Policy.

            </p>

            <p>

              <input
                type="submit"
                value="Register Account"
              />

              <input
                type="reset"
                value="Clear Form"
              />

            </p>

          </form>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Signup;