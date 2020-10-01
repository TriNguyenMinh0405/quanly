import React, { useEffect, useState } from 'react';
import { customModifier } from 'functions';
import './index.scss';
import { Container, Modal } from 'react-bootstrap';
import MainCarousel from 'components/organisms/MainCarousel';
import MovieCarousel from 'components/organisms/MovieCarousel';
import { useDispatch, useSelector } from 'react-redux';
import { postMovie } from 'saga/pages/home/actions';
import { RootState } from 'reducer';
import Loading from 'components/atoms/Loading';
import LoginModal from 'components/templates/LoginModal';
const Home: React.FC = (props) => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.movieHome);
    const [isShowModalLogin, setShowModalLogin] = useState(true);
    useEffect(() => {
        dispatch(postMovie());
    }, []);
    return (
        <div
            className={customModifier('p-home')}
            style={{ background: '#040917' }}
        >
            {state.loading && <Loading />}
            <Container>
                <MainCarousel />
                <MovieCarousel />
            </Container>
            <LoginModal
                isShowModalLogin={isShowModalLogin}
                handleCloseModal={() => setShowModalLogin(false)}
            />
        </div>
    );
};
export default Home;
