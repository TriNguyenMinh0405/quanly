import React from 'react';
import Container from 'react-bootstrap/Container';
import './index.scss';
import ListIcon from '../../molecules/ListIcon';
import Logo from '../../molecules/Logo';
const Header: React.FC = () => {
    return (
        <div className="o-header">
            <Container>
                <div className="o-header_content">
                    <Logo />
                    <ListIcon />
                </div>
            </Container>
        </div>
    );
};
export default Header;
