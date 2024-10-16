import React, { useState, useEffect } from "react";
import "./main.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesome component
import { faUser, faGlobe, faHome } from '@fortawesome/free-solid-svg-icons'; // Specific icons
import { useTranslation } from 'react-i18next'; // Import useTranslation

// Import local images
import dubaiImage from '../../assets/images/uk.jpg'; 
import newYorkImage from  '../../assets/images/new-york.jpg'; 
import tokyoImage from '../../assets/images/amsterdam.jpg'; 
import londonImage from '../../assets/images/paris.jpg'; 

const cities = [
    {
      name: "New York",
      population: "8.39 M",
      territory: "789 KM²",
      avgPrice: "$680,000",
      image: newYorkImage,
    },
    {
      name: "Amsterdam",
      population: "14.04 M",
      territory: "2,194 KM²",
      avgPrice: "$600,000",
      image: tokyoImage,
    },
    {
      name: "Paris",
      population: "8.98 M",
      territory: "1,572 KM²",
      avgPrice: "$750,000",
      image: londonImage,
    },
    {
      name: "London",
      population: "67.41 M",
      territory: "551,500 KM²",
      avgPrice: "$425,600",
      image: dubaiImage,
    }
];

const Main = () => {
    const { t } = useTranslation(); // Use useTranslation hook
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === cities.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000); 

      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    const handleCityChange = (index) => {
      setCurrentIndex(index);
    };

    const currentCity = cities[currentIndex];

    return (
      <section id="home">
        <div className="main-container">
          <div
            className="background-image"
            style={{ backgroundImage: `url(${currentCity.image})` }}
          >
            <div className="content">
              <h2>{t('takeAGlimpse')}</h2> {/* Use translation key */}
              <h1>{currentCity.name}</h1>
              <a href="#contacts" className="go-there-btn">{t('goThere')}</a> {/* Use translation key */}
            </div>

            <div className="info-section">
              <div className="info-box">
                <FontAwesomeIcon icon={faUser} className="icon" />
                <div className="info-details">
                  <p>{t('population')}</p> {/* Use translation key */}
                  <h3>{currentCity.population}</h3>
                </div>
              </div>
              <div className="info-box">
                <FontAwesomeIcon icon={faGlobe} className="icon" />
                <div className="info-details">
                  <p>{t('territory')}</p> {/* Use translation key */}
                  <h3>{currentCity.territory}</h3>
                </div>
              </div>
              <div className="info-box">
                <FontAwesomeIcon icon={faHome} className="icon" />
                <div className="info-details">
                  <p>{t('avgPrice')}</p> {/* Use translation key */}
                  <h3>{currentCity.avgPrice}</h3>
                </div>
              </div>
              <a href="#contacts" className="explore-more-btn">{t('exploreMore')}</a> {/* Use translation key */}
            </div>

            {/* Number indicator section */}
            <div className="number-indicator">
              {cities.map((city, index) => (
                <div 
                  key={index}
                  className={`number ${index === currentIndex ? 'active' : ''}`} 
                  onClick={() => handleCityChange(index)}
                >
                  {index + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
};

export default Main;
