import User from 'components/pages/User';
import Home from 'components/pages/Home';

export const HomelayoutRoute = [
    {
        path: '/',
        exact: true,
        component: Home,
    },
];
export const AdminlayoutRoute = [
    {
        path: '/dashboard',
        exact: true,
        component: User,
    },
];
