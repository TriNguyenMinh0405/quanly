import React from 'react';
import './index.scss';
import { customModifier } from '../../../functions';
interface TextProps {
    size?: 'fs12' | 'fs14' | 'fs18' | 'fs24' | 'fs16';
    weight?: 'bold';
}
const Text: React.FC<TextProps> = ({ children, size, weight }) => {
    return (
        <p className={customModifier('a-text', size!, weight!)}>{children}</p>
    );
};
export default Text;
