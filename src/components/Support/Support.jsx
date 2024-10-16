import React, { useState, useEffect } from 'react';
import './support.css'; // Import the CSS file
import { FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import { ImPriceTags } from "react-icons/im";
import { IoTimerSharp } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import { useTranslation } from 'react-i18next'; // Import useTranslation

import usaImage from '../../assets/images/aqsh.jpg';
import franceImage from '../../assets/images/fransiya.jpg';
import italyImage from '../../assets/images/italy.jpg';
import spainImage from '../../assets/images/ispanya.jpg';
import germanImage from '../../assets/images/germanya.jpg';
import japanImage from '../../assets/images/japan.jpg';
import australiaImage from '../../assets/images/sidney.jpg';

// Data for countries and their visa support information
const countries = [
    { id: 1, country: 'USA', checkIns: 400, imageUrl: usaImage },
    { id: 4, country: 'France', checkIns: 200, imageUrl: franceImage },
    { id: 5, country: 'Italy', checkIns: 300, imageUrl: italyImage },
    { id: 6, country: 'Spain', checkIns: 150, imageUrl: spainImage },
    { id: 7, country: 'Germany', checkIns: 120, imageUrl: germanImage },
    { id: 8, country: 'Japan', checkIns: 280, imageUrl: japanImage },
    { id: 9, country: 'Australia', checkIns: 350, imageUrl: australiaImage }
];

const Support = () => {
    const { t } = useTranslation(); // Initialize the translation hook
    const [currentPage, setCurrentPage] = useState(0);
    const [animationDirection, setAnimationDirection] = useState('right');

    const handlePrev = () => {
        setAnimationDirection('left');
        setCurrentPage(prevPage => (prevPage === 0 ? countries.length - 1 : prevPage - 1));
    };

    const handleNext = () => {
        setAnimationDirection('right');
        setCurrentPage(prevPage => (prevPage === countries.length - 1 ? 0 : prevPage + 1));
    };

    useEffect(() => {
        const autoSlide = setInterval(handleNext, 5000);
        return () => clearInterval(autoSlide);
    }, []);

    // Determine the countries to display based on the current page
    const currentCountries = [
        countries[currentPage],
        countries[(currentPage + 1) % countries.length],
        countries[(currentPage + 2) % countries.length]
    ];

    return (
        <section className="support-section">
            <div className="support-header">
                <h2 className="support-title">{t('visaSupport')}</h2>
                <p className="support-description">
                    {t('visaSupportDescription')}
                </p>
            </div>

            <div className="support-container">
                <div className="support-cards-wrapper">
                    {currentCountries.map((support, index) => (
                        <div
                            key={support.id}
                            className={`support-card ${
                                animationDirection === 'right' ? 'slide-in-right' : 'slide-in-left'
                            }`}
                        >
                            <div className="support-image">
                                <img src={support.imageUrl} alt={support.country} />
                            </div>

                            <div className="support-details-card">
                                <h3 className="support-country">
                                    <FaMapMarkerAlt /> {support.country}
                                </h3>
                                <p className="support-checkins">
                                    <FaUsers /> {support.checkIns} {t('checkIns')}/person
                                </p>
                                <div className="benefits">
                                    <p>{t('benefits')}</p>
                                    <ul>
                                        <li><ImPriceTags /> {t('bestPrices')}</li>
                                        <li><IoTimerSharp /> {t('shortProcessingTime')}</li>
                                        <li><SiTicktick /> {t('trustworthyAssistance')}</li>
                                    </ul>
                                </div>
                                <a href='#contacts' className="offers-btn">{t('makeReservation')}</a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="support-nav">
                    <button className="nava-btn" onClick={handlePrev}>←</button>
                    <button className="nava-btn" onClick={handleNext}>→</button>
                </div>
            </div>
        </section>
    );
};

export default Support;
