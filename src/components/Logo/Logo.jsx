import styles from './Logo.module.scss';
import LogoIcon from '../../assets/icons/logo.svg';

const Logo = () => {
    return (
        <div className={styles.logoContainer}>
            <img src={LogoIcon} alt="Logo" />
            <p className={styles.title}>ecosolution</p>
            <p className={styles.subTitle}>
                <span className={styles.accent}>green</span>ergy for life
            </p>
        </div>
    );
};

export default Logo;
