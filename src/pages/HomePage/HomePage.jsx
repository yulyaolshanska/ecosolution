import React from 'react';
import About from '../../components/About/About';
import Electricity from '../../components/Electricity/Electricity';
import Cases from '../../components/Cases/Cases';
import ContactUs from '../../components/ContactUs/ContactUs';
import FAQ from '../../components/FAQ/FAQ';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import MainValues from '../../components/MainValues/MainValues';
import Hero from '../../components/Hero/Hero';
import styles from './HomePage.module.scss';

const HomePage = () => {
    return (
        <div className={styles.pageContainer}>
            <Header />
            <Hero />
            <MainValues />
            <About />
            <Electricity />
            <Cases />
            <FAQ />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default HomePage;
