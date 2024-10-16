import React, { useState } from 'react';
import './phone.css';
import { FaTelegramPlane, FaTimes } from 'react-icons/fa'; // Telegram and close icons from react-icons

const Phone = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(''); // Message state to track input

  // Toggle the chat visibility
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Handle input change
  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  // Simulate sending a message
  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Message sent:', message); // This is where the message would be sent
      setMessage(''); // Clear input after sending
    }
  };

  return (
    <div>
      {/* Floating Telegram button */}
      <div className={`phone-button ${isOpen ? 'open' : ''}`} onClick={toggleChat}>
        {isOpen ? <FaTimes className="icon" /> : <FaTelegramPlane className="icon" />}
      </div>

      {/* Chat box */}
      <div className={`chat-box ${isOpen ? 'visible' : ''}`}>
        <div className="chat-header">
          <h4>Chat with Us</h4>
          <FaTimes className="close-icon" onClick={toggleChat} />
        </div>
        <div className="chat-body">
          <p>Hi! How can we assist you today?</p>
        </div>
        <div className="chat-footer">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={handleInputChange}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Phone;
