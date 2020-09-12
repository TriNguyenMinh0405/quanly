import React from 'react';
import { Route } from 'react-router-dom';
import HeaderHome from 'components/organisms/HeaderHome';
const HomeLayout = (props) => {
    return (
        <>
            <HeaderHome />
            {props.children}
        </>
    );
};
export default function HomeTemplate({ Component, ...props }) {
    return (
        <Route
            {...props}
            render={(propsComponent) => (
                <HomeLayout>
                    <Component {...propsComponent} />
                </HomeLayout>
            )}
        />
    );
}
