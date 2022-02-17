import React from 'react'
import './css/main.css'
import MessageIcon from './Images/chat.jpg'
import {Link} from 'react-router-dom'

function Main() {
  return (
    <div className='messageIcon'>
      < Link to="/chat">
        <img src={MessageIcon} />
        </Link>
    </div>
  )
}

export default Main