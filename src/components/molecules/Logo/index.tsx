import React from 'react';
import './index.scss';
import Text from '../../atoms/Text';
interface LogoProps {
    handleClick?: () => void;
}
const Logo: React.FC<LogoProps> = ({ handleClick }) => {
    return (
        <div onClick={handleClick} className="m-logo">
            <Text size="fs38" weight="bold" color="white">
                Tien
            </Text>
        </div>
    );
};
export default Logo;
