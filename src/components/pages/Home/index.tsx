import React from 'react';
import { customModifier } from 'functions';
import './index.scss';
import HeaderHome from 'components/organisms/HeaderHome';
export interface HomeProps {}
const Home: React.FC<HomeProps> = (props) => {
    return (
        <div
            className={customModifier('p-home')}
            style={{ background: 'blue' }}
        >
            <HeaderHome />
        </div>
    );
};
export default Home;
