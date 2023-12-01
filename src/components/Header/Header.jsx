import React, { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import styles from './Header.module.scss';

const Header = () => {
    const [transparent, setTransparent] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

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
    return (
        <header>
            <div className={styles.headerContainer}>
                <Logo />
                <button className={styles.burgerBtn}></button>
            </div>
        </header>
    );
};

export default Header;
