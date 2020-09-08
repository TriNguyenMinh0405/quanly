import React from 'react';
import './index.scss';
import Icon, { icon } from '../Icon';
interface IconButtonProps {
    icon: icon;
    handleClick?: () => void;
}
const IconButton: React.FC<IconButtonProps> = ({ icon, handleClick }) => {
    return (
        <span onClick={handleClick} className="a-iconbutton">
            <Icon modifier={icon} />
        </span>
    );
};
export default IconButton;
