import React from 'react';
import { loginAdmin } from 'saga/authadmin/actions';
import { useDispatch, useSelector } from 'react-redux';
import { User } from 'saga/authadmin/types';
import { useForm, FormProvider } from 'react-hook-form';
import Loading from 'components/atoms/Loading';
import { RootState } from 'reducer';
import { Alert } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { getAdminLocalStorage } from 'functions';
export interface AdminLoginProps {}
const AdminLogin: React.FC<AdminLoginProps> = (props) => {
    const stateAdminLogin = useSelector((state: RootState) => state.loginAdmin);
    const dispatch = useDispatch();
    const { handleSubmit, register } = useForm();
    const onSubmit = (values: User) => {
        (async () => {
            await dispatch(loginAdmin(values));
            console.log(stateAdminLogin.error);
            console.log('da submit');
        })();
    };
    return (
        <FormProvider {...useForm()}>
            {getAdminLocalStorage() && <Redirect to="/dashboard" />}
            {stateAdminLogin.loading && <Loading />}
            <div className="p-adminlogin">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {!stateAdminLogin.loading &&
                        stateAdminLogin.error &&
                        !stateAdminLogin.isLoging && (
                            <Alert variant="danger">
                                {stateAdminLogin.error.message}
                            </Alert>
                        )}
                    <br />
                    <input
                        placeholder="enter Email"
                        type="email"
                        name="email"
                        ref={register}
                    />
                    <br />
                    <input
                        placeholder="enter Password"
                        type="password"
                        name="password"
                        ref={register}
                    />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </FormProvider>
    );
};
export default AdminLogin;
