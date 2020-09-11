import React from 'react';
import { customModifier } from 'functions';
import './index.scss';
export interface HoverItemProps {}
const HoverItem: React.FC<HoverItemProps> = ({ children }) => {
    return (
        <div className={customModifier('m-hoveritem')}>
            {children}
            <ul className="m-hoveritem_dropdown">
                <li>Logout</li>
                <li>Infomation</li>
            </ul>
        </div>
    );
};
export default HoverItem;
