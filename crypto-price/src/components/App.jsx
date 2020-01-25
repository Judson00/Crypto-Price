import React from 'react';
import '../css/App.css';
import Price from './Price';
import NewCoin from './Input';

function App() {
  return (
    <div className="App">
      <h1>Crypto Price</h1>
      <Price />
      <NewCoin />
    </div>
  );
}

export default App;
