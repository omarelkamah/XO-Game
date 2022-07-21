import React from 'react'
import './user.css'

const User = ({ playerOne, playerTwo }) => {
  return (
    <div className='userContainer'>
      <div className='user userActive'>
        <div className='userIcon userIconActive'>
          <span>X</span>
        </div>
        <p>Player 1 name: {playerOne}</p>
      </div>
      <div className='user userActive'>
        <div className='userIcon userIconActive'>
          <span>O</span>
        </div>
        <p>Player 1 name: {playerTwo}</p>
      </div>
    </div>
  )
}

export default User
