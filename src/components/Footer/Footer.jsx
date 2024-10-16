import React from 'react';
import './footer.css'; // Import the CSS file
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Footer = () => {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <footer className="footer-container">
      <div className="footer-overlay">
        <div className="footer-content">
          <div className="footer-text">
            <h1 className="footer-titled">{t('travelQuestion')}</h1> {/* Use translation for question */}
            <p className="footer-subtitle">{t('reservationMessage')}</p> {/* Use translation for subtitle */}
          </div>
          <a href="#register" className="footer-button">{t('bookNow')}</a> {/* Use translation for button text */}
        </div>
        <div className="footer-copyright">
          <p>Copyright © 2024 Shohzamin Business Tour. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
