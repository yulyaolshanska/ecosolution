import PropTypes from 'prop-types';
import styles from './AboutCard.module.scss';

const AboutCard = ({ icon, title, text }) => {
    return (
        <li className={styles.card}>
            <div className={styles.cardTitleContainer}>
                <img src={icon} alt={title} width="16px" height="16px" />
                <h3 className={styles.cardTitle}>{title}</h3>
            </div>
            <div className={styles.line}></div>
            <p className={styles.cardDesc}>{text}</p>
        </li>
    );
};

AboutCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default AboutCard;
