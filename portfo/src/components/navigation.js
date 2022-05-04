import React from 'react'
import {useNavigate} from 'react-router-dom';

function Navigation() {

  const navigate = useNavigate();
  return (

    <div className="header">
      <div className="nav">
        <div className='item'><button onClick={() => {navigate('/')}}>Home</button></div>
        <div className='item'><button onClick={() => {navigate('/projects')}}>Projects</button></div>
        <div className='item'><button onClick={() => {navigate('/contact')}}>Contact</button></div>
      </div>
    </div>
  
  )
}

export default Navigation
