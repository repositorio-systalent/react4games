import React from 'react';
import Debugger from '../Debugger';
import { GAME_SIZE } from '../setings/constants';
import './App.css';
import Board from './Board';

function App() {
  return (
    <div className="App">
      <div 
        style={{
          position: 'relative',
          width: GAME_SIZE,
          height: GAME_SIZE
        }}
        >
        <Debugger />
        <Board />
      </div>
    </div>
  );
}

export default App;
