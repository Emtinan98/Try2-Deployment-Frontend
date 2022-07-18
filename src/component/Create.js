import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function Create() {
    const navigate = useNavigate();
    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');

    const postData = ()=>{
        axios
        .post(`https://62d3e34dcd960e45d44f7d16.mockapi.io/fakeAPI`,{firstName , lastName})
        .then(res=>{
            console.log(res)
            navigate('/getcre')
        })
        .catch((err) => { 
            console.log(err);
        }); 
    }
  return (
    <>
    <div>Create</div>
    <input placeholder='First name' onChange={(e)=>{setFirstName(e.target.value)}}></input>
    <input placeholder='Last name' onChange={(e)=>{setLastName(e.target.value)}}></input>

    <button onClick={postData}>Log in</button>
    </>
  )
}

export default Create