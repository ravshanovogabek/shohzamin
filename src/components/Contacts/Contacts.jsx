import React from 'react';
import './contacts.css';
import backgroundImage from '../../assets/images/subway2.jpg';  // Import the local image
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Contacts = () => {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <section id='contacts'>
      <div className="contacts-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="overlay">
          <h2 className="section-title">{t('makeReservation')}</h2> {/* Use translation for title */}
          <p className="sub-title">{t('bookDeal')}</p> {/* Use translation for subtitle */}
          <a href='#register' className="discover-button">{t('discoverMore')}</a> {/* Use translation for button text */}

          <div className="contact-options">
            {/* Phone Contact */}
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3>{t('makePhoneCall')}</h3> {/* Use translation for heading */}
              <p>{t('phoneNumber')}</p> {/* Use translation for phone number */}
            </div>

            {/* Email Contact */}
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>{t('contactEmail')}</h3> {/* Use translation for heading */}
              <p>{t('emailAddress')}</p> {/* Use translation for email address */}
            </div>

            {/* Office Visit */}
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>{t('visitOffices')}</h3> {/* Use translation for heading */}
              <p>{t('officeAddress')}</p> {/* Use translation for office address */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
