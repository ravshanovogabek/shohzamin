import React from "react";
import './map.css'; // Make sure to include the updated CSS

const Map = () => {
  return (
    <div className="map-card">
      
      <iframe
        title="Uzbekistan IT Park"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1953.0125038879423!2d69.24008531773169!3d41.2994939792164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef7a83f7a5e67%3A0xd93ab4c1c90560d8!2sUzbekistan%20IT%20Park!5e0!3m2!1sen!2sus!4v1694060257491!5m2!1sen!2sus"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
