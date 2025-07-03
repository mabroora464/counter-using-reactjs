// src/App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-app">
      <h1 className="counter-title">React Counter App</h1>
      <div className="counter-display">{count}</div>
      <div className="counter-buttons">
        <button className="decrement" onClick={decrement}>Decrement</button>
        <button className="reset" onClick={reset}>Reset</button>
        <button className="increment" onClick={increment}>Increment</button>
      </div>
    </div>
  );
};

export default App;
