import React, { useState } from 'react';
import './header.css';
import logo from '../../assets/images/logo.png';
import LanguageSelector from '../LanguageSelector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

const Header = () => {
  const { t } = useTranslation(); // Use the translation hook
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(prev => !prev);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleNav();
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Zamon Logo" />
          <span className="brand">{t('brand')}</span> {/* Use translation for brand */}
          <span className="subtitle">{t('businessTravel')}</span> {/* Use translation for subtitle */}
        </div>

        {/* Toggle Button with Icons */}
        <div
          className="chocolate-bar-button"
          onClick={toggleNav}
          onKeyPress={handleKeyPress}
          role="button"
          tabIndex={0}
          aria-label="Toggle Navigation"
          aria-expanded={isNavOpen}
        >
          <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} size="2x" color="white" />
        </div>
      </div>

      {/* Navigation */}
      <div className={`chocolate-bar-nav ${isNavOpen ? 'open' : ''}`}>
        <nav className="menu-sections">
          <ul className="nav-list">
            {['home', 'about', 'tours', 'contacts'].map((item, index) => (
              <li className="nav-item" key={index}>
                <a href={`#${item}`} onClick={toggleNav}>{t(item)}</a> {/* Use translation keys */}
              </li>
            ))}
          </ul>

          <LanguageSelector /> {/* Include the LanguageSelector here */}

          <div className="social-icons">
            <a href="#telegram" className="icon1" aria-label="Telegram">
              <i className="fab fa-telegram-plane"></i>
            </a>
            <a href="#instagram" className="icon1" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </nav>
      </div>

      {/* Overlay */}
      {isNavOpen && <div className="overlayer" onClick={toggleNav} aria-hidden="true"></div>}
    </header>
  );
};

export default Header;
