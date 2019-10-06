import React from 'react';
import './style.css';

function NameField(props) {
  return (
    <input onChange={props.handleInputName} type='text' className='name-field' placeholder='Enter your name' />
  )
}

export default NameField;