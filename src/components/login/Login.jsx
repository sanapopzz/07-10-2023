import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const[un,setUn]=useState('');
    const[pwd,setPwd]=useState('');
    const[error,setError]=useState(false);
    const navigate=useNavigate('');

    const readusername =(event) =>{
        event.preventDefault();
        console.log(event.target.value);
        setUn(event.target.value);
    }
    const readpassword =(event) =>{
        event.preventDefault();
        console.log(event.target.value);
        setPwd(event.target.value);
        
    }
    const checkfilldata =(event) =>{
        event.preventDefault();
        if(un.trim ()===''||pwd==='')
        {
            setError(true);
            return;
        }
        else{
            navigate("/Home");
        }

    }
  return (
    <div>
        <h1>Sign In</h1>
        <form>
            Username:<input type='text' onChange={readusername}/><p/>
            Password:<input type='password' onChange={readpassword}/><p/>
            <button type="Submit" onClick={checkfilldata}>Login</button>
        </form>
        {error&&'error occured'}
    </div>
  );
}

export default Login