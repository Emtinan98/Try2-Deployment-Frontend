import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

function GetCre() {
    const [data ,setData] = useState([]);

useEffect(() => {
    axios
    .get("https://62d3e34dcd960e45d44f7d16.mockapi.io/fakeAPI") // git data
    .then(res => {  // bring data to borwser
        console.log(res)
        setData(res.data)
})
.catch((err) => { // in case did't work
    console.log(err);
});    
},[]);

// UPDATE
const setUpdate = (e)=>{
    let{id,firstName,lastName}=e;
    localStorage.setItem("id",id);
    localStorage.setItem("firstName",firstName);
    localStorage.setItem("lastName",lastName);

}

// Delete
const getData = ()=>{ // لعرض البيانات بعد عملية الحذف
    axios
    .get(`https://62d3e34dcd960e45d44f7d16.mockapi.io/fakeAPI`)
    .then(getData =>{
    setData(getData.data)})
}

const onDelete = (id) => {
    axios
    .delete(`https://62d3e34dcd960e45d44f7d16.mockapi.io/fakeAPI/${id}`)
    .then(()=>{
        getData()
    })
}

  return (
    <div>
    <div>List Users</div>
       <ul>
       {data.map((e) => (
        <>
      <li>{e.firstName}</li>
      <li>{e.lastName}</li>
      <Link to={'/up'}>
      <button onClick={setUpdate(e)}>Update</button>
      </Link>
      <button onClick={() => {
        onDelete(e.id)}}>Delete</button>
       </> ))}
       </ul>
      </div>
  )

  }
export default GetCre