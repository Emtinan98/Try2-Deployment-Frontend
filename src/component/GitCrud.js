import React, { useEffect, useState } from 'react'
import axios from 'axios';

function GitCrud() {
    const [data ,setData] = useState([]);

useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/posts") // git data
    .then(res => {  // bring data to borwser
        console.log(res)
        setData(res.data)
})
.catch((err) => { // in case did't work
    console.log(err);
});    
},[]);

  return (
    <>
    <div>GitCrud</div>
        {/* {data} */}

       <ul>
       {data.map(e => { // show data in browser
       return(<li>{e.title}</li>)} // نستخدم return 
       // علشان استخدمنا الاقواس {}
      )}
        </ul>
   </>
  )

  }
export default GitCrud