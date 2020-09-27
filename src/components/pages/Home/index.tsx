import React from 'react';
import { customModifier } from 'functions';
import './index.scss';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import MainCarousel from 'components/organisms/MainCarousel';
import MovieCarousel from 'components/organisms/MovieCarousel';
import { postLoginRequest } from 'actions/pages/login';
import Loading from 'components/atoms/Loading';
import { RootState } from 'reducer';
export interface HomeProps {}
const Home: React.FC<HomeProps> = (props) => {
    const dispatch = useDispatch();
    const { handleSubmit, register } = useForm();
    const onSubmit = (values: any) => {
        dispatch(postLoginRequest(values));
    };
    const isLoading = useSelector((state: RootState) => state.login.isLoading);
    return (
        <div
            className={customModifier('p-home')}
            style={{ background: '#040917' }}
        >
            <Container>
                <MainCarousel />
                <MovieCarousel />
            </Container>
            <div>
                <FormProvider {...useForm()}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" name="email" ref={register} />
                        <input type="text" name="password" ref={register} />
                        <button type="submit">Submit</button>
                    </form>
                </FormProvider>
            </div>
            {isLoading && <Loading />}
        </div>
    );
};
export default Home;
