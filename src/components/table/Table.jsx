import React from 'react'
import TicTacTablePlay from '../TicTacTablePlay/TicTacTablePlay'
import User from '../user/User'

const Table = ({ playerOne, playerTwo }) => {
  return (
    <div>
      <User playerOne={playerOne} playerTwo={playerTwo} />
      <TicTacTablePlay />
    </div>
  )
}

export default Table
