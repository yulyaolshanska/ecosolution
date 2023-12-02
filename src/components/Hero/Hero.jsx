import ButtonWithText from '../Buttons/ButtonWithText';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow-right-green.svg';
import heroImage from '../../assets/images/hero/hero.jpg';
import heroImageTablet from '../../assets/images/hero/hero-780w.jpg';
import heroImageDesktop from '../../assets/images/hero/hero-1280w.jpg';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>RENEWABLE ENERGY For any task</h1>
      <p className={styles.desc}>
        Development and implementation of renewable non-polluting energy
        sources, generating power generation using energy wind, sun, water,
        biomass
      </p>
      <ButtonWithText text="Learn more" variant="learnMoreBtn" hash="/#cases">
        <ArrowRight />
      </ButtonWithText>
      <div className={styles.line}></div>
      <div className={styles.address}>
        <p className={styles.addressText}>
           79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </p>
        <a href="mailto:office@ecosolution.com" className={styles.mail}>
          office@ecosolution.com
        </a>
        <p className={styles.copyright}>ecosolution © 2023</p>
      </div>
      <img
        className={styles.heroImage}
        alt="Wind turbine"
        srcSet={`
    ${heroImage} 767w,
    ${heroImageTablet} 1280w,
    ${heroImageDesktop} 1920w
  `}
        sizes="(max-width: 767px) 100vw,
         (min-width: 768px) and (max-width: 1279px) 100vw,
         (min-width: 1280px) 1280px"
        src={heroImage}
      />
    </div>
  );
};

export default Hero;
