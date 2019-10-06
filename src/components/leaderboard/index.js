import React from 'react';
import './style.css';

function Leaderbord(props) {
  let { leaderboard } = props;
  const items = leaderboard.map((item) =>
    <tr className='leaderbord-row'>
      <td className='leaderbord-data'>{item.name}</td>
      <td className='leaderbord-data'>{item.points}</td>
      <td className='leaderbord-data'>{item.gameMode}</td>
    </tr>
  )

  return (
    <div className='leadebord-wrap'>
      <p className='leadebord-header'>Leader Board</p>
      <table className='leaderbord'>
        <thead>
          <tr className='leaderbord-row'>
            <td className='leaderbord-data'>NAME</td>
            <td className='leaderbord-data'>POINTS</td>
            <td className='leaderbord-data'>DIFFICULTY</td>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </table>
    </div>
  )
}

export default Leaderbord;