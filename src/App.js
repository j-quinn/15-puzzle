import React from 'react';
import Game from './Components/Game';
import './index.css';

const App = () => {
  return (
    <div className='App'>
      <div className='game-board'>
        <Game />
      </div>
    </div>
  );
};

export default App;
