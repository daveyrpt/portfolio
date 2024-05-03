import React from "react";
import "./about.css";
import AboutImg from "../../assets/profile_1.jpg";
import CV from "../../assets/daveyRupertResume.pdf";
import Info from "./Info";

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introduction</span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img"></img>

                <div className="about__data">
                    <Info />

                    <p className="about__description">
                        Experienced software developer passionate about creative solutions, focus on secure, user-centric websites. Enjoys chatting and reading. Thrives on new challenges, delivering impactful results.
                    </p>

                    <a download="Davey Rupert Resume" href={CV} className="button button--flex">Download Resume</a>
                </div>
            </div>
        </section>
    )
}

export default About