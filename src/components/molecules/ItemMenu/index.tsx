import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { icon } from '../../atoms/Icon';
import Item from '../Item';
interface ItemMenuProps {
    to: string;
    icon: icon;
}
const ItemMenu: React.FC<ItemMenuProps> = ({ to, icon, children }) => {
    return (
        <Link to={to} className="m-itemmenu">
            <Item icon={icon}>{children}</Item>
        </Link>
    );
};
export default ItemMenu;
