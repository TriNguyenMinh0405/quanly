import React from 'react';
import { customModifier } from 'functions';
import { Container } from 'react-bootstrap';
import MainCarousel from 'components/organisms/MainCarousel';
import MovieCarousel from 'components/organisms/MovieCarousel';
import {Link} from 'react-router-dom';
import Tabs from 'components/molecules/Tabs';
import Breadcrumd from 'components/molecules/Breadcrumd';
const Home: React.FC = (props) => {
    return (
        <div className={customModifier('p-home')}>
            <Container>
                <MainCarousel />
                <MovieCarousel />
                <Tabs/>
                <Breadcrumd>
                    {['home','contact'].map((item)=>{
                        return <Link key={item} to={item}>{item}</Link>
                    })}
                </Breadcrumd>
            </Container>
        </div>
    );
};
export default Home;
