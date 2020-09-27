import React from 'react';
import { customModifier } from 'functions';
import './index.scss';
import Img from 'components/atoms/Img';
export interface CardMainProps {}
const CardMain: React.FC<CardMainProps> = (props) => {
    return (
        <div className={customModifier('m-cardmain')}>
            <Img
                src="https://i.ebayimg.com/images/g/HdwAAOSww9xZDA3a/s-l1600.jpg"
                modifier="default"
            />
        </div>
    );
};
export default CardMain;
