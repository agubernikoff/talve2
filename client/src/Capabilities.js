import { React, useState, useEffect, useRef } from "react";
import ship from "./ship.png";

function Capabilities() {
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
            <h2>Available Stainless Steel Material</h2>
            <p>
              We have the ability to provide Type 304, 304L, 305, 316, 316L, and
              430 stainless steel material. We can provide master coil, slit to
              size strip coil, and cut to length sheets. Our typical thickness
              ranges from .012” - .125”. In addition, we have the ability to
              offer specialty light gauge items as well as hot rolled stainless
              steel plate.
            </p>
          </section>

          {/* Finishes and Industries Serviced section */}
          <section className="capabilities-flex-section">
            <div className="capabilities-info-section">
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
            <div className="capabilities-info-section">
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
                </ul>
              </p>
            </div>
            <img src={ship} />
          </section>

          {/* Material Sourcing section */}

          <section className="capabilities-info-section">
            <h2>Material Sourcing</h2>
            <p>
              Both of our domestic and international mill relationships allow us
              to provide prime material at competitive prices.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Capabilities;
