import React from 'react';
import { customModifier } from 'functions';
import { Container } from 'react-bootstrap';
import MainCarousel from 'components/organisms/MainCarousel';
import MovieCarousel from 'components/organisms/MovieCarousel';
const Home: React.FC = (props) => {
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
