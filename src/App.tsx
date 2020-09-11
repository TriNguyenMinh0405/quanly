import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './scss/variable.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeTemplate from 'TemplateLayout/HomeTemplate';
import AdminTemplate from 'TemplateLayout/AdminTemplate';
import { HomelayoutRoute, AdminlayoutRoute } from './routes';
import AdminLogin from 'components/pages/AdminLogin';
import FaultComponent from 'components/pages/FaultComponent';
const ShowRouteHome = (mang) => {
    return mang.map((item, index) => {
        let { exact, path, component } = item;
        return (
            <HomeTemplate
                key={index}
                exact={exact}
                path={path}
                Component={component}
            />
        );
    });
};
const ShowRouteAdmin = (mang) => {
    return mang.map((item, index) => {
        let { exact, path, component } = item;
        return (
            <AdminTemplate
                key={index}
                exact={exact}
                path={path}
                Component={component}
            />
        );
    });
};
function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/admin" component={AdminLogin} />
                {ShowRouteHome(HomelayoutRoute)}
                {ShowRouteAdmin(AdminlayoutRoute)}
                <Route path="" component={FaultComponent} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
