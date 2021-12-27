/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.styles.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
const Navbar = () => {
  const [sectorDrowpDown, setsectorDrowpDown] = useState(false);
  const [navState, setNavState] = useState(false);

  const handleSectorDropDown = () => {
    setsectorDrowpDown(true);
  };
  return (
    <div className="nav-container">
      <div className="nav-contents">
        <div className="brand-logo">
          <Link to="/">
            <img src="https://i.ibb.co/f0Ggrj7/lyso-min.png" alt="Lyso Logo" />
          </Link>
        </div>
        <div className="nav-items">
          <ul className="main-ul">
            <li className="main-li" onClick={() => setsectorDrowpDown(false)}>
              <Link to="/survey" className="li">
                Survey
              </Link>
            </li>
            <li
              className="main-li li-sector"
              title="Sectors"
              onClick={() => {
                setsectorDrowpDown(!sectorDrowpDown);
              }}>
              Sectors
              <div
                className={
                  sectorDrowpDown
                    ? "dropdown-sector dropdown-sector-active"
                    : "dropdown-sector"
                }>
                <ul className="sector-ul">
                  <li className="sector-li" onClick={handleSectorDropDown}>
                    <Link to="/sector/1?type=Mining"> Energy</Link>
                  </li>
                  <li className="sector-li" onClick={handleSectorDropDown}>
                    <Link to="/sector/2?type=Seed Plantation">Environment</Link>
                  </li>
                  <li className="sector-li" onClick={handleSectorDropDown}>
                    <Link to="/sector/3?type=Medical Delivery">Delivery</Link>
                  </li>
                  <li className="sector-li" onClick={handleSectorDropDown}>
                    <Link to="/sector/4?type=Construction">Infrastructure</Link>
                  </li>
                  <li className="sector-li" onClick={handleSectorDropDown}>
                    <Link to="/sector/5?type=Security">Surveillance</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="main-li" onClick={() => setsectorDrowpDown(false)}>
              {" "}
              <Link className="li" to="/terrain">
                3D Model
              </Link>{" "}
            </li>
            <li className="main-li" onClick={() => setsectorDrowpDown(false)}>
              {" "}
              <Link className="li" to="/data_processing">
                Data Processing
              </Link>{" "}
            </li>
            <li className="main-li" onClick={() => setsectorDrowpDown(false)}>
              {" "}
              <Link className="li" to="/stigmi">
                Stigmi
              </Link>{" "}
            </li>
          </ul>
        </div>{" "}
        <div className="nav-bar">
          <div
            className={navState ? "menu menu-active" : "menu"}
            onClick={() => setNavState(!navState)}>
            <span className="menu-green"></span>
            <span className="menu-green"></span>
            <span className="menu-green"></span>
          </div>
          <div
            className={
              navState
                ? "nav-bar-details nav-bar-details-active "
                : "nav-bar-details"
            }>
            <ul className="nav-bar-ul">
              <li className="menu-li-flex">
                <Link
                  to="/survey"
                  className="nav-links"
                  onClick={() => setNavState(!navState)}>
                  Survey
                </Link>
              </li>
              <li
                className="menu-li-flex"
                onClick={() => {
                  setsectorDrowpDown(!sectorDrowpDown);
                }}>
                Sectors <MdKeyboardArrowDown className="down-arrow" />
                <div
                  className={
                    sectorDrowpDown
                      ? "dropdown-sector dropdown-sector-active"
                      : "dropdown-sector"
                  }>
                  <motion.ul layout className="sector-ul">
                    <li
                      className="sector-li"
                      onClick={() => {
                        setsectorDrowpDown(!sectorDrowpDown);
                        setNavState(!navState);
                      }}>
                      <Link to="/sector/1?type=Mining"> Energy</Link>
                    </li>
                    <li
                      className="sector-li"
                      onClick={() => {
                        setsectorDrowpDown(!sectorDrowpDown);
                        setNavState(!navState);
                      }}>
                      <Link to="/sector/2?type=Seed Plantation">
                        Enviroment
                      </Link>
                    </li>
                    <li
                      className="sector-li"
                      onClick={() => {
                        setsectorDrowpDown(!sectorDrowpDown);
                        setNavState(!navState);
                      }}>
                      <Link to="/sector/3?type=Medical Delivery">Delivery</Link>
                    </li>
                    <li
                      className="sector-li"
                      onClick={() => {
                        setsectorDrowpDown(!sectorDrowpDown);
                        setNavState(!navState);
                      }}>
                      <Link to="/sector/4?type=Construction">
                        Infrastructure
                      </Link>
                    </li>
                    <li
                      className="sector-li"
                      onClick={() => {
                        setsectorDrowpDown(!sectorDrowpDown);
                        setNavState(!navState);
                      }}>
                      <Link to="/sector/5?type=Security">Survelience</Link>
                    </li>
                  </motion.ul>
                </div>
              </li>
              <li className="menu-li-flex">
                <Link
                  to="/terrain"
                  className="nav-links"
                  onClick={() => setNavState(!navState)}>
                  3D Model
                </Link>
              </li>
              <li className="menu-li-flex">
                <Link
                  to="/data_processing"
                  className="nav-links"
                  onClick={() => setNavState(!navState)}>
                  Data Processing
                </Link>
              </li>
              <li className="menu-li-flex">
                <Link
                  to="/stigmi"
                  className="nav-links"
                  onClick={() => setNavState(!navState)}>
                  Stigmi
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
