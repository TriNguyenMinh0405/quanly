import React from 'react';
import { customModifier } from 'functions';
export interface TabProps {
    isSelected: boolean,
};
const Tab: React.FC<TabProps> = ({ isSelected, children }) => {
    return (<div className={customModifier('m-tab')}>
        {isSelected && children}
    </div>)
};
export default Tab;