import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from 'components/organisms/Header';
const AdminLayout = (props) => {
    return (
        <>
            <Header />
            {props.children}
        </>
    );
};
export default function AdminTemplate({ Component, ...props }) {
    return (
        <Route
            {...props}
            render={(propsComponent) => {
                if (localStorage.getItem('UserAdmin')) {
                    return (
                        <AdminLayout>
                            <Component {...propsComponent} />
                        </AdminLayout>
                    );
                } else {
                    return <Redirect to="/admin" />;
                }
            }}
        />
    );
}
