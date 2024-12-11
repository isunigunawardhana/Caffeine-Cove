import React from "react";
import "./home.css";

const Home = () => {
    return (
        <section className="home" id='home'>
            <div className="home_container container">
                <div className="home_container">
                    <span className="home_subtitle">
                        Welcome To Caffeine Cove !
                    </span>
                    <h1 className="home_title">
                    Enjoy Great Coffee & Boost Your Day
                    </h1>
                    <p className="home_des">
                        Caffeine Cove is a cozy coffee shop offering rich brews, fresh beans, and a 
                        welcoming vibe for coffee lovers.

                    </p>
                    <br></br>
                    <br></br>

                    <div className="home_btns">
                        <a href="#menu" className="btn">
                            Check Menu
                        </a>

                        <a href="#reservation" className="btn home_btn">
                            Book Table
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home