import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


function Update() {
    const navigate = useNavigate();
    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [id,setId]=useState(null);

    useEffect (()=>{
            setFirstName(localStorage.getItem("firstName"));
            setLastName(localStorage.getItem("lastName"));
            setId(localStorage.getItem("id"));

        },[])
    const updateData = ()=>{
        axios
        .put(`https://62d3e34dcd960e45d44f7d16.mockapi.io/fakeAPI/${id}`,{firstName , lastName})
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
    <div>Update</div>
    <input placeholder='First name' onChange={(e)=>{setFirstName(e.target.value)}}></input>
    <input placeholder='Last name' onChange={(e)=>{setLastName(e.target.value)}}></input>

    <button onClick={updateData}>update</button>
    </>
  )
}

export default Update