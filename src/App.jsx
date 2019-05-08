import React from 'react';
import logo from './assets/images/logo.svg';
import Calculator from './containers/Calculator/Calculator';

function App() {
  return (
    <div className="app">
      <div className="app--logo-container">
        <img src={logo} className="app--logo" alt="logo" />
      </div>
      <div>
        <Calculator />
      </div>
    </div>
  );
}

export default App;
