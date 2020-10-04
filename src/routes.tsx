import User from 'components/pages/User';
import Home from 'components/pages/Home';
import FaultComponent from 'components/pages/FaultComponent';
export const HomelayoutRoute = [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/course/:slug',
        exact: true,
        component: FaultComponent,
    },
];
export const AdminlayoutRoute = [
    {
        path: '/dashboard',
        exact: true,
        component: User,
    },
];
