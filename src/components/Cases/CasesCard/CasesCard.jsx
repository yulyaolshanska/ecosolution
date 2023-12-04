import React from 'react';
import PropTypes from 'prop-types';
import ArrowUpRight from '../../../assets/icons/arrow-up-right-big.svg';
import styles from './CasesCard.module.scss';

const CasesCard = ({ image, alt, title, description, date }) => {
    return (
        <div className={styles.card}>
            <img src={image} className={styles.image} alt={alt} />
            <div className={styles.textWrapper}>
                <div className={styles.titleContainer}>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <button className={styles.cardBtn}>
                        <img src={ArrowUpRight} alt={alt} />
                    </button>
                </div>
                <div className={styles.gorizontalLine}></div>
                <div className={styles.descriptionContainer}>
                    <p className={styles.cardDescription}>{description}</p>
                    <p className={styles.cardDate}>{date}</p>
                </div>
            </div>
        </div>
    );
};

CasesCard.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default CasesCard;
