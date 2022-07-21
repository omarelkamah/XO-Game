import React from 'react'

const PlayersDetails = ({ playerOne, playerTwo }) => {
  return (
    <div>
      {playerOne && <p>Player 1 name: {playerOne}</p>}
      {playerTwo && <p>Player 2 name: {playerTwo}</p>}
    </div>
  )
}

export default PlayersDetails
