import React, { useRef } from 'react'
import AddPlayerTitle from './AddPlayerTitle'

const AddPlayerForm = ({
  playerOne,
  setPlayerOne,
  playerTwo,
  setPlayerTwo,
  setStartPlay
}) => {
  const firstPlayerNameRef = useRef()
  const secondPlayerNameRef = useRef()

  const addPlayer = () => {
    if (playerOne === '') {
      setPlayerOne(
        `${firstPlayerNameRef.current.value} ${secondPlayerNameRef.current.value}`
      )
    } else if (playerTwo === '') {
      setPlayerTwo(
        ` ${firstPlayerNameRef.current.value} ${secondPlayerNameRef.current.value}`
      )
      setStartPlay(true)
    }

    firstPlayerNameRef.current.value = ''
    secondPlayerNameRef.current.value = ''
  }

  return (
    <div className='addPlayer'>
      <AddPlayerTitle title='First' />
      <div className='addPlayerInputs'>
        <div className='addPlayerInput'>
          <label>First Name</label>
          <input
            ref={firstPlayerNameRef}
            type='text'
            placeholder='First Name'
          />
        </div>
        <div className='addPlayerInput'>
          <label>Last Name</label>
          <input
            ref={secondPlayerNameRef}
            type='text'
            placeholder='Last Name'
          />
        </div>
      </div>
      <button className='addPlayerButton' onClick={() => addPlayer()}>
        Containue
      </button>
    </div>
  )
}

export default AddPlayerForm
