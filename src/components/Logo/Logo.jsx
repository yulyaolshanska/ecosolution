import React from 'react';
import styles from './Logo.module.scss';
import LogoIcon from '../../assets/icons/logo.svg';

const Logo = () => {
    return (
        <a href="#main" className={styles.logoLink}>
            <img src={LogoIcon} alt="Logo" />
            <p className={styles.title}>ecosolution</p>
            <p className={styles.subTitle}>
                <span className={styles.accent}>green</span>ergy for life
            </p>
        </a>
    );
};

export default Logo;
