import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Student() {
    const [student ,setStudent] = useState([]);

useEffect(() => {
    axios
    .get("http://127.0.0.1:8000/all/") // git data
    .then(res => {  // bring data to borwser
        console.log(res.data)
        setStudent(res.data.student)
})
.catch((err) => { 
    console.log(err);
});    
},[]);

  return (
    <>
    <div>Student</div>
       <ul>
       {student.map(e => {
       return(<li>{e.first_name}</li>)}  
      
      )}
        </ul>
   </>
  )

  }
export default Student