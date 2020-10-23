import React from 'react';
import { customModifier } from 'functions';
export interface BreadcrumbItemProps{};
const BreadcrumbItem: React.FC< BreadcrumbItemProps > = ({children}) => {
    return (<li className={customModifier('m-breadcrumbitem')}>
        {children}
    </li>)
};
export default BreadcrumbItem;