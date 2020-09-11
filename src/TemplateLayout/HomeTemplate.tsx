import React from 'react';
import { Route } from 'react-router-dom';
const HomeLayout = (props) => {
    return <>{props.children}</>;
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
