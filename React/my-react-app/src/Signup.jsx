import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate();
    const handleSignup = () => {
        navigate('/Login');
    };
  return (
    <div>
      <p>Signup Page</p>
      <button onClick={handleSignup}>Signup</button>
    </div>
  )
}

export default Signup
