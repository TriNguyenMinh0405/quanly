import React from 'react';
import { customModifier } from '../../../functions';
import './index.scss';
interface ButtonProps {
    type?: 'button' | 'submit';
    background?: 'red' | 'blue' | 'sky' | 'origan' | 'green';
    size?: 'pd10' | 'pd5';
    modifier?: 'around';
    cursor?: 'pointer';
    handleClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({
    children,
    type,
    background,
    size,
    modifier,
    cursor,
    handleClick,
}) => {
    return (
        <button
            className={customModifier(
                'a-button',
                background!,
                size!,
                modifier!,
                cursor!
            )}
            type={type}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};
export default Button;
