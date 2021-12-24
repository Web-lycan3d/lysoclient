/** @format */

import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import landingmap from "./g.svg";
import {useHistory} from "react-router-dom";

const LandingMap = () => {
  const history = useHistory();
  return (
    <div className="landing-map-container">
      {/* check custom styles for button and h2 */}

      <div className="landing-map-contents">
        <h2 className="landing-h2">
          3D PRINT <span className="landing-span">YOUR SURVEY DATA</span>{" "}
        </h2>
        <div className="landing-map-flex">
          <div className="landing-map-text">
            <h2>Create physical models of your survey data in no time!</h2>
            <span>
              We offer you the ability to scan your survey data and use it to
              create three dimensional scaled models for visualisation and
              communication. The application of 3d modeling by Lyso involves
              manipulating the point cloud data into a 3D model suitable for
              print. The point cloud is turned into a surface as a Digital
              Terrain Model (DTM) and you are subsequently provided with your
              very own 3D printed terrain.
            </span>
            <div className="landing-map-image landing-mapmobileimg">
              <img
                src="https://i.ibb.co/0h7mmLn/terrain-map-indonesia-3d-map-generator-atlas-1024x742.webp"
                alt="map"
              />
            </div>
            <div className="landing-map-box">
              <img src={landingmap} alt="map" />
              <div className="landing-map-box-text">
                <span className="landing-map-b-span">Upload</span>
                <span className="landing-map-b-span">
                  Optimise & Manufacture
                </span>
                <span className="landing-map-b-span">Deliver</span>
              </div>
            </div>
            <button className="custom-btn" onClick={() => history.push('/terrain')}>
              <AiFillThunderbolt className="thunder-icon" />
              Get Started
            </button>{" "}
          </div>

          <div className="landing-map-image">
            <img
              src="https://i.ibb.co/0h7mmLn/terrain-map-indonesia-3d-map-generator-atlas-1024x742.webp"
              alt="map"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingMap;
