import React from 'react';
import Icon from './components/atoms/Icon';
import './App.scss';
import DashBoard from './components/templates/Dashboard';
import Img from './components/atoms/Img';
function App() {
    return (
        <div>
            <Icon modifier="profile" />
            <DashBoard></DashBoard>
            <Img src="https://i.ytimg.com/vi/p6bj782jntw/maxresdefault.jpg" />
        </div>
    );
}

export default App;
