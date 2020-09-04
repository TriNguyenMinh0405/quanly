import React from 'react';
import './index.scss';
interface ImgProps {
    src: string;
}
const Img: React.FC<ImgProps> = ({ src }) => {
    return (
        <span className="a-img">
            <img src={src} alt={src} />
        </span>
    );
};
export default Img;
