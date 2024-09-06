import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselCom() {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    speed: 1000,
    arrows: false,
    autoplaySpeed: 2200,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          initialSlide: 5,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className=" h-auto border-b ">
      <div className="-1 -black h-20 grayscale  m-3">
        <Slider {...settings}>
          <div className="  mt-4 ">
            <img
              className="sm:h-12  pl-5"
              src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/brand03.png"
              alt="img"
            />
          </div>

          <div className="m-2  -black mt-4">
            <img
              className="sm:h-12  pl-5"
              src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/brand02.png"
              alt="img"
            />
          </div>

          <div className="m-2  mt-4">
            <img
              className="sm:h-12  pl-5"
              src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/brand04.png"
              alt="img"
            />
          </div>

          <div className="m-2  mt-4">
            <img
              className="sm:h-12  pl-5"
              src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/brand05.png"
              alt="img"
            />
          </div>

          <div className="m-2  mt-4">
            <img
              className="sm:h-12  pl-5"
              src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/brand06.png"
              alt="img"
            />
          </div>

          <div className="m-2  mt-4">
            <img
              className="sm:h-12  pl-5"
              src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/brand07.png"
              alt="img"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default CarouselCom;
