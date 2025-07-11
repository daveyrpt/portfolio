import React, { useState } from "react";
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualifcation</h2>
            <span className="section__subtitle">My personal Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                   <div className= { toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button qualification button--flex" } onClick={() => toggleTab(1)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>

                    <div className= { toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button qualification button--flex" } onClick={() => toggleTab(2)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>
                </div>

                <div className="qualification__sections">

                    <div className= { toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content" } >

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Developer</h3>
                                <span className="qualification__subtitle">Mirfalah Sdn Bhd</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Jan 2023 - Jun 2025
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Internship IT Support</h3>
                                <span className="qualification__subtitle">KSTI</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - 2021
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className= { toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content" } >

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Engineering Degree</h3>
                                <span className="qualification__subtitle">Universiti Malaysia Sarawak</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2017 - 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">CS Student</h3>
                                <span className="qualification__subtitle">Matrikulasi Labuan</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2016 - 2017
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </section>
    )
}

export default Qualification
