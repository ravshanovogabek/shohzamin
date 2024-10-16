import React, { useState, useEffect } from 'react';
import './offers.css';
import { FaPlane, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

import franceImage from '../../assets/images/france-mobile.jpg';
import usaImage from '../../assets/images/usa-mobile.jpg';
import istanbulImage from '../../assets/images/istanbul-mobile.jpg';
import canadaImage from '../../assets/images/canada.jpg';
import dubaiImage from '../../assets/images/dubai-mobile.jpg';

const offersData = [
    {
        id: 1,
        country: 'USA',
        checkIns: 400,
        imageUrl: usaImage,
        details: [
            'offerDetails1',
            'offerDetails2',
            'offerDetails3'
        ]
    },
    {
        id: 2,
        country: 'Paris',
        checkIns: 234,
        imageUrl: franceImage,
        details: [
            'offerDetails1',
            'offerDetails2',
            'offerDetails3'
        ]
    },
    {
        id: 3,
        country: 'Canada',
        checkIns: 345,
        imageUrl: canadaImage,
        details: [
            'offerDetails1',
            'offerDetails2',
            'offerDetails3'
        ]
    },
    {
        id: 5,
        country: 'Dubai',
        checkIns: 234,
        imageUrl: dubaiImage,
        details: [
            'offerDetails1',
            'offerDetails2',
            'offerDetails3'
        ]
    },
    {
        id: 6,
        country: 'Turkey',
        checkIns: 234,
        imageUrl: istanbulImage,
        details: [
            'offerDetails1',
            'offerDetails2',
            'offerDetails3'
        ]
    },
];

const Offers = () => {
    const { t } = useTranslation(); // Use the useTranslation hook
    const [currentPage, setCurrentPage] = useState(0);
    const offersPerPage = 3; // 3 cards visible at once
    const [animateDirection, setAnimateDirection] = useState('next'); // Animation direction for smooth slide

    const handlePrev = () => {
        setAnimateDirection('prev');
        setCurrentPage((prevPage) => (prevPage === 0 ? offersData.length - 1 : prevPage - 1));
    };

    const handleNext = () => {
        setAnimateDirection('next');
        setCurrentPage((prevPage) => (prevPage === offersData.length - offersPerPage ? 0 : prevPage + 1));
    };

    // Auto-slide every 5 seconds
    useEffect(() => {
        const autoSlide = setInterval(() => {
            handleNext();
        }, 5000);

        return () => {
            clearInterval(autoSlide);
        };
    }, []);

    // Slice the offers array based on currentPage and offersPerPage
    const currentOffers = offersData.slice(currentPage, currentPage + offersPerPage);

    return (
        <section id='tours' className='offers-section'>
            <div className="offers-header">
                <h2 className="offers-title">{t('offersTitle')}</h2> {/* Use translation key */}
                <p className="offers-description">
                    {t('offersDescription')} {/* Use translation key */}
                </p>
            </div>
            <div className={`offers-container ${animateDirection}`}>
                {currentOffers.map((offer) => (
                    <div key={offer.id} className="offer-card">
                        <div className="offer-image">
                            <img src={offer.imageUrl} alt={offer.country} />
                        </div>
                        <div className="offer-details-card">
                            <h3 className="offer-country"><FaMapMarkerAlt /> {offer.country}</h3>
                            <p className="offer-checkins"><FaUsers /> {offer.checkIns} Check Ins /person</p>
                            <ul className="offer-details">
                                {offer.details.map((detail, index) => (
                                    <li key={index}><FaPlane /> {t(detail)}</li> 
                                ))}
                            </ul>
                            <a href="#contacts" className="offers-btn">{t('reservation')}</a> {/* Use translation key */}
                        </div>
                    </div>
                ))}
                <div className="offers-navigation">
                    <button onClick={handlePrev} className="nav-btn">←</button>
                    <button onClick={handleNext} className="nav-btn">→</button>
                </div>
            </div>
        </section>
    );
};

export default Offers;
