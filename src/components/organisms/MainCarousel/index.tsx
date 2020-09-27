import React from 'react';
import { customModifier } from 'functions';
import Carousel from 'components/molecules/Carousel';
import CardMain from 'components/molecules/CardMain';
export interface MainCarouselProps {}
const MainCarousel: React.FC<MainCarouselProps> = ({ children }) => {
    return (
        <div className={customModifier('o-maincarousel')}>
            <Carousel dots>
                {['1', '2'].map((item, index) => {
                    return <CardMain key={index} />;
                })}
            </Carousel>
        </div>
    );
};
export default MainCarousel;
