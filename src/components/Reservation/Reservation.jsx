import React, { useState } from 'react';
import './reservation.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Reservation = () => {
  const { t } = useTranslation(); // Initialize the translation hook
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [destination, setDestination] = useState('Antalya');
  const [visaSupportCountry, setVisaSupportCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
      Reservation Details:
      Name: ${name}
      Phone: ${phoneNumber}
      Guests: ${numberOfGuests}
      Check-in Date: ${checkInDate}
      Destination: ${destination}
      Visa Support: ${visaSupportCountry}
    `;

    const token = '7752023998:AAE9wPcW-8GxhZ2sEmU-k2HwsrmU-o0AOK0'; // Replace with your bot token
    const chat_id = '7251438309'; // Replace with your chat ID or group ID where messages should be sent
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    // Send message to Telegram using axios
    axios.post(url, {
      chat_id,
      text: message,
    })
    .then((response) => {
      console.log('Message sent successfully:', response.data);

      // SweetAlert2 Success Alert
      Swal.fire({
        title: t('reservationSent'), // Use translation for success message
        text: t('reservationSuccess'), // Use translation for success text
        icon: 'success',
        confirmButtonText: 'OK'
      });
    })
    .catch((error) => {
      console.error('Error sending message to Telegram:', error);

      // SweetAlert2 Error Alert
      Swal.fire({
        title: t('errorSending'), // Use translation for error message
        text: t('errorSendingMessage'), // Use translation for error text
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
  };

  return (
    <section id='register'>
      <div className="reservation-container">
        <h2 className='hash'>{t('makeReservation')}</h2> {/* Use translation for heading */}
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="name">{t('yourName')}</label> {/* Use translation for label */}
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('exampleName')} // Use translation for placeholder
                required
              />
            </div>
            <div className="form-group half-width">
              <label htmlFor="phoneNumber">{t('yourPhoneNumber')}</label> {/* Use translation for label */}
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder={t('examplePhone')} // Use translation for placeholder
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group half-width">
              <label htmlFor="numberOfGuests">{t('numberOfGuests')}</label> {/* Use translation for label */}
              <select
                id="numberOfGuests"
                name="numberOfGuests"
                value={numberOfGuests}
                onChange={(e) => setNumberOfGuests(e.target.value)}
                required
              >
                <option value="">{t('select')}</option> {/* Use translation for select option */}
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4+</option>
              </select>
            </div>
            <div className="form-group half-width">
              <label htmlFor="checkInDate">{t('checkInDate')}</label> {/* Use translation for label */}
              <input
                type="date"
                id="checkInDate"
                name="checkInDate"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="destination">{t('chooseDestination')}</label> {/* Use translation for label */}
              <select
                id="destination"
                name="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
              >
                <option value="">{t('select')}</option> {/* Use translation for select option */}
                <option value="Antalya">Antalya</option>
                <option value="USA">New-York</option>
                <option value="GB">London</option>
                <option value="Santorini">Santorini</option>
                <option value="Paris">Paris</option>
                <option value="Tokyo">Tokyo</option>
                <option value="Sidney">Sidney</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="visaSupportCountry">{t('chooseVisaSupport')}</label> {/* Use translation for label */}
              <select
                id="visaSupportCountry"
                name="visaSupportCountry"
                value={visaSupportCountry}
                onChange={(e) => setVisaSupportCountry(e.target.value)}
                required
              >
                <option value="">{t('select')}</option> {/* Use translation for select option */}
                <option value="spain">Spain</option>
                <option value="USA">USA</option>
                <option value="Japan">Japan</option>
                <option value="Italy">Italy</option>
              </select>
            </div>
          </div>
          <button className='butka' type="submit">{t('makeReservationNow')}</button> {/* Use translation for button text */}
        </form>
      </div>
    </section>
  );
};

export default Reservation;
