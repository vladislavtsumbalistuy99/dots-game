import React from 'react';
import './style.css'

function PlayBtn(props) {
  console.log(props);
  return <button onClick={props.handlePlayButton} className='play-btn'>{props.buttonLabel}</button>
}

export default PlayBtn;