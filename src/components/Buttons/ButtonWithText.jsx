import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const ButtonWithText = ({ text, hash, variant, handleClick, children }) => {
    const btnClass = `${styles.buttonWithText} ${styles[variant]}`;

    return (
        <button className={btnClass} onClick={handleClick}>
            <Link to={hash} className={styles.link}>
                <span className={styles.text}> {text}</span>
                {children}
            </Link>
        </button>
    );
};

ButtonWithText.propTypes = {
    text: PropTypes.string.isRequired,
    hash: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    children: PropTypes.node,
};

export default ButtonWithText;
