import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, description, onClick }) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onClick();
    }
  };

  return (
    <div
      className="card max-w-sm rounded overflow-hidden shadow-lg p-6 hover:scale-105 transform transition-all duration-300 cursor-pointer"
      onClick={onClick}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex="0"
      style={{ cursor: 'pointer' }}
    >
      <div className="card-body font-bold text-xl mb-2">
        <h5 className="card-title">{title}</h5>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
