import React from 'react';
import './index.scss';
import { customModifier } from '../../../functions';
import Img from '../../atoms/Img';
import { icon } from '../../atoms/Icon';
import Icon from '../../atoms/Icon';
import Text from '../../atoms/Text';
interface ItemProps {
    isImg?: string;
    icon?: icon;
}
const Item: React.FC<ItemProps> = ({ isImg, icon, children }) => {
    return (
        <div className={customModifier('m-item')}>
            {isImg ? <Img src={isImg} /> : ''}
            {icon ? <Icon modifier={icon} /> : ''}
            <Text size={isImg ? 'fs14' : 'fs16'}>{children}</Text>
        </div>
    );
};
export default Item;
