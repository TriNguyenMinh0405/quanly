import React, { useState } from 'react';
import { customModifier } from 'functions';
import TabsNav from '../TabsNav';
import Tab  from 'components/molecules/Tab';

export interface TabsProps { };
const Tabs: React.FC<TabsProps> = (props) => {
    const [selected,setSelected]=useState('Home')
    return (
        <div className={customModifier('m-tabs')}>
            <TabsNav tabs={['Home', 'Settings', 'Profile']} selected={ selected } setSelected={ setSelected }>
                <Tab isSelected={selected==='Home'}>
                    <h1>Nguyen Minh Tien</h1>
                </Tab>
                <Tab isSelected={selected==='Settings'}>
                    <h1>Nguyen Minh Tien 2</h1>
                </Tab>
                <Tab isSelected={selected==='Profile'}>
                    <h1>Nguyen Minh Tien 3</h1>
                </Tab>
            </TabsNav>
        </div>
    )
};
export default Tabs;