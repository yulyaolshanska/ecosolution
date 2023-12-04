import React from 'react';
import { useForm } from 'react-hook-form';
import {
    emailRegexp,
    nameRegexp,
    phoneRegexp,
} from '../../../constants/validation';
import { ReactComponent as ArrowRight } from '../../../assets/icons/arrow-right-green.svg';
import ButtonWithText from '../../Buttons/ButtonWithText';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { isValid, errors, touchedFields },
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            fullname: '',
            email: '',
            phone: '',
            message: '',
        },
    });

    const onSubmit = data => (console.log(data), reset());

    return (
        <form
            className={styles.formContainer}
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className={styles.formItem}>
                <label className={styles.label} htmlFor="fullname">
                    * Full name:
                </label>
                <input
                    type="text"
                    {...register('fullname', {
                        required: true,
                        pattern: nameRegexp,
                    })}
                    id="fullname"
                    name="fullname"
                    aria-invalid={errors.fullname ? 'true' : 'false'}
                    placeholder="John Rosie"
                    className={styles.input}
                    style={{
                        borderColor: errors.fullname ? '#D28B8B' : '#97d28b',
                    }}
                />
                {errors.fullname && touchedFields.fullname && (
                    <p className={styles.errorMessage}>Wrong Fullname </p>
                )}
            </div>
            <div className={styles.formItem}>
                <label className={styles.label} htmlFor="email">
                    * E-mail:
                </label>
                <input
                    type="mail"
                    {...register('email', {
                        required: true,
                        pattern: emailRegexp,
                    })}
                    id="email"
                    name="email"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    placeholder="johnrosie@gmail.com"
                    className={styles.input}
                    style={{
                        borderColor: errors.email ? '#D28B8B' : '#97d28b',
                    }}
                />
                {errors.email && touchedFields.email && (
                    <p className={styles.errorMessage}>Wrong Email </p>
                )}
            </div>
            <div className={styles.formItem}>
                <label className={styles.label} htmlFor="phone">
                    * Phone:
                </label>
                <input
                    type="tel"
                    {...register('phone', {
                        required: true,
                        pattern: phoneRegexp,
                    })}
                    id="phone"
                    name="phone"
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    placeholder="380961234567"
                    className={styles.input}
                    style={{
                        borderColor: errors.phone ? '#D28B8B' : '#97d28b',
                    }}
                />
                {errors.phone && touchedFields.phone && (
                    <p className={styles.errorMessage}>Wrong Phone </p>
                )}
            </div>
            <div className={styles.formItem}>
                <label className={styles.label} htmlFor="message">
                    Message:
                </label>
                <textarea
                    {...register('message')}
                    id="message"
                    name="message"
                    placeholder="Your message"
                    className={styles.input}
                    style={{ height: '147px', resize: 'none' }}
                />
            </div>
            <div className={styles.btnContainer}>
                <ButtonWithText
                    text="Send"
                    type="submit"
                    variant="lightBtn"
                    isDisabled={!isValid}
                >
                    <ArrowRight />
                </ButtonWithText>
            </div>
        </form>
    );
};

export default ContactForm;
