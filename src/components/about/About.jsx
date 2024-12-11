import React from "react";
import aboutImg from '../../assets/about-img.jpg'
import { FiCheck } from "react-icons/fi";
import "./about.css";

const About = () => {
    return (
       <section className="about section" id="about">
        <div className="about_grid container">
            <div className="about_img-wrapper">
                <img src={aboutImg} alt="" className="about_img" />
            </div>

            <div className="about_content">
                <h2 className="section_title title_left" data-title='About Us'>
                    Fresh Quality And Organic Taste Coffee House 
                    For You
                </h2>
                

                <p className="about description"> 
                    Our coffee house is dedicated to offering you the perfect blend of flavor and aroma, 
                    crafted from the finest organic beans. 
                    Whether you're looking for a quick pick-me-up or a relaxing coffee experience, 
                    we ensure every cup is made with care and passion just for you.
                </p>
                

                <div className="about_details grid">
                    <p className="about_details-description">
                        <FiCheck className="about_details-icon" />
                            Enjoy coffee made from premium, organic beans.
                    </p>

                    <p className="about_details-description">
                        <FiCheck className="about_details-icon" />
                            We prioritize taste and sustainability in every cup.
                    </p>

                    <p className="about_details-description">
                        <FiCheck className="about_details-icon" />
                            Relax and savor your coffee in a welcoming atmosphere.
                    </p>
                </div>
                
            </div>
        </div>
       </section> 
    )
}

export default About