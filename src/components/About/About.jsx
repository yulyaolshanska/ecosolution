import React from 'react';
import { aboutData } from '../../data/about';
import styles from './About.module.scss';
import AboutCard from './AboutCard/AboutCard';
import AboutImage1 from '../../assets/images/about/wind-farms-fields.jpg';
import AboutImage2 from '../../assets/images/about/man-worker-firld-by-solar-panels.jpg';

const About = () => {
    return (
        <ul className={styles.aboutList} id="about">
            {aboutData.slice(0, 2).map(({ id, text, icon, title }) => (
                <AboutCard text={text} icon={icon} title={title} key={id} />
            ))}
            <li className={styles.cardImage}>
                <img className={styles.aboutImage} src={AboutImage1} alt="" />
            </li>
            <li className={styles.cardImage}>
                <img className={styles.aboutImage} src={AboutImage2} alt="" />
            </li>
            {aboutData.slice(2, 4).map(({ id, text, icon, title }) => (
                <AboutCard text={text} icon={icon} title={title} key={id} />
            ))}
        </ul>
    );
};

export default About;
