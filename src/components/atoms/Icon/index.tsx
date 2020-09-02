import React from 'react';
import './index.scss';
import { customModifier } from '../../../functions';
type icon =
    | 'checkbox'
    | 'checkbox-active'
    | 'user'
    | 'user-active'
    | 'profile'
    | 'search'
    | 'logout'
    | 'notifications'
    | 'dashboard'
    | 'dashboard-active'
    | 'info';

interface IconProps {
    modifier: icon;
}
const Icon: React.FC<IconProps> = ({ modifier }) => {
    return <span className={customModifier('a-icon', modifier)}></span>;
};
export default Icon;
