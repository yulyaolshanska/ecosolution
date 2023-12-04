import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const ButtonWithText = ({
    text,
    variant,
    handleClick,
    type = 'button',
    isDisabled = false,
    children,
}) => {
    const btnClass = `${styles.buttonWithText} ${styles[variant]}`;

    return (
        <button
            type={type}
            className={btnClass}
            onClick={handleClick}
            disabled={isDisabled}
        >
            <span> {text}</span>
            {children}
        </button>
    );
};

ButtonWithText.propTypes = {
    text: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    type: PropTypes.string,
    handleClick: PropTypes.func,
    isDisabled: PropTypes.bool,
    children: PropTypes.node,
};

export default ButtonWithText;
