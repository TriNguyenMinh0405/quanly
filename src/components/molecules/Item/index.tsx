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
    admin?: boolean;
    cursor?: 'cursor';
    hanldeClick?: () => void;
}
const Item: React.FC<ItemProps> = ({
    isImg,
    icon,
    children,
    admin,
    cursor,
    hanldeClick,
}) => {
    return (
        <div
            onClick={hanldeClick}
            className={customModifier('m-item', cursor!)}
        >
            {isImg ? <Img src={isImg} /> : ''}
            {icon ? <Icon modifier={icon} /> : ''}
            {!admin && <Text size={isImg ? 'fs14' : 'fs16'}>{children}</Text>}
            {admin && (
                <Text weight="bold" size="fs18">
                    {children}
                </Text>
            )}
        </div>
    );
};
export default Item;
