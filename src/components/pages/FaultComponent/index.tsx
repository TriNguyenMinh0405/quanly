import React, { useEffect } from 'react';
import { customModifier } from 'functions';
import { RootState } from 'reducer';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginHome } from 'saga/authhome/actions';
const FaultComponent: React.FC = () => {
    const infoUser = useSelector((state: RootState) => state.loginHome);
    let history = useHistory();
    const { slug } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        if (infoUser.error) {
            history.push('/');
        }
    }, [infoUser]);
    useEffect(() => {
        console.log('slug:', slug);
        dispatch(loginHome({ email: 'test1@gmail.com', password: 'test1' }));
    }, []);
    return <h1 className={customModifier('a-faultcomponent')}>Not Found</h1>;
};
export default FaultComponent;
