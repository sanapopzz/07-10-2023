import React, { useState } from 'react'
import './Book.css'

const Book = () => {
    const[book,setBook]=useState('');
    const[au,setAu]=useState('');
    const[pu,setPu]=useState('');
    const[er,setEr]=useState(false);

    const readbookname=(event) =>{
        event.preventDefault();
        console.log(event.target.value);
        setBook(event.target.value)
    }
    const readauther=(event) =>{ 
        event.preventDefault();
        console.log(event.target.value);
        setAu(event.target.value)

    }
    const readpublisher=(event) =>{ 
        event.preventDefault();
        console.log(event.target.value);
        setPu(event.target.value)
    }

    const checkfilldata =(event) =>{
        event.preventDefault();
        if(book.trim ()===''||au===''||pu==='')
        {
            setEr(true);
            return;
        }
        else{
            const myobj={
                bookname:book,
                auther:au,
                publisher:pu
            }
            fetch("https://sampledbcs-ab1b8-default-rtdb.firebaseio.com/SampleDBCS"),
            {
                method:"post",
                body:JSON.stringify(myobj),
                headers:{"content-Type":"application.json"
        
                }
        }
    }
    
    }
  return (
    <div>
        <h1 className='td'>Book Details</h1>
        <form>
            Book Name:<input type='text' onChange={readbookname}></input><p/>
            Auther:<input type='text' onChange={readauther}></input><p/>
            Publisher:<input type='text' onChange={readpublisher}></input><p/>
            <button type='Submit'onClick={checkfilldata}>Save</button>
            {er &&'Error occured'}
        </form>
    </div>
  )
}

export default Book