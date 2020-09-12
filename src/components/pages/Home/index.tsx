import React from 'react';
import { customModifier } from 'functions';
import './index.scss';
import Carousel from 'components/molecules/Carousel';
import { Container } from 'react-bootstrap';
export interface HomeProps {}
const Home: React.FC<HomeProps> = (props) => {
    return (
        <div
            className={customModifier('p-home')}
            style={{ background: '#040917' }}
        >
            <Container>
                <Carousel />
            </Container>
        </div>
    );
};
export default Home;
