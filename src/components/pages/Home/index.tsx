import React from 'react';
import { customModifier } from 'functions';
import { Container } from 'react-bootstrap';
import MainCarousel from 'components/organisms/MainCarousel';
import MovieCarousel from 'components/organisms/MovieCarousel';
import Tabs from 'components/molecules/Tabs';
const Home: React.FC = (props) => {
    return (
        <div className={customModifier('p-home')}>
            <Container>
                <MainCarousel />
                <MovieCarousel />
                <Tabs/>
            </Container>
        </div>
    );
};
export default Home;
