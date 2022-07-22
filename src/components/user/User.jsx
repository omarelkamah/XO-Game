import React from 'react'
import './user.css'

const User = ({ playerOne, playerTwo, activeUser, winner, winnerTimes }) => {
  return (
    <div
      className='userContainer'
      style={{ justifyContent: winner && 'center' }}
    >
      {winner ? (
        <div className={`user  userActive`}>
          <div className={`userIcon userIconActive`}>
            <span>{winner}</span>
          </div>
          {winner === 'x' && <p>Player 1 name: {playerOne}</p>}
          {winner === 'o' && <p>Player 2 name: {playerTwo}</p>}
        </div>
      ) : (
        <>
          <div className={`user ${activeUser === 'x' && 'userActive'}`}>
            <div
              className={`userIcon ${activeUser === 'x' && 'userIconActive'}`}
            >
              <span>X</span>
            </div>
            <p>Player 1 name: {playerOne}</p>
            <p>{winnerTimes.x !== 0 && `Winnings: ${winnerTimes.x}`}</p>
          </div>
          <div className={`user ${activeUser === 'o' && 'userActive'}`}>
            <div
              className={`userIcon ${activeUser === 'o' && 'userIconActive'}`}
            >
              <span>O</span>
            </div>
            <p>Player 2 name: {playerTwo}</p>
            <p>{winnerTimes.o !== 0 && `Winnings: ${winnerTimes.o}`}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default User
