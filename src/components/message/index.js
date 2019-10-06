import React from 'react';
import './style.css'

function Message(props) {
    let { message } = props;
    return <p className='message'>{message}</p>
}

export default Message;