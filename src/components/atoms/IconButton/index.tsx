import React from 'react';
import './index.scss';
import { customModifier } from 'functions';
import Icon, { icon } from '../Icon';
interface IconButtonProps {
    icon: icon;
    handleClick?: () => void;
    modifier?: 'icon-home';
}
const IconButton: React.FC<IconButtonProps> = ({
    icon,
    handleClick,
    modifier,
}) => {
    return (
        <span
            onClick={handleClick}
            className={customModifier('a-iconbutton', modifier!)}
        >
            <Icon modifier={icon} />
        </span>
    );
};
export default IconButton;
