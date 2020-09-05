import React from 'react';
import Icon from './components/atoms/Icon';
import './App.scss';
import DashBoard from './components/templates/Dashboard';
import Img from './components/atoms/Img';
import Item from './components/molecules/Item';
function App() {
    return (
        <div>
            <Icon modifier="profile" />
            <DashBoard></DashBoard>
            <Img src="https://i.ytimg.com/vi/p6bj782jntw/maxresdefault.jpg" />
            <Item icon="dashboard">Dashboard</Item>
            <Item isImg="https://i.ytimg.com/vi/p6bj782jntw/maxresdefault.jpg">
                Dashboard
            </Item>
        </div>
    );
}

export default App;
