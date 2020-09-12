import React, { useState } from 'react';
import { customModifier } from 'functions';
import Logo from 'components/molecules/Logo';
import { Container } from 'react-bootstrap';
import InfoMenu from 'components/molecules/InfoMenu';
import IconIput from 'components/molecules/IconIput';
import IconButton from 'components/atoms/IconButton';
export interface HeaderHomeProps {}
const HeaderHome: React.FC<HeaderHomeProps> = (props) => {
    const [activeMenuBar, setActiveMenuBar] = useState(false);
    return (
        <div className={customModifier('o-headerhome')}>
            <Container className="o-headerhome_menu">
                <Logo modifier="logo-home" />
                <IconIput />
                <div className={customModifier('o-headerhome_iconbar')}>
                    <InfoMenu />
                    <div className="o-headerhome_iconbar-btn">
                        <IconButton
                            handleClick={(): void =>
                                setActiveMenuBar(!activeMenuBar)
                            }
                            icon="notifi-home"
                            modifier="icon-home"
                        />
                    </div>
                </div>
            </Container>
            <div
                className={
                    activeMenuBar
                        ? 'o-headerhome_mark active'
                        : 'o-headerhome_mark'
                }
            >
                <div className="o-headerhome_mark-list">
                    <div style={{ color: 'white' }}>dklhdhd</div>
                </div>
            </div>
        </div>
    );
};
export default HeaderHome;
