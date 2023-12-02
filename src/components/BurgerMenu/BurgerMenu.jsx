import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as ArrowUpRight } from '../../assets/icons/arrow-right.svg';
import styles from './BurgerMenu.module.scss';

const navigation = [
    { id: 1, name: 'Main', to: '#main' },
    { id: 2, name: 'About', to: '#about' },
    { id: 3, name: 'Cases', to: '#cases' },
    { id: 4, name: 'FAQ', to: '#faq' },
    { id: 5, name: 'Contact Us', to: '#contacts' },
];

const BurgerMenu = ({ handleClick, isMenuOpen }) => {
    return (
        <>
            {isMenuOpen && (
                <div
                    className={` ${styles.backdrop} ${
                        isMenuOpen ? styles.open : ''
                    }`}
                >
                    <div className={styles.menu}>
                        <button
                            className={styles.menuBtnClose}
                            onClick={e => handleClick(e)}
                        >
                            <Close />{' '}
                            <span className={styles.closeIconText}>close</span>
                        </button>
                        <div className={styles.menuLine}></div>
                        <div className={styles.menuNavContainer}>
                            <nav className={styles.menuNav}>
                                {navigation.map(({ id, name, to }) => (
                                    <NavLink
                                        to={to}
                                        className={`${styles.menuLink} ${
                                            location.hash === to
                                                ? styles.activeLink
                                                : ''
                                        }`}
                                        key={id}
                                    >
                                        <span className={styles.menuText}>
                                            {name}
                                        </span>
                                        <ArrowUpRight />
                                    </NavLink>
                                ))}
                            </nav>
                            <div className={styles.menuSocials}>
                                <Facebook />
                                <Instagram />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

BurgerMenu.propTypes = {
    handleClick: PropTypes.func.isRequired,
    isMenuOpen: PropTypes.bool.isRequired,
};

export default BurgerMenu;
