import { Link } from "react-router-dom";

function Header() {
  return (
    <header>

      <h1 id="brand-name">
        APEX MOTORS
      </h1>

      <p id="catchphrase">
        Where Engineering Meets Elegance.
      </p>

      <nav>

        <Link to="/">
          Home
        </Link>

        <Link to="/inventory">
          The Showroom
        </Link>

        <Link to="/sport">
          Sporty
        </Link>

        <Link to="/luxury">
          Luxury
        </Link>

        <Link to="/casual">
          Casual
        </Link>

        <Link to="/testdrive">
          Book a Test Drive
        </Link>

        <Link to="/contact">
          General Inquiry
        </Link>

        <Link to="/login">
          Login
        </Link>

        <Link to="/signup">
          Sign Up
        </Link>

      </nav>

    </header>
  );
}

export default Header;