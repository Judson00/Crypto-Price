import React from 'react';
import '../css/App.css';
import Price from './Price';
import NewCoin from './Input';

function App() {
  return (
    <div className="App">
      <Price Crypto />
      <NewCoin />
    </div>
  );
}

export default App;
