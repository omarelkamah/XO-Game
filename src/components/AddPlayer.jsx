import React, { useRef } from 'react'
import AddPlayerTitle from './AddPlayerTitle'

const AddPlayer = ({ setPlayerOne }) => {
  const firstPlayerNameRef = useRef()
  const secondPlayerNameRef = useRef()

  const addPlayer = () => {
    setPlayerOne(
      `Player 1 name: ${firstPlayerNameRef.current.value} ${secondPlayerNameRef.current.value}`
    )
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

export default AddPlayer
