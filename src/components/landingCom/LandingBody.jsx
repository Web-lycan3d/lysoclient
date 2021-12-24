/** @format */

import React from "react";

import Landindbodyimg from "./Landindbodyimg";
import "./landingbody.styles.scss";

const LandingBody = () => {
  return (
    <div className="landing-body-container">
      <div className="landing-body-contents">
        <h2 className="landing-h2">
          SECTORS <span className="landing-span">WE SERVICE</span>{" "}
        </h2>
        <div className="landing-body-items">
          <Landindbodyimg
            text="Delivery"
            src="https://i.ibb.co/XJzB8sr/2021-02-04-T165145-Z-2126501675-MT1-CVMD41217305-RTRMADP-3-FEATURE-VACCINE-DRONE-1-min-1.webp"
            path="/sector/3?type=Medical Delivery"
            bodyText="Drones are set to become the future of the delivery sector with their higher convenience, lower operational cost, reduced delivery time and environment-friendly operations. Our drones are robust and are able to reach remote areas with ease while handling deliveries with greater care and security when compared to existing delivery methods."
          />
          <Landindbodyimg
            text="Energy"
            src="https://i.ibb.co/hZMwZnf/1-min-1.webp"
            path="/sector/1?type=Mining"
            bodyText="In the energy sector, drones are often used in performing inspection and predictive maintenance of critical systems such as oil and gas rigs, solar farms and wind turbines. Our drones are used in collaboration with energy companies to develop applications that can be customised and help facilitate different types of data collection obtaining real-time insights."
          />{" "}
          <Landindbodyimg
            text="Environment"
            src="https://i.ibb.co/rmm5d58/neostalgic-Dz-Uxa-Wweq-XI-unsplash-min-1.webp"
            path="/sector/2?type=Seed Plantation"
            bodyText="Drones are able to monitor different aspects of the environment and help to better understand and track the health of ecosystems and their inhabitants. Aerial imagery captured by our drones creates a complete, detailed picture of the environment and provides comprehensive insights and analysis."
          />{" "}
          <Landindbodyimg
            text="Infrastructure"
            src="https://i.ibb.co/TkKWyDQ/jared-murray-NSuufgf-BME-unsplash-min-1.webp"
            path="/sector/4?type=Construction"
            bodyText="In the infrastructure sector, drones are predominantly used for surveying and inspection. Companies that build and manage large infrastructure have considerable potential to use drone data to optimize their operations. Information collected from our drones provides accurate details of the exact situation and alignment of infrastructure and can save a great deal of time."
          />
          <Landindbodyimg
            text="Surveillance"
            src="https://i.ibb.co/NrF7Mr2/daniel-bernard-s67-PZz8-Xt3c-unsplash-1-min-1.webp"
            path="/sector/5?type=Security"
            bodyText="Through advanced imaging technology, drone surveillance is used to capture still images and video to gather information about specific targets that could include people, buildings and homes, terrain and even small objects. Our drones present a much easier, faster, and cheaper method of image and data collection and have a number of other key advantages over traditional surveillance."
          />
        </div>
      </div>
    </div>
  );
};

export default LandingBody;
