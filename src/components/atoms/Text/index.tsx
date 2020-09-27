import React from 'react';
import './index.scss';
import { customModifier } from '../../../functions';
interface TextProps {
    size?: 'fs12' | 'fs14' | 'fs18' | 'fs24' | 'fs16' | 'fs38';
    weight?: 'bold';
    color?: 'white';
}
const Text: React.FC<TextProps> = ({ children, size, weight, color }) => {
    return (
        <p className={customModifier('a-text', size!, weight!, color!)}>
            {children}
        </p>
    );
};
export default Text;
