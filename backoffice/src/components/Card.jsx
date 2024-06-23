import React from 'react';

const Card = ({ title, description, onClick }) => {
  return (
    <div 
      className="max-w-sm rounded overflow-hidden shadow-lg p-6 hover:scale-105 transform transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  );
};

export default Card;
