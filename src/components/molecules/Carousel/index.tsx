import React from 'react';
import { customModifier } from 'functions';
import Slider from 'react-slick';
import CardMain from '../CardMain';
export interface CarouselProps {}
const Carousel: React.FC<CarouselProps> = (props) => {
    var settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        initialSlide: 0,
        customPaging: function (i) {
            return <span className="m-carousel_dots"></span>;
        },
        dotsClass: 'slick-dots',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className={customModifier('m-carousel')}>
            <Slider {...settings}>
                <div className="m-carousel_child">
                    <CardMain />
                </div>
                <div className="m-carousel_child">
                    <CardMain />
                </div>
                <div className="m-carousel_child">
                    <CardMain />
                </div>
            </Slider>
        </div>
    );
};
export default Carousel;
