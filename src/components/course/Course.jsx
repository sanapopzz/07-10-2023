import React, { useState } from 'react'

const Course = () => {

    const[cn,setCn]=useState('');
    const[du,setDu]=useState('');
    const[fee,setfee]=useState('');

    const readcoursename=(event) =>{
        console.log(event.target.value);
        setCn(event.target.value);
    }
    const readduration=(event) =>{
        console.log(event.target.value);
        setDu(event.target.value);
    }
    const readfeeamount=(event) =>{
        console.log(event.target.value);
        setfee(event.target.value);
    }
  return (
    <div>
        <form>
            Course Name<input type='text'onChange={readcoursename} /><p/>
            Duration<input type='text'onChange={readduration} /><p/>
            Fee amount<input type='text'onChange={readfeeamount} /><p/>
            <button type='Submit'>Login</button>
        </form>
     </div>
  )
}

export default Course