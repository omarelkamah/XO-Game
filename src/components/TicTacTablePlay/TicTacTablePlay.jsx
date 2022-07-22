import React from 'react'
import './ticTacTablePlay.css'

const TicTacTablePlay = ({ boxs, handelClickOnBox, lineWinner }) => {
  return (
    <div className='cardTable'>
      {boxs.map((box, index) => (
        <div
          className={`${lineWinner.includes(index) && 'winCard'}`}
          onClick={() => handelClickOnBox(index)}
        >
          {box}
        </div>
      ))}
    </div>
  )
}

export default TicTacTablePlay
