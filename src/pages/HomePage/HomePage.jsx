import React from 'react';

import About from '../../components/About/About';
import Cases from '../../components/Cases/Cases';
import ContactUs from '../../components/ContactUs/ContactUs';
import FAQ from '../../components/FAQ/FAQ';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';

const HomePage = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Cases />
            <FAQ />
            <ContactUs />
            <Footer />
        </>
    );
};

export default HomePage;
