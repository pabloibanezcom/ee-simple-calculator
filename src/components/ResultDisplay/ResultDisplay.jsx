import React from 'react';

const ResultDisplay = ({ result }) => {
  let resultSize;
  if (result.length >= 10 && result.length < 16) {
    resultSize = 'sm';
  } else if (result.length >= 16) {
    resultSize = 'xs';
  } else {
    resultSize = 'md';
  }
  return <div className={`result-display result-display-${resultSize}`}>
    <span>{result !== '' ? result : '0'}</span>
  </div>
}

export default ResultDisplay;