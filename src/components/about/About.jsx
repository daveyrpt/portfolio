import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import CV from "../../assets/John-Cv.pdf";
import Info from "./Info";

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About ME</h2>
            <span className="section__subtitle">My introduction</span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img"></img>

                <div className="about__data">
                    <Info />

                    <p className="about__description">
                        Experienced software developer passionate about crafting robust solutions. Skilled in [list relevant technologies] with a focus on [mention specific interests, e.g., backend development]. Strong believer in best practices and effective communication. Outside of coding, I enjoy [mention hobbies/interests]. Excited about tackling new challenges and delivering impactful results.
                    </p>

                    <a download="" href={CV} className="button button--flex">Download CV</a>
                </div>
            </div>
        </section>
    )
}

export default About