import React from 'react';
import './index.scss';
import IconButton from '../../atoms/IconButton';
const ListIcon: React.FC = () => {
    return (
        <div className="m-listicon">
            <IconButton icon="search" />
            <IconButton icon="notifications" />
            <IconButton icon="profile" />
        </div>
    );
};
export default ListIcon;
