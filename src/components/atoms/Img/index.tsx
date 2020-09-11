import React from 'react';
import './index.scss';
import { customModifier } from '../../../functions';

interface ImgProps {
    src: string;
    modifier?: 'img-home';
}
const Img: React.FC<ImgProps> = ({ src, modifier }) => {
    return (
        <span className={customModifier('a-img', modifier!)}>
            <img src={src} alt={src} />
        </span>
    );
};
export default Img;
