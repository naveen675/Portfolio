import React from 'react'
import {useNavigate} from 'react-router-dom'

function Error() {

    const navigate = useNavigate();
  return (
    <div className='error'>
      <h1>OOPS Wrong Page...</h1>
      <p>click below to go back to home</p>
      <button onClick={() => {navigate('/')}}>home</button>
    </div>
  )
}

export default Error
