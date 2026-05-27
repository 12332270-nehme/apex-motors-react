import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/style.css";

import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import Sport from "./pages/Sport";
import Luxury from "./pages/Luxury";
import Casual from "./pages/Casual";
import TestDrive from "./pages/TestDrive";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/inventory"
          element={<Inventory />}
        />

        <Route
          path="/sport"
          element={<Sport />}
        />

        <Route
          path="/luxury"
          element={<Luxury />}
        />

        <Route
          path="/casual"
          element={<Casual />}
        />

        <Route
          path="/testdrive"
          element={<TestDrive />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;