import React from 'react';
import { customModifier } from 'functions';
import { useFormContext } from 'react-hook-form';
export interface InputProps {
    name: string;
    type?: 'text' | 'password' | 'email';
    placeholder?: string;
    label?: string;
    id?: string;
}
const Input: React.FC<InputProps> = ({
    id,
    name,
    type,
    placeholder,
    label,
}) => {
    const { register } = useFormContext();
    return (
        <div className={customModifier('a-input')}>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                id={id}
                placeholder={placeholder}
                type={type ? type : 'text'}
                name={name}
                ref={register}
                className={customModifier('a-input_input')}
            />
        </div>
    );
};
export default Input;
