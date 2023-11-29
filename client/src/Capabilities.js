import { React, useState, useEffect, useRef } from "react";
import ship from "./ship.png";

function Capabilities() {
  const isMobile = window.innerWidth < 600;
  return (
    <div className="capabilities">
      <div className="new_banner3">
        <div className="banner_text">
          <h4 className="subhead">CAPABILITIES</h4>
          <h2 className="mainhead">WHAT WE DO</h2>
        </div>
      </div>
      <div className="capabilities-content-section">
        <div className="capabilities-container">
          {/* Available Stainless Steel Material section */}
          <section className="capabilities-info-section">
            <h2>Products</h2>
            <p>
              We can provide master coil, slit to size strip coil, and cut to
              length sheets. Our typical thickness ranges from .012” - .125”. In
              addition, we have the ability to offer specialty light gauge items
              (.004” -.011”) as well as hot rolled stainless steel plate and
              coil. Both of our domestic and international mill relationships
              allow us to provide prime material at competitive prices.
            </p>
          </section>

          {/* Finishes and Industries Serviced section */}
          <section
            className={
              isMobile ? "mobile-cap-flex" : "capabilities-flex-section"
            }
          >
            <div
              className={
                isMobile
                  ? "mobile-cap-info-flex"
                  : "capabilities-info-flex-section"
              }
            >
              <h2>Grades</h2>
              <p>
                <ul>
                  <li>304</li>
                  <li>304L</li>
                  <li>305</li>
                  <li>316</li>
                  <li>316L</li>
                  <li>430</li>
                </ul>
              </p>
            </div>
            <div
              className={
                isMobile
                  ? "mobile-cap-info-flex"
                  : "capabilities-info-flex-section"
              }
            >
              <h2>Finishes</h2>
              <p>
                <ul>
                  <li>2B</li>
                  <li>2D</li>
                  <li>#3/4 polish</li>
                  <li>Bright annealed</li>
                </ul>
              </p>
            </div>

            <div
              className={
                isMobile
                  ? "mobile-cap-info-flex"
                  : "capabilities-info-flex-section"
              }
            >
              <h2>Industries Serviced</h2>
              <p>
                <ul>
                  <li>Automotive</li>
                  <li>Kitchen appliances</li>
                  <li>Washroom accessories</li>
                  <li>Tubing manufactures</li>
                  <li>Stamping manufacturers</li>
                  <li>Roll Forming</li>
                  <li>Medical supplies manufacturers</li>
                  <li>Construction</li>
                </ul>
              </p>
            </div>
          </section>
          <img className="cap-image" src={ship} />
          {/* Material Sourcing section */}

          {/* <section className="capabilities-info-section">
            <h2>Material Sourcing</h2>
            <p></p>
          </section> */}
        </div>
      </div>
    </div>
  );
}

export default Capabilities;
