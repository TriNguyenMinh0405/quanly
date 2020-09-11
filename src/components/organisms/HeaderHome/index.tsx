import React from 'react';
import { customModifier } from 'functions';
import './index.scss';
import Logo from 'components/molecules/Logo';
import IconButton from 'components/atoms/IconButton';
import { Container } from 'react-bootstrap';
import InfoMenu from 'components/molecules/InfoMenu';
export interface HeaderHomeProps {}
const HeaderHome: React.FC<HeaderHomeProps> = (props) => {
    return (
        <div className={customModifier('o-headerhome')}>
            <Container className="o-headerhome_menu">
                <Logo modifier="logo-home" />
                <IconButton icon="search-home" modifier="icon-home" />
                <InfoMenu />
            </Container>
        </div>
    );
};
export default HeaderHome;
