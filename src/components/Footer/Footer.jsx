import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow-right.svg';
import { ReactComponent as Facebook } from '../../assets/icons/contacts/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/icons/contacts/instagram.svg';
import useHandleNavLinkClick from '../../utils/handleNavLinkClick';
import Logo from '../Logo/Logo';
import styles from './Footer.module.scss';

const Footer = () => {
    const handleNavLinkClick = useHandleNavLinkClick();

    return (
        <footer className={styles.container} id="footer">
            <div className={styles.navConainer}>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <Link
                    to="#main"
                    className={styles.linkUp}
                    onClick={e => handleNavLinkClick(e, '#main')}
                >
                    <ArrowRight />
                </Link>
                <div className={styles.socials}>
                    <div className={styles.socialItem}>
                        <Facebook />
                    </div>
                    <div className={styles.socialItem}>
                        <Instagram />
                    </div>
                </div>
            </div>
            <div className={styles.contactInfo}>
                <address>
                    <p> 79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
                </address>
                <Link href="mailto:office@ecosolution.com">
                    <p>office@ecosolution.com</p>
                </Link>
                <p>ecosolution © 2023</p>
            </div>
        </footer>
    );
};

export default Footer;
