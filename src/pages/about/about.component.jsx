import React , {Fragment} from 'react'

import './about.styles.scss'

const About = () => {
    return (
        <Fragment>
            <div className="about-container">
                <h3>About Us</h3>
                <h1>At <span>{' '}LYSO</span>, we survey so you can add value to <span>your project.</span></h1>
                <div className="about-content">
                    <div className="about-text">
                        <p><b>LYSO</b> is India's premier UAV service provider that develops UAV based solutions to provide actionable intelligence from aerial data. Based out of Bangalore, we provide services throughout the country. Our capabilities and Intellectual property across the entire UAV technology stack of Hardware, Software and analytics enable us to build deeply customized aerial remote sensing tools and provide end to end solutions for surveying, inspection & monitoring of assets in industries such as Oil & Gas , Mining, Construction and Agriculture.</p>
                    </div>
                    <div className="about-img">
                        <img src="https://i.ibb.co/FXv9w1K/Group-9504-min.png" alt="" />
                    </div>
                </div>
                <div className="dotted-line">
                    <img src="https://i.ibb.co/4ms6tM8/Path-224424-min.png" alt="" />
                </div>
            </div>
        </Fragment>
    )
}

export default About
