import React from 'react';
import Icon from './components/atoms/Icon';
import './App.scss';
import DashBoard from './components/templates/Dashboard';
function App() {
    return (
        <div>
            <Icon modifier="profile" />
            <DashBoard></DashBoard>
        </div>
    );
}

export default App;
