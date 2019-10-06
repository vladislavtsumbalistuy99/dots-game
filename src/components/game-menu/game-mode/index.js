import React from 'react';
import './style.css';

function GameMode(props) {
  return (
    <div>
      <form>
        <select className='select' onChange={props.handleGameMode}>
          <option className='hide'>Pick game mode</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
          <option value="Flash">Flash mode!</option>
        </select>
      </form>
    </div>
  )
}

export default GameMode;