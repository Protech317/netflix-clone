import React from "react";
import "./AlertComponent.css"; // Import the CSS file for styling

const AlertComponent = ({ message, onClose }) => {
  if (!message) return null; // Render nothing if there's no message

  return (
    <div className="alert-container">
      <div className="alert-message">{message}</div>
      <button onClick={onClose} className="alert-close-button">
        Close
      </button>
    </div>
  );
};

export default AlertComponent;
