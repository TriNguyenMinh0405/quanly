import React from 'react';
import './index.scss';
import ItemMenu from '../ItemMenu';
interface ListMenuProps {}
const ListMenu: React.FC<ListMenuProps> = () => {
    return (
        <ul className="m-listmenu">
            <ItemMenu to="/dashboard" icon="dashboard">
                Dashboard
            </ItemMenu>
            <ItemMenu to="/users" icon="user">
                Users manager
            </ItemMenu>
        </ul>
    );
};
export default ListMenu;
