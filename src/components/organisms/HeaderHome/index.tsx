import React, { useState } from 'react';
import { customModifier } from 'functions';
import Logo from 'components/molecules/Logo';
import { Container } from 'react-bootstrap';
import InfoMenu from 'components/molecules/InfoMenu';
import IconIput from 'components/molecules/IconIput';
import IconButton from 'components/atoms/IconButton';
import LoginModal from 'components/templates/LoginModal';
import { getHomeLocalStorage } from 'functions';
export interface HeaderHomeProps {}
const HeaderHome: React.FC<HeaderHomeProps> = (props) => {
    const [activeMenuBar, setActiveMenuBar] = useState(false);
    const [isShowLogin, setShowLogin] = useState(false);
    return (
        <div className={customModifier('o-headerhome')}>
            <Container className="o-headerhome_menu">
                <Logo modifier="logo-home" />
                <IconIput />
                <div className={customModifier('o-headerhome_iconbar')}>
                    <InfoMenu
                        isLogin={getHomeLocalStorage() ? true : false}
                        handleClick={() => setShowLogin(true)}
                        name={
                            getHomeLocalStorage() &&
                            getHomeLocalStorage().user.fullName
                        }
                        srcImg={
                            getHomeLocalStorage() &&
                            `http://localhost:5000/${
                                getHomeLocalStorage().user.avatar
                            }`
                        }
                    />
                    <div className="o-headerhome_iconbar-btn">
                        <IconButton
                            handleClick={(): void =>
                                setActiveMenuBar(!activeMenuBar)
                            }
                            icon="nav"
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
                    <ul>
                        <li onClick={() => setShowLogin(true)}>Login</li>
                    </ul>
                </div>
            </div>
            <LoginModal
                isShowModalLogin={isShowLogin}
                handleCloseModal={() => setShowLogin(false)}
            />
        </div>
    );
};
export default HeaderHome;
