import React from 'react';
import './style.css'

function SingleRectangle(props) {
  const handleClick = () => {
    if (props.active === props.id) {
      props.handleDotClick(props.id)
    }
  }
  let color = props.active === props.id ? "blue" : "#fff";
  color = props.clickedDots.includes(props.id) ? 'green' : color;
  color = props.disabledDots.includes(props.id) && props.clickedDots.includes(props.id) === false ? 'red' : color;
  return <div onClick={handleClick} style={{ backgroundColor: color }} className='rectangle'></div>
}

export default SingleRectangle;