import React from 'react';
import { customModifier } from 'functions';
import Slider from 'react-slick';
export interface CarouselProps {
    respon?: boolean;
    slideShow?: number;
    dots?: boolean;
    timeSpeed?: number;
}
const Carousel: React.FC<CarouselProps> = ({
    children,
    respon,
    slideShow,
    dots,
    timeSpeed,
}) => {
    var settings = {
        dots: dots,
        autoplay: true,
        infinite: true,
        autoplaySpeed: timeSpeed ? timeSpeed : 10000,
        speed: 500,
        slidesToShow: slideShow ? slideShow : 1,
        slidesToScroll: slideShow ? slideShow : 1,
        arrows: false,
        initialSlide: 0,
        customPaging: function (i) {
            return <span className="m-carousel_dots"></span>;
        },
        dotsClass: 'slick-dots',
        responsive: respon
            ? [
                  {
                      breakpoint: 1199,
                      settings: {
                          slidesToShow: 5,
                          slidesToScroll: 5,
                          infinite: true,
                          dots: true,
                      },
                  },
                  {
                      breakpoint: 991,
                      settings: {
                          slidesToShow: 3,
                          slidesToScroll: 3,
                          initialSlide: 3,
                      },
                  },
                  {
                      breakpoint: 767,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 2,
                      },
                  },
                  {
                      breakpoint: 600,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 2,
                      },
                  },
              ]
            : null,
    };
    return (
        <div className={customModifier('m-carousel')}>
            <Slider {...settings}>{children}</Slider>
        </div>
    );
};
export default Carousel;
