import React from 'react';
import { customModifier } from 'functions';
export interface TabsNavProps{
    tabs:string[],
    selected:string,
    setSelected:(arg:string)=>void
};
const TabsNav: React.FC< TabsNavProps > = ({children,tabs,selected,setSelected}) => {
    return (<div className={customModifier('m-tabsnav')}>
        <ul className="m-tabsnav_header">
            {
                tabs.map(tab => {
                    const active = (tab === selected ? 'active ' : '' );
                    return (
                        <li className={`m-tabsnav_header_item ${active}`} key={ tab }>
                            <a  onClick={ () => setSelected(tab) }>
                            { tab }
                            </a>
                        </li>
                    );
                })
            }
        </ul>
        {children}
    </div>)
};
export default TabsNav;