import React, { useRef, useState } from 'react'
import AddPlayerTitle from './AddPlayerTitle'

const AddPlayerForm = props => {
  const {
    playerOne,
    setPlayerOne,
    playerTwo,
    setPlayerTwo,
    setStartPlay
  } = props
  const firstPlayerNameRef = useRef()
  const secondPlayerNameRef = useRef()
  const [checkName, setCheckName] = useState(false)

  const addPlayer = () => {
    if (playerOne === '') {
      firstPlayerNameRef.current.value !== ''
        ? setPlayerOne(
            `${firstPlayerNameRef.current.value} ${secondPlayerNameRef.current.value}`
          )
        : setCheckName(true)
    } else if (playerTwo === '') {
      if (firstPlayerNameRef.current.value !== '') {
        setPlayerTwo(
          ` ${firstPlayerNameRef.current.value} ${secondPlayerNameRef.current.value}`
        )
        setStartPlay(true)
      }
    }

    firstPlayerNameRef.current.value = ''
    secondPlayerNameRef.current.value = ''
    firstPlayerNameRef.current.focus()
  }

  return (
    <div className='addPlayer'>
      <AddPlayerTitle title='First' />
      {checkName && <p style={{ color: 'red' }}>...Please add Your Name!</p>}
      <div className='addPlayerInputs'>
        <div className='addPlayerInput'>
          <label>First Name</label>
          <input
            ref={firstPlayerNameRef}
            type='text'
            placeholder='First Name'
            autoFocus
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
