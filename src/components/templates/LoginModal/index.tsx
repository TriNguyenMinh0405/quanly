import React from 'react';
import { customModifier } from 'functions';
import ModalBootstrap from 'components/organisms/Modal';
import Input from 'components/atoms/Input';
import { useForm, FormProvider } from 'react-hook-form';
import Button from 'components/atoms/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { user } from 'apis/pages/user/login';
import { loginHome } from 'saga/authhome/actions';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup.string().required('email is required'),
    password: yup.string().required('password is required'),
});
export interface LoginModalProps {
    isShowModalLogin: boolean;
    handleCloseModal?: () => void;
}
const LoginModal: React.FC<LoginModalProps> = ({
    isShowModalLogin,
    handleCloseModal,
}) => {
    const dispatch = useDispatch();
    const methods = useForm({
        resolver: yupResolver(schema),
    });
    const handleSubmitForm = (userValue: user) => {
        dispatch(loginHome(userValue));
        console.log(userValue);
    };
    return (
        <ModalBootstrap
            isShowModal={isShowModalLogin}
            handleCloseModal={handleCloseModal}
        >
            <div className={customModifier('t-loginmodal')}>
                <FormProvider {...methods}>
                    <form
                        onSubmit={methods.handleSubmit((userValue: user) =>
                            handleSubmitForm(userValue)
                        )}
                    >
                        <Input
                            label="Email"
                            placeholder="Enter email"
                            name="email"
                            type="email"
                            id="email"
                        />
                        <Input
                            id="password"
                            label="Password"
                            placeholder="Enter Password"
                            name="password"
                            type="password"
                        />
                        <Button
                            background="blue"
                            cursor="pointer"
                            modifier="around"
                            size="pd10"
                            type="submit"
                        >
                            Login
                        </Button>
                    </form>
                </FormProvider>
            </div>
        </ModalBootstrap>
    );
};
export default LoginModal;
