import React from "react";
import headerCSS from './../Header/Header.module.css'
function Header () {
    return(
        <>
        <div className={headerCSS.Header_wrapper}>
            <small className="section_title">Traditional & Higiene</small>
            <h1>For The <span>Enjoyment</span> <br /> of Scrumptious Fare</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam molestias perferendis quas minima ipsa cum cupiditate nobis natus non, voluptatibus, minus quod dolore culpa maiores at temporibus? Cum, autem.</p>
            <div className={headerCSS.header_btns}>
                <button>Explore Menu</button>
                <button>Book a Seat</button>
            </div>
            <div className={headerCSS.social}>
                <i className="ri-facebook-line"></i>
                <i className="ri-instagram-line"></i>
                <i className="ri-twitter-x-line"></i>
                <i className="ri-youtube-line"></i>
            </div>
        </div>
        </>
    )
}

export default Header