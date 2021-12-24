/** @format */

import React from "react";
import { Link } from "react-router-dom";
const Landindbodyimg = ({ src, path, text, bodyText }) => {
  return (
    <React.Fragment>
      <div className="landing-body-item">
        <img src={src} alt="delivery" />
        <span className="landing-b-img-text">{text}</span>
        <div className="landing-b-item-details">
          <p>{bodyText}</p>
          <Link to={path} className="item-tag">
            Know more
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Landindbodyimg;
