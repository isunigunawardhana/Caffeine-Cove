import React from "react";
import { testimonials } from "../../Data";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import {FaStar} from 'react-icons/fa';
import { VscTriangleDown } from "react-icons/vsc";
import './testimonials.css';

const Testimonials = () => {
    return (
        <section className="testimonials container section" id="testimonials">
            <h2 className="section_title" data-title='Testimonials'>
                What Client Say's  
            </h2>

            <Swiper 
                spaceBetween={30}
                pagination={{clickable: true}} 
                breakpoints={{
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                modules={[Pagination]} 
            >
               {testimonials.map(({img, title, service, description}, index) => {
                    return (
                        <SwiperSlide className="testimonial_item" key={index}>
                            <div className="testimonial_qoute">
                                <p className="testimonial_description">
                                    {description}
                                </p>
                                <VscTriangleDown className="testimonial_icon" />
                            </div>

                            <div className="testimonial_content">
                                <div className="testimonial_img-wrapper">
                                    <img src={img} alt="" className="testimonial_img" />
                                </div>

                                <div>
                                    <h3 className="testimonial_title">{title}</h3>
                                    <p className="testimonial_service">{service}</p>

                                    <div className="testimonial_rating">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
               })} 
            </Swiper>
        </section>
    )
}

export default Testimonials