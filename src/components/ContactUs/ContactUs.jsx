import React from 'react';
import { ReactComponent as Mail } from '../../assets/icons/contacts/sms.svg';
import { ReactComponent as Phone } from '../../assets/icons/contacts/call.svg';
import { ReactComponent as Map } from '../../assets/icons/contacts/map.svg';
import { ReactComponent as Facebook } from '../../assets/icons/contacts/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/icons/contacts/instagram.svg';
import styles from './ContactUs.module.scss';

const ContactUs = () => {
    return (
        <div id="contacts">
            <h2 className={styles.title}>Contact Us</h2>
            <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                    <p className={styles.contactType}>Phone:</p>
                    <div className={styles.info}>
                        <div className={styles.contact}>
                            <Phone />
                            <a href="tel:380981234567">38 (098) 12 34 567</a>
                        </div>
                        <div className={styles.contact}>
                            <Phone />
                            <a href="tel:380931234567">38 (093) 12 34 567</a>
                        </div>
                    </div>
                </li>
                <li className={styles.contactItem}>
                    <p className={styles.contactType}>E-mail:</p>

                    <Mail />
                    <a href="mailto:office@ecosolution.com">
                        office@ecosolution.com
                    </a>
                </li>
                <li className={styles.contactItem}>
                    <p className={styles.contactType}>Address:</p>

                    <address className={styles.info}>
                        <div className={styles.contact}>
                            <Map />
                            <p>
                                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
                            </p>
                        </div>
                    </address>
                </li>
                <li className={styles.contactItem}>
                    <p className={styles.contactType}>Social Networks:</p>

                    <Facebook />
                    <Instagram />
                </li>
            </ul>
        </div>
    );
};

export default ContactUs;
