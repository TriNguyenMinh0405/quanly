import React from 'react';
import { customModifier } from 'functions';
import './index.scss';
export interface HomeProps {}
const Home: React.FC<HomeProps> = (props) => {
    return (
        <div
            className={customModifier('p-home')}
            style={{ background: 'blue' }}
        >
            Home page
        </div>
    );
};
export default Home;
