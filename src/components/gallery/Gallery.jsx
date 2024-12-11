import React from "react";
import{gallery} from '../../Data'
import { BsPlusLg } from "react-icons/bs";
import './gallery.css';

const Gallery = () => {
    return (
        <section className="gallery section" id="gallery">
            <h2 className="section_title" data-title='Gallery'>
                    Our Photo Gallery
            </h2>

            <div className="gallery_grid container grid">
                {gallery.map(({img, title}, index) => {
                    return(
                        <div className="gallery_item" key={index}>
                            <img src={img} alt="" className="gallery_img" />

                            <a href="" className="gallery_icon">
                            <BsPlusLg />
                            </a>

                            <h3 className="gallery_title">{title}</h3>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Gallery