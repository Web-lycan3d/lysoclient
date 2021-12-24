import React, { Fragment } from 'react'
import landingvideo from './Artificial_intellegence_by_gleb.mp4'
import { MdKeyboardArrowDown } from "react-icons/md";
import './stigmi.styles.scss'
const Stigmi = () => {
    return (
        <Fragment>
            <div className="stigmi-1cont">
                <video autoPlay="true" loop="true" muted="true">
                    <source src={landingvideo} type="video/mp4"></source>
                </video>
                <header>
                    <span>STIGMI PLATFORM</span>
                    <span>COMING SOON</span>
                </header>
            </div>
            <div className="start-now">
                <MdKeyboardArrowDown className="down-arrow" />
            </div>
            <div className="stigmi-2cont">
                <img src="https://i.ibb.co/55xSPx8/Group-9469-min.png" alt="" />
                <span>Real Time Survey Data Processing Using Our Proprietary AI/ML Systems</span>
            </div>
            <div className="stigmi-3cont">
                <img src="https://i.ibb.co/31dPYR7/STIGMI-min.png" alt="" />
                <div className="stigmi-3cont-content">
                    <h1>STIGMI</h1>
                    <p>Utilizing our platform, you can quickly and easily upload your data to an automated cloud data processing service that takes advantage of Artificial Intelligence (AI) and Machine Learning (ML) to perform tasks and process the required information in real-time with instantaneous results.</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Stigmi
