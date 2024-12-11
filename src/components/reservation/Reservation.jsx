import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import shapeTwo from "../../assets/shape-2.png";
import shapeThree from "../../assets/shape-3.png";
import "./resrvation.css";

const Reservation = () => {
    return (
        <section className="reservation container" id="reservation">
            <h2 className="section_title" data-title='Reservation'>
                Book A Table 
            </h2>

            <form action=" " className="reservation_form grid">
                <div className="form_input-div">
                    <input type="text" placeholder="Your Name" className="form_input" />
                </div>

                <div className="form_input-div">
                    <input type="email" placeholder="Your Email Address" className="form_input" />
                </div>

                <div className="form_input-div">
                    <input type="text" placeholder="Your Phone No:" className="form_input" />
                </div>

                <div className="form_input-div">
                    <input type="text" placeholder="Date Ex: DD/MM/YY" className="form_input" />
                </div>

                <div className="form_input-div">
                    <input type="text" placeholder="Time Ex: 03:25PM" className="form_input" />
                </div>

                <div className="form_input-div">
                    <input type="text" placeholder="Number of People" className="form_input" />
                </div>

                <div className="form_input-div form_input-textarea">
                    <textarea placeholder="Your Message" className="form_input">
                    </textarea>
                </div>

                <button className="btn btn--flex reservation_btn">
                    <FaRegBookmark /> Book A Table 
                </button>
            </form>

            <img src={shapeTwo} alt="" className="shape_two" />
            <img src={shapeThree} alt="" className="shape_three" />
        </section>
    )
}

export default Reservation