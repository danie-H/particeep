import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Movies } from './features/movies/Movies';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Movies />
      </header>
    </div>
  );
}

export default App;
