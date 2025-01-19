import React from "react";
import aboutCSS from './../About/About.module.css'
import aboutImg1 from './../../assets/images/about-us-1.jpg'
import aboutImg2 from './../../assets/images/about-us-2.jpg'

function About() {
    return (
        <>
            <div className={`${aboutCSS.About_wrapper} section`}>
                <div className={aboutCSS.aboutImg}>
                    <img src={aboutImg1} alt="about-imge" />

                </div>
                <div className={aboutCSS.aboutContent}>
                    <small className="section_title">About Us</small>
                    <h2>Simply Flawless ! <br /> Deliciously Fresh & <br /> Lush Flavors.</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, ipsum saepe! Nesciunt cum, error magnam possimus ipsa officiis voluptate delectus.</p>
                    <div className={aboutCSS.about_btns}>
                        <button>Read More </button>
                        <a href="#">
                            <i className="ri-phone-line"></i>
                            +6 333 6565 1111
                        </a>
                    </div>
                </div>
                <div className={aboutCSS.aboutImg}>
                    <img src={aboutImg2} alt="about-imge" />
                </div>
            </div>
        </>
    )
}

export default About