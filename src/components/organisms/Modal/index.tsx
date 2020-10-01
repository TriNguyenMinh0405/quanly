import React from 'react';
import { Modal, ModalBody } from 'react-bootstrap';
import IconButton from 'components/atoms/IconButton';
export interface ModalProps {
    isShowModal?: boolean;
    handleCloseModal?: () => void;
}
const ModalBootstrap: React.FC<ModalProps> = ({
    children,
    isShowModal,
    handleCloseModal,
}) => {
    return (
        <Modal
            dialogClassName="o-modal"
            show={isShowModal}
            aria-labelledby="example-custom-modal-styling-title"
        >
            <ModalBody>
                <div className="o-modal_content">
                    {children}
                    <IconButton handleClick={handleCloseModal} icon="cancel" />
                </div>
            </ModalBody>
        </Modal>
    );
};
export default ModalBootstrap;
