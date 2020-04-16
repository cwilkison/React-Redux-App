import React from 'react';
import logo from './logo.svg';
import './App.css';
import BreakingQuote from './components/BreakingQuote';
import Cancer from './images/cancer.jpg';

function App() {
  const image = [Cancer]
  return (
    <div className="App">
      <BreakingQuote />
      <img className = "drugs" src = {image}></img>
    </div>
  );
}

export default App;
