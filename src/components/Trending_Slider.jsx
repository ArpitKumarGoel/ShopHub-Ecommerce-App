import React from "react";
import SlickSlider from "react-slick"; // 👈 SlickSlider import
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { items } from "../context/Data"; // 👈 Path check karein (data.js ya Data.js)

// Vite / ES Module issue fix ke liye fallback handling
const Slider = SlickSlider.default || SlickSlider;

const TrendingSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const displayItems = items || [];

  return (
    <div className="slider-container text-center my-5">
      <Slider {...settings}>
        {displayItems.length > 0 &&
          displayItems.map((product, index) => (
            <div key={index} className="slide">
              <img
                src={product.imgSrc || product.image}
                alt={product.title || product.name || "Product"}
                className="slide-image"
                style={{
                  height: "180px",
                  width: "180px",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default TrendingSlider;