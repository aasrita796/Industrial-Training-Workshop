import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/Signup');
    };

  return (
    <div>
      <p>Login Page</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
