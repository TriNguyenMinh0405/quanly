import React from 'react';
import { customModifier } from 'functions';
import Img from 'components/atoms/Img';
export interface CardMovieProps {
    src: string;
}
const CardMovie: React.FC<CardMovieProps> = ({ src }) => {
    return (
        <div className={customModifier('m-cardmovie')}>
            <Img src={src} modifier="default" />
        </div>
    );
};
export default CardMovie;
