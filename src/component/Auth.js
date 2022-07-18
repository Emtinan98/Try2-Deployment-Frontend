import React from 'react'
import {useRef} from 'react'
import Home from './Home'

function Auth() {
    const email=useRef();
    const password=useRef();
    const getEmail = localStorage.getItem("emailData")
    const getPassword = localStorage.getItem("passwordData")
    const handleSubmit =()=>{
        if(email.current.value=="emt@gm.com"&&password.current.value=="1234"){
            localStorage.setItem("emailData","emt@gm.com")
            localStorage.setItem("passwordData","1234")
        }
    }
  return (
    <>
    <h1>Login</h1>
    {
        getEmail&&getPassword? <Home/>:

        <form onSubmit={handleSubmit}>
        <div><input type='text' ref={email}></input></div>
        <div><input type='password' ref={password}></input></div>
        <button> Login </button>
        </form>
    }
    </>
  )
}

export default Auth