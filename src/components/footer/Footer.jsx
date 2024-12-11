import React from "react";
import logo from "../../assets/logo.png";
import { FaRegEnvelope, 
    FaCaretRight, 
    FaFacebookF, 
    FaTwitter, 
    FaLinkedinIn,
    FaYoutube, 
} from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_grid container">
                <div className="footer_content">
                    <a href="/" className="footer_logo">
                        <img src={logo} alt="" className="footer_logo-img" />
                    </a>
                    
                    <p className="footer_descriptioon">
                    At Caffeine Cove, we’re passionate about crafting the finest coffee experiences. 
                    From premium beans to expert roasting, every cup is made with care and dedication. 
                    Join us for a journey of flavor, quality, and warmth.
                    We’d love to hear from you! Reach out for any questions, feedback, or collaborations.
                    </p>
                    <br></br>

                    <ul className="footer_contact">
                        <li className="footer_contact-item">
                            <AiOutlinePhone className="icon" /> +94 71 257 8692
                        </li>
                        <br></br>

                        <li className="footer_contact-item">
                            <MdOutlineLocationOn className="icon" /> No. 45, Lighthouse Street, Galle,Sri Lanka
                        </li>
                        <br></br>

                        <li className="footer_contact-item">
                            <FaRegEnvelope className="icon" />  caffeinecove@gmail.com
                        </li>
                    </ul>
                </div>

                <div className="footer_content">
                    <h3 className="footer_title">Quick Links</h3>

                    <ul className="footer_links">
                        <li>
                            <a href="#about" className="footer_link">
                                <FaCaretRight className="icon" /> About Us 
                            </a>
                        </li>

                        <li>
                            <a href="#menu" className="footer_link">
                                <FaCaretRight className="icon" /> Menu 
                            </a>
                        </li>

                        <li>
                            <a href="#features" className="footer_link">
                                <FaCaretRight className="icon" /> Features 
                            </a>
                        </li>

                        <li>
                            <a href="#gallery" className="footer_link">
                                <FaCaretRight className="icon" /> Gallery 
                            </a>
                        </li>

                        <li>
                            <a href="#reservation" className="footer_link">
                                <FaCaretRight className="icon" /> Reservation 
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer_content">
                    <h3 className="footer_title">Opening Hours</h3>

                    <div className="footer_opening_hour">
                        <ul className="opening_hour-list">
                            
                            <li className="opening_hour-item">
                                <span>Monday: </span>
                                <span>09AM - 06PM</span>
                            </li>
                            <br></br>

                            <li className="opening_hour-item">
                                <span>Tuesday: </span>
                                <span>09AM - 06PM</span>
                            </li>
                            <br></br>

                            <li className="opening_hour-item">
                                <span>Wednesday: </span>
                                <span>09AM - 06PM</span>
                            </li>
                            <br></br>

                            <li className="opening_hour-item">
                                <span>Thursday: </span>
                                <span>09AM - 06PM</span>
                            </li>
                            <br></br>

                            <li className="opening_hour-item">
                                <span>Friday: </span>
                                <span>09AM - 06PM</span>
                            </li>
                            <br></br>

                            <li className="opening_hour-item">
                                <span>Saturday: </span>
                                <span>09AM - 06PM</span>
                            </li>
                            <br></br>

                            <li className="opening_hour-item">
                                <span>Sunday: </span>
                                <span>09AM - 06PM</span>
                            </li>
                            
                        </ul>
                    </div>
                </div>

                <div className="footer_content">
                    <h3 className="footer_title">Newsletter</h3>

                    <p className="footer_description">
                        Follow us on social media and subscribe to our newsletter for the latest updates, offers, and coffee tips.
                    </p>

                    <form action="" className="subscribe_form">
                        <input type="text" 
                        placeholder="Your Email" 
                        className="form_input subscribe_input"/>

                        <button className="btn btn--flex subscribe_btn">
                            Subscribe Now 
                        </button>
                    </form>

                    <div className="footer_socials">
                        <h3 className="footer_social-follow">Follow Us:</h3>

                        <div className="footer_social-links">
                            <a href="/" className="footer_social-link">
                            <FaFacebookF />
                            </a>

                            <a href="/" className="footer_social-link">
                            <FaTwitter />
                            </a>

                            <a href="/" className="footer_social-link">
                            <FaLinkedinIn />
                            </a>

                            <a href="/" className="footer_social-link">
                            <FaYoutube />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <p className="copyright_text">
                &copy; Copyright 2024 <span>Caffeine Cove</span>. All Rights Reserved.
            </p>
        </footer>
        
    ) 
}

export default Footer;