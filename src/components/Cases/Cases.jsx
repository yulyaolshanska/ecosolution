import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { casesData } from '../../data/cases';
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrow-left-big.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow-right-big.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Cases.module.scss';
import CasesCard from './CasesCard/CasesCard';

const Cases = () => {
    const sliderRef = useRef();
    const [currentSlide, setCurrentSlide] = useState(2);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 768) {
                setCurrentSlide(1);
            } else {
                setCurrentSlide(2);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const slideSettings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        swipe: true,
        adaptiveHeight: true,
        initialSlide: 0,
        arrows: false,
        draggable: true,
        afterChange: index => {
            if (index === 4) {
                setCurrentSlide(index + 1);
            } else {
                setCurrentSlide(index + 2);
            }
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                    adaptiveHeight: true,
                    draggable: true,
                    initialSlide: 0,
                    arrows: false,
                    afterChange: index => {
                        setCurrentSlide(index + 1);
                    },
                },
            },
        ],
    };

    const onPrevSlide = () => {
        sliderRef.current.slickPrev();
    };

    const onNextSlide = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div className={styles.container} id="cases">
            <div className={styles.titleContainer}>
                <h3 className={styles.title}>
                    Successful cases of our company
                </h3>
                <div className={styles.verticalLine}></div>
                <div className={styles.slideNavigation}>
                    <p>
                        <span className={styles.slideCurrentText}>
                            {currentSlide}
                        </span>
                        <span className={styles.totalSlides}>
                            /{casesData.length}
                        </span>
                    </p>

                    <div className={styles.slideBtns}>
                        <button
                            className={styles.slideBtn}
                            type="button"
                            onClick={onPrevSlide}
                        >
                            <ArrowLeft />
                        </button>
                        <button
                            className={styles.slideBtn}
                            type="button"
                            onClick={onNextSlide}
                        >
                            <ArrowRight />
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <ul className={styles.list}>
                    <Slider {...slideSettings} ref={sliderRef}>
                        {casesData.map(
                            ({ id, image, alt, title, description, date }) => (
                                <CasesCard
                                    key={id}
                                    image={image}
                                    alt={alt}
                                    title={title}
                                    description={description}
                                    date={date}
                                />
                            )
                        )}
                    </Slider>
                </ul>
            </div>
        </div>
    );
};

export default Cases;
