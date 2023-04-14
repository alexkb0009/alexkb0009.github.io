"use client";

import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";

export const Carousel = ({ imageFilenames }) => {
    const [isInitialized, setIsInitialized] = useState(false);

    const onInit = () => {
        setTimeout(() => setIsInitialized(true), 250);
    };

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        centerPadding: 10,
        onInit,
    };
    return (
        <div className="images-slideshow-container">
            <div className="images slideshow" style={{ opacity: isInitialized ? 1 : 0 }}>
                <Slider {...settings}>
                    {imageFilenames.map((src, i) => (
                        <div className="image-container" key={i}>
                            {/* <Image width={1102} height={620} src={src} alt={`Image ${i + 1}`} /> */}
                            <img src={src} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};
