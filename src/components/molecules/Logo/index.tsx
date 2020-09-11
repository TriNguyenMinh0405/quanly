import React from 'react';
import './index.scss';
import Text from '../../atoms/Text';
import { customModifier } from '../../../functions';
interface LogoProps {
    handleClick?: () => void;
    modifier?: 'logo-home';
}
const Logo: React.FC<LogoProps> = ({ handleClick, modifier }) => {
    return (
        <div
            onClick={handleClick}
            className={customModifier('m-logo', modifier!)}
        >
            {!modifier && (
                <Text size="fs38" weight="bold" color="white">
                    Tien
                </Text>
            )}
        </div>
    );
};
export default Logo;
