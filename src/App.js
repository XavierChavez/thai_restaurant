import React from "react";
import Navbar from "./Navbar";
import AboutUs from "./AboutMe";
import Footer from "./Footer";
import MapContainer from "./MapContainer";
import Menu from "./Menu";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <div className="app-container" id="top">
        <img
          src="./images/thai-basil-2996229_1920.jpg"
          alt="thai basil chicken"
          className="img-fluid"
        />
        <div class="centered">
          <h1>
            <i>Thai Dining</i>
          </h1>
          <h3>locally sourced | Organic | Inspired</h3>
        </div>
      </div>

      <AboutUs />
      <Menu />
      <MapContainer />
      <Footer />
    </>
  );
}

export default App;
