import React from 'react';
import './index.scss';
import Header from 'components/organisms/Header';
import Container from 'react-bootstrap/Container';
const LayoutDasboard: React.FC = ({ children }) => {
    return (
        <div className="t-layoutdasboard">
            <Header />
            <div className="t-layoutdasboard_children">
                <Container>{children}</Container>
            </div>
        </div>
    );
};
export default LayoutDasboard;
