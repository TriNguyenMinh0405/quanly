import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import User from 'components/pages/User';
function App() {
    return (
        <BrowserRouter>
            <User />
        </BrowserRouter>
    );
}

export default App;
