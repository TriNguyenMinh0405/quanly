import React from 'react';
import './index.scss';
import Table from '../Table';
const DashboardUser: React.FC = () => {
    const handleClickTd = (arg?: number | string) => {
        console.log('td dashboard', arg);
    };
    const handleClickButton = (
        event?: React.MouseEvent<HTMLButtonElement>,
        arg?: number | string
    ) => {
        if (event) {
            event.stopPropagation();
        }
        console.log('dashboard', arg);
    };
    return (
        <div className="o-dashboarduser">
            <Table
                eventClickTd={handleClickTd}
                eventClickButton={handleClickButton}
            />
        </div>
    );
};
export default DashboardUser;
