import React from 'react';
import './index.scss';
import Item from 'components/molecules/Item';
import ListMenu from 'components/molecules/ListMenu';

const DasboardNav: React.FC = () => {
    const hanldeLogout = () => {
        console.log('log out');
    };
    const isImg = 'https://i.ytimg.com/vi/z7SvaBmf870/hqdefault.jpg';
    return (
        <div className="o-dashboardnav">
            <div className="o-dashboardnav_header">
                <Item admin isImg={isImg}>
                    Nguyen Minh Tien
                </Item>
            </div>
            <ListMenu />
            <div className="o-dashboardnav_logout">
                <Item cursor="cursor" hanldeClick={hanldeLogout} icon="logout">
                    Logout
                </Item>
            </div>
        </div>
    );
};
export default DasboardNav;
