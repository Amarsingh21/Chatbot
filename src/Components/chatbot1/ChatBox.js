import React from 'react';
import './css/chatbox.css';
import Request from './Request';


function ChatBox() {
  return (
      <div className="chatbox">
        <div className="chatboxTitle">
          <div className="TitleText">Support is Online</div>
        </div>
      <div className='messageBox'>
        <Request />
      </div>
      </div>
  )
}

export default ChatBox