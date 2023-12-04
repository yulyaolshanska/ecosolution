import React, { useEffect, useState } from 'react';
import { ReactComponent as BurgerBtn } from '../../assets/icons/burger.svg';
import { ReactComponent as ArrowBottom } from '../../assets/icons/arrow-bottom.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import ButtonWithText from '../Buttons/ButtonWithText';
import useHandleNavLinkClick from '../../utils/handleNavLinkClick';
import Logo from '../Logo/Logo';
import styles from './Header.module.scss';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const handleNavLinkClick = useHandleNavLinkClick();

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 0 ? 'true' : 'false');
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header
            className={`${styles.header} ${
                isScrolled ? styles.scrolledHeader : ''
            }`}
        >
            <div className={styles.headerContainer}>
                <Logo />
                <div className={styles.buttonsContainer}>
                    <button className={styles.burgerBtn} onClick={toggleMenu}>
                        <BurgerBtn />
                    </button>
                    <ButtonWithText
                        text="Get in touch"
                        onClick={toggleMenu}
                        variant="getInTouch"
                        handleClick={e => handleNavLinkClick(e, '#contacts')}
                    >
                        <ArrowBottom />
                    </ButtonWithText>
                </div>
            </div>
            <BurgerMenu handleClick={toggleMenu} isMenuOpen={isMenuOpen} />
        </header>
    );
};

export default Header;
