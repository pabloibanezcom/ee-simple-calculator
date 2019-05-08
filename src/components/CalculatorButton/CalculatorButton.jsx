import React from 'react';

const CalculatorButton = ({ label, type, size, onClick }) => {

  const handleClick = () => {
    onClick && onClick();
  }

  return <button
    className={`calculator-button calculator-button-${type || 'default'} calculator-button-size-${size || '1'}`}
    onClick={handleClick}>
    <span>{label}</span>
  </button>
}

export default CalculatorButton;