import React from 'react';
import MessageIcon from '../Images/chat.jpg'
import {Link} from 'react-router-dom'

function Chat() {
  return (
    <div>
      <div className='messageBoxs'>
      < Link to="/autochat">
        <img src={MessageIcon} />
        </Link>
      </div>
    </div>
  )
}

export default Chat