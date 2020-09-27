import React from 'react';
import { customModifier } from 'functions';
import IconButton from 'components/atoms/IconButton';
export interface IconIputProps {}
const IconIput: React.FC<IconIputProps> = (props) => {
    return (
        <div className={customModifier('m-iconinput')}>
            <input
                placeholder="Enter name for search"
                type="text"
                className="m-iconinput_input"
            />
            <IconButton icon="search-home" modifier="icon-home" />
        </div>
    );
};
export default IconIput;
