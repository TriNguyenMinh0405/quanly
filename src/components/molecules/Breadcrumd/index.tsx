import React from 'react';
import { customModifier } from 'functions';
import BreadcrumbItem from 'components/molecules/BreadcrumbItem';
export interface BreadcrumdProps{};
const Breadcrumd: React.FC< BreadcrumdProps > = ({children}) => {
    let renderBreadcrumbItem = React.Children.toArray(children);
    renderBreadcrumbItem = renderBreadcrumbItem.map((child, index) => (
        <BreadcrumbItem key={`breadcrumb_item${index}`}>{child}</BreadcrumbItem>
      ))
    return (<ul className={customModifier('m-breadcrumd')}>
        {renderBreadcrumbItem}
    </ul>)
};
export default Breadcrumd;