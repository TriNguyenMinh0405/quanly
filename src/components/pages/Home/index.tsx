import React from 'react';
import { customModifier } from 'functions';
import './index.scss';
import { Container } from 'react-bootstrap';
import MainCarousel from 'components/organisms/MainCarousel';
import MovieCarousel from 'components/organisms/MovieCarousel';
export interface HomeProps {}
const Home: React.FC<HomeProps> = (props) => {
    return (
        <div
            className={customModifier('p-home')}
            style={{ background: '#040917' }}
        >
            <Container>
                <MainCarousel />
                <MovieCarousel />
            </Container>
        </div>
    );
};
export default Home;
