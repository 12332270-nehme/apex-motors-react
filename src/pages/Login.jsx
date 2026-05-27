import Header from "../components/Header";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <Header />

      <hr width="100%" size="1" />

      <section>

        <h2 style={{ textAlign: "center" }}>
          Account Login
        </h2>

        <p style={{ textAlign: "center" }}>
          Enter your credentials to access your VIP profile.
        </p>

        <div style={{ textAlign: "center" }}>

          <form>

            <p>
              <label>Username:</label>
              <br />

              <input
                type="text"
                name="user"
                size="30"
                placeholder="Enter your username"
              />
            </p>

            <p>
              <label>Password:</label>
              <br />

              <input
                type="password"
                name="pass"
                size="30"
                placeholder="Enter your password"
              />
            </p>

            <br />

            <input
              type="submit"
              value="Login"
            />

            <input
              type="reset"
              value="Clear"
            />

            <p>
              Don't have an account?

              <a href="/signup">
                {" "}Sign up here
              </a>
            </p>

          </form>

        </div>

      </section>

      <br />
      <br />

      <Footer />
    </>
  );
}

export default Login;