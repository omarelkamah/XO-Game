import React from 'react'
import AddPlayerForm from './AddPlayerForm'
import PlayersDetails from './PlayersDetails'

const AddPlayer = props => {
  const {
    playerOne,
    setPlayerOne,
    playerTwo,
    setPlayerTwo,
    setStartPlay
  } = props

  return (
    <>
      <PlayersDetails playerOne={playerOne} playerTwo={playerTwo} />
      <AddPlayerForm
        playerOne={playerOne}
        setPlayerOne={setPlayerOne}
        playerTwo={playerTwo}
        setPlayerTwo={setPlayerTwo}
        setStartPlay={setStartPlay}
      />
    </>
  )
}

export default AddPlayer
