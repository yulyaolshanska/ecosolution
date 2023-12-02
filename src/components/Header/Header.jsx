import React, { useEffect, useState } from 'react';
import { ReactComponent as BurgerBtn } from '../../assets/icons/burger.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Logo from '../Logo/Logo';
import styles from './Header.module.scss';

const Header = () => {
    const [transparent, setTransparent] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY < (isMobile ? 120 : 70);
            setTransparent(isTop);
        };

        setIsMobile(window.innerWidth <= 768);

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMobile]);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className={transparent ? styles.transparentHeader : ''}>
            <div className={styles.headerContainer}>
                <Logo />
                <button className={styles.burgerBtn} onClick={toggleMenu}>
                    <BurgerBtn />
                </button>
            </div>
            <BurgerMenu handleClick={toggleMenu} isMenuOpen={isMenuOpen} />
        </header>
    );
};

export default Header;
