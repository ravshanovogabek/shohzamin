import React from 'react';
import './explore.css';
import { useTranslation } from 'react-i18next'; // Import useTranslation

// Local images
import trainImage from '../../assets/images/poezd.jpg';
import airplaneImage from '../../assets/images/samalyot2.jpg';
import dubaiImage from '../../assets/images/london1.jpg';
import antalyaImage from '../../assets/images/antalya.jpg';

const Explore = () => {
    const { t } = useTranslation(); // Initialize the translation hook

    return (
        <section id='about'>
            <div className="explore-container">
                <h1>{t('exploreDestinations')}</h1>
                <p>{t('bestDeals')}</p>
                
                <div className="explore-card">
                    <img src={trainImage} alt="Train" className="explore-image" />
                    <div className="explore-content">
                        <h2>{t('cheapRailwayTickets')}</h2>
                        <p>{t('wholeWorld')}</p>
                        <p>{t('railwayAdventure')}</p>
                        <a href='#contacts' className="explore-button">{t('exploreMoreButton')}</a>
                    </div>
                </div>
                
                <div className="explore-card">
                    <img src={airplaneImage} alt="Airplane" className="explore-image" />
                    <div className="explore-content">
                        <h2>{t('discoverAirTravelDeals')}</h2>
                        <p>{t('globalDestinations')}</p>
                        <p>{t('airborneAdventure')}</p>
                        <a href='#contacts' className="explore-button">{t('exploreMoreButton')}</a>
                    </div>
                </div>

                {/* New Section for Cities */}
                <h1>{t('visitCountries')}</h1>
                <p>{t('curatedOffers')}</p>

                <div className="explore-city-card">
                    <img src={dubaiImage} alt="London" className="explore-city-image" />
                    <div className="explore-city-content">
                        <h2>London</h2>
                        <p>{t('populationStat')} 8.66 Mil People</p>
                        <p>{t('territoryStat')} 41,290 km²</p>
                        <p>{t('avgPriceStat')} $1,100,200</p>
                        <p>{t('londonDescription')}</p>
                        <a href="#contacts" className="explore-city-link">{t('needDirections')}</a>
                        <a href='#contacts' className="explore-button">{t('exploreMoreButton')}</a>
                    </div>
                </div>

                <div className="explore-city-card">
                    <img src={antalyaImage} alt="Antalya" className="explore-city-image" />
                    <div className="explore-city-content">
                        <h2>Antalya</h2>
                        <p>{t('populationStat')} 1.3 Mil People</p>
                        <p>{t('territoryStat')} 20,177 km²</p>
                        <p>{t('avgPriceStat')} $500,000</p>
                        <p>{t('antalyaDescription')}</p>
                        <a href="#contacts" className="explore-city-link">{t('needDirections')}</a>
                        <a href='#contacts' className="explore-button">{t('exploreMoreButton')}</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Explore;
