import React from 'react';
import './index.scss';
import { customModifier } from '../../../functions';

interface ImgProps {
    src: string;
    modifier?: 'img-home' | 'default';
}
const Img: React.FC<ImgProps> = ({ src, modifier }) => {
    return (
        <React.Fragment>
            {modifier === 'default' ? (
                <img
                    onError={(e) => {
                        e.currentTarget.src =
                            'http://via.placeholder.com/200x300';
                    }}
                    src={src}
                    alt={src}
                    className="a-img_default"
                />
            ) : (
                <span className={customModifier('a-img', modifier!)}>
                    <img src={src} alt={src} />
                </span>
            )}
        </React.Fragment>
    );
};
export default Img;
