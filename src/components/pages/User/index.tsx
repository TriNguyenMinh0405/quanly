import React from 'react';
import './index.scss';
import LayoutDasboard from 'components/templates/LayoutDashboard';
import DasboardNav from 'components/organisms/DashboardNav';
import DashboardUser from 'components/organisms/DashboardUser';
const User: React.FC = () => {
    return (
        <LayoutDasboard>
            <div className="p-user">
                <div className="p-user_left">
                    <DasboardNav />
                </div>
                <div className="p-user_right">
                    <DashboardUser />
                </div>
            </div>
        </LayoutDasboard>
    );
};
export default User;
