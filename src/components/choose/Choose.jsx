import React from "react";
import chooseImg from '../../assets/choose.jpg';
import coffeeMug from '../../assets/coffee-mug.svg';
import coffeeBeans2 from '../../assets/coffee-beans-2.svg';
import coffeeBeans3 from '../../assets/coffee-beans-3.svg';
import "./choose.css";

const Choose = () => {
    return (
        <section className="choose section">
            <div className="choose_grid container grid">
                <div className="choose_content">
                    <h2 className="section_title title_left" data-title='Why Choose Us'>
                        Caffeine Cove Most Out of Your Favorite & Taste Coffee
                        House
                    </h2>

                    <p className="choose_description"> 
                        At Caffeine Cove, we prioritize quality and freshness. 
                        Our coffee is made from premium, organic beans, expertly roasted 
                        to deliver rich and balanced flavors in every cup. 
                        With a commitment to sustainability and exceptional customer service, 
                        we ensure every experience is as satisfying as your favorite brew.
                    </p>

                    <div className="choose_details grid">
                        <div className="choose_details-item">
                            <div className="choose_details-img-wrapper">
                                <img src={coffeeMug} alt="" className="choose_details-img" />
                            </div>

                            <div>
                                <h3 className="choose_details-title">
                                    Awesome Aroma
                                </h3>
                                <p className="choose_details-description"> 
                                    Immerse yourself in the rich, inviting aroma of freshly brewed coffee. 
                                    Every cup at Caffeine Cove delivers a heavenly blend of warm, earthy, 
                                    and sweet notes that awaken your senses and set the perfect mood for your day.
                                </p>
                            </div>
                        </div>


                        <div className="choose_details-item">
                            <div className="choose_details-img-wrapper">
                                <img src={coffeeBeans2} alt="" className="choose_details-img" />
                            </div>

                            <div>
                                <h3 className="choose_details-title">
                                    Pure Grades
                                </h3>
                                <p className="choose_details-description">   
                                    We use only the highest-quality, pure coffee beans, 
                                    carefully selected for their exceptional flavor and aroma. 
                                    Every batch meets the finest standards, 
                                    ensuring a premium experience in every sip.
                                </p>
                            </div>
                        </div>

                        <div className="choose_details-item">
                            <div className="choose_details-img-wrapper">
                                <img src={coffeeBeans3} alt="" className="choose_details-img" />
                            </div>

                            <div>
                                <h3 className="choose_details-title">
                                    Healthy Coffee
                                </h3>
                                <p className="choose_details-description">     
                                    Crafted with care, our coffee is made from organic, 
                                    chemical-free beans, rich in antioxidants and nutrients. 
                                    Enjoy a flavorful cup that's as good for your body as it is for your taste buds.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

               <img src={chooseImg} alt="" className="choose_img" /> 
            </div>
        </section>
    )
}

export default Choose