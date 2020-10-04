import React from 'react';
import { customModifier } from 'functions';
import IconButton from 'components/atoms/IconButton';
import Img from 'components/atoms/Img';
import Text from 'components/atoms/Text';
import HoverItem from '../HoverItem';
export interface InfoMenuProps {
    isLogin: boolean;
    handleClick?: () => void;
    name?: string;
    srcImg?: string;
}
const InfoMenu: React.FC<InfoMenuProps> = ({
    isLogin,
    handleClick,
    name,
    srcImg,
}) => {
    return (
        <div className={customModifier('m-infomenu')}>
            <IconButton icon="plush-home" modifier="icon-home" />
            <IconButton icon="notifi-home" modifier="icon-home" />
            {isLogin ? (
                <>
                    <Img modifier="img-home" src={srcImg ? srcImg : ''} />
                    <Text size="fs18" color="white">
                        {name}
                    </Text>
                    <HoverItem>
                        <IconButton
                            modifier="icon-home"
                            icon="chevron-down-home"
                        />
                    </HoverItem>
                </>
            ) : (
                <IconButton
                    modifier="icon-home"
                    icon="user"
                    handleClick={handleClick}
                />
            )}
        </div>
    );
};
export default InfoMenu;
