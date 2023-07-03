'use client'
import Login from '@/components/Login/Login'
import Register from '@/components/Register/Register';
import { useState } from 'react'

export default function SingIn() {
  const [showLogin, setShowLogin] = useState(true);

  const handleToggle = () => {
    setShowLogin(prevState => !prevState);
  }

  const buttonRender = <button className="text-blue-600 transition duration-200 hover:underline " onClick={handleToggle}>{showLogin ? 'Signup' : 'Signin'}</button>

  return (
    <>
      {showLogin ? <Login buttonRender={buttonRender}/> : <Register buttonRender={buttonRender}/>}
    </>
  )
}
