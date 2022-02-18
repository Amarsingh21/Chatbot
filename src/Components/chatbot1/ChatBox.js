import React from 'react';
import './css/chatbox.css';
import Request from './Request';
import {Link} from 'react-router-dom'

function ChatBox() {
  return (
      <div className="chatbox">
        <div className="chatboxTitle">
          <div className="TitleText">Support is Online</div>
          <Link to ="/">
          <div className='TitleText closeBtn'>X</div>
          </Link>
        </div>
      <div className='messageBox'>
        <Request />
      </div>
      </div>
  )
}

export default ChatBox
