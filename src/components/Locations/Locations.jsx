import React, { useState } from 'react';
import { MdZoomOutMap, MdOutlineZoomInMap } from 'react-icons/md'; // Icons for maximize and minimize
import './locations.css'; // Importing the CSS file for styling
import benImage from '../../assets/images/ben.jpg';
import coldImage from '../../assets/images/santorina.jpg';
import stambulImage from '../../assets/images/stambul.jpg';
import pariImage from '../../assets/images/pari.jpg';
import solImage from '../../assets/images/sol.jpg';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const locationsData = [
  {
    imageUrl: benImage,
    city: 'london', // Use translation key
    population: '2M',
  },
  {
    imageUrl: coldImage,
    city: 'santorini', // Use translation key
    population: '15K',
  },
  {
    imageUrl: stambulImage,
    city: 'istanbul', // Use translation key
    population: '15M',
  },
  {
    imageUrl: pariImage,
    city: 'paris', // Use translation key
    population: '8.3M',
  },
  {
    imageUrl: solImage,
    city: 'newYork', // Use translation key
    population: 'N/A',
  },
];

const Locations = () => {
  const { t } = useTranslation(); // Initialize the translation hook
  const [expandedCardIndex, setExpandedCardIndex] = useState(0); // Always expand the first card

  const handleMaximizeClick = (index) => {
    if (expandedCardIndex === index) {
      setExpandedCardIndex(-1); // Collapse if already expanded (toggle off)
    } else {
      setExpandedCardIndex(index); // Expand the clicked card
    }
  };

  return (
    <div className="locations-container">
      <h2 className="locations-heading">{t('bestLocations')}</h2>
      <p className="locations-subheading">
        {t('discoverOffers')}
      </p>
      <div className="locations-cards">
        {locationsData.map((location, index) => (
          <div
            className={`location-card ${expandedCardIndex === index ? 'expanded' : ''}`}
            key={index}
            onClick={() => handleMaximizeClick(index)}
          >
            <div
              className="location-image"
              style={{ backgroundImage: `url(${location.imageUrl})` }}
            >
              {expandedCardIndex === index && (
                <div className="location-info">
                  <h3>{t(location.city)}</h3> {/* Translate the city name */}
                  <p>{t('population')} {location.population}</p> {/* Use translation for "Population" */}
                </div>
              )}
              <div className="maximize-icon">
                {expandedCardIndex === index ? (
                  <MdOutlineZoomInMap onClick={() => handleMaximizeClick(index)} />
                ) : (
                  <MdZoomOutMap onClick={() => handleMaximizeClick(index)} />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
