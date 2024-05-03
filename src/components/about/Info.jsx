import React from "react";

const Info = () => {
    return (
       <div className="about__info grid">
            <div className="about__box">
                <i className='bx bx-award about__icon'></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">1 Year Plus Working</span>
            </div>

            <div className="about__box">
                <i className='bx bx-briefcase-alt about__icon' ></i>
                <h3 className="about__title">Involve</h3>
                <span className="about__subtitle">10+ Projects</span>
            </div>

            <div className="about__box">
                <i className='bx bx-chat about__icon'></i>
                <h3 className="about__title">Consultation</h3>
                <span className="about__subtitle">Free</span>
            </div>

        </div>       
    )
}

export default Info