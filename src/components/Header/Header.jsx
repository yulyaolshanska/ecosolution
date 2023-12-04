import React, { useEffect, useState } from 'react';
import { ReactComponent as BurgerBtn } from '../../assets/icons/burger.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Logo from '../Logo/Logo';
import styles from './Header.module.scss';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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

    //  const handleGetInTouchClick = () => {
    //      const contactUsSection = document.getElementById('contactUsSection');
    //      if (contactUsSection) {
    //          contactUsSection.scrollIntoView({ behavior: 'smooth' });
    //      }
    //  };

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
                <button className={styles.burgerBtn} onClick={toggleMenu}>
                    <BurgerBtn />
                </button>
            </div>
            <BurgerMenu handleClick={toggleMenu} isMenuOpen={isMenuOpen} />
        </header>
    );
};

export default Header;
