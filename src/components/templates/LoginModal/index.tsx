import React from 'react';
import { customModifier } from 'functions';
import ModalBootstrap from 'components/organisms/Modal';
import Table from 'components/molecules/Table';
export interface LoginModalProps {
    isShowModalLogin: boolean;
    handleCloseModal: () => void;
}
const LoginModal: React.FC<LoginModalProps> = ({
    isShowModalLogin,
    handleCloseModal,
}) => {
    return (
        <ModalBootstrap
            isShowModal={isShowModalLogin}
            handleCloseModal={handleCloseModal}
        >
            <div className={customModifier('t-loginmodal')}>
                <Table />
            </div>
        </ModalBootstrap>
    );
};
export default LoginModal;
