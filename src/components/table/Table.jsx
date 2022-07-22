import React, { useState } from 'react'
import { checkWinner } from '../../data'
import TicTacTablePlay from '../TicTacTablePlay/TicTacTablePlay'
import User from '../user/User'

const Table = ({ playerOne, playerTwo, activeUser, setActiveUser }) => {
  const [boxs, setBoxs] = useState(['', '', '', '', '', '', '', '', ''])
  const [xNext, setXNext] = useState(false)
  const [winner, setWinner] = useState('')
  const [lineWinner, setLineWinner] = useState('')
  const [winnerTimes, setWinnerTimes] = useState({ x: 0, o: 0 })

  const handelClickOnBox = index => {
    let changedBoxs = [...boxs]
    changedBoxs[index] = !xNext ? 'x' : 'o'
    setBoxs(changedBoxs)
    setXNext(!xNext)
    activeUser === 'x' ? setActiveUser('o') : setActiveUser('x')
    getWinner(changedBoxs)
  }

  const getWinner = boxes => {
    const isWinner = checkWinner(boxes)
    if (isWinner) {
      setWinner(isWinner.winner)
      isWinner.winner !== '' && setLineWinner(isWinner.line)

      // setWinnerTimes
      const times = { ...winnerTimes }
      times[isWinner.winner] += 1
      setWinnerTimes(times)
    }
  }

  const handelResetButton = () => {
    setBoxs(['', '', '', '', '', '', '', '', ''])
    setWinner('')
    setLineWinner('')
  }

  return (
    <div>
      <User
        playerOne={playerOne}
        playerTwo={playerTwo}
        activeUser={activeUser}
        winner={winner}
        winnerTimes={winnerTimes}
      />
      <TicTacTablePlay
        handelClickOnBox={handelClickOnBox}
        boxs={boxs}
        lineWinner={lineWinner}
      />
      {winner && (
        <div className='btnContainer'>
          <button className='resetBtn' onClick={() => handelResetButton()}>
            Reset Game
          </button>
        </div>
      )}
    </div>
  )
}

export default Table
