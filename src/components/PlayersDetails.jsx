import React from 'react'

const PlayersDetails = ({ playerOne, playerTwo }) => {
  return (
    <div>
      <p>Player 1 name: {playerOne}</p>
      <p>Player 2 name: {playerTwo}</p>
    </div>
  )
}

export default PlayersDetails
