import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const ButtonWithText = ({ text, hash, variant, handleClick, children }) => {
    const btnClass = `${styles.buttonWithText} ${styles[variant]}`;

    return (
        <button className={btnClass} onClick={handleClick}>
            <a href={hash} className={styles.link}>
                <span className={styles.text}> {text}</span>
                {children}
            </a>
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
