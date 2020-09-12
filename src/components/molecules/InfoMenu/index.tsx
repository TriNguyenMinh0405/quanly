import React from 'react';
import { customModifier } from 'functions';
import IconButton from 'components/atoms/IconButton';
import Img from 'components/atoms/Img';
import Text from 'components/atoms/Text';
import HoverItem from '../HoverItem';
export interface InfoMenuProps {}
const InfoMenu: React.FC<InfoMenuProps> = (props) => {
    return (
        <div className={customModifier('m-infomenu')}>
            <IconButton icon="plush-home" modifier="icon-home" />
            <IconButton icon="notifi-home" modifier="icon-home" />
            <Img
                modifier="img-home"
                src="https://i.ytimg.com/vi/XTgHqqbWEYI/maxresdefault.jpg"
            />
            <Text size="fs18" color="white">
                Thomas Jackson
            </Text>
            <HoverItem>
                <IconButton modifier="icon-home" icon="chevron-down-home" />
            </HoverItem>
        </div>
    );
};
export default InfoMenu;
