import React, { useState } from 'react'
import './Product.css'


const Product = () => {
    const[pdt,setPdt]=useState('');
    const[ctr,setCtr]=useState('');
    const[mdl,setMdl]=useState('');
    const[prc,setPrc]=useState('');
    const[err,setErr]=useState('');

    const readproductname=(event) =>{
        event.preventDefault();
        console.log(event.target.value);
        setPdt(event.target.value)
    }
    const readcategory=(event) =>{
        event.preventDefault();
        console.log(event.target.value);
        setCtr(event.target.value)
    }
    const readmodel=(event) =>{
        event.preventDefault();
        console.log(event.target.value);
        setMdl(event.target.value)
    }
    const readprice=(event) =>{
        event.preventDefault();
        console.log(event.target.value);
        setPrc(event.target.value)
    }

    const checkfilldata =(event)=>{
        event.preventDefault();
        if(pdt.trim ()===''||ctr.trim()===''||mdl.trim()===''||prc==='')
        {
            setErr(true);
            return;
        }
        else{
            const myobj={
                productname:pdt,
                category:ctr,
                model:mdl,
                price:prc
            }
            fetch("https://productbcs-default-rtdb.firebaseio.com/Productbcs.json",
            {
                method:"POST",
                body:JSON.stringify(myobj),
                headers:{"content-Type":"application/json",
                }
    }
    );
    
    alert("Record saved")
    }
    }
        
            
    
  return (
    <div>
        <h1 className='aa'>Product Details</h1>
         <form>
           Product Name:<input type='text' onChange={readproductname}></input><p/>
           Category:<input type='text' onChange={readcategory}></input><p/>
           Model:<input type='text' onChange={readmodel}></input><p/>
           Price:<input type='number' onChange={readprice}></input><p/>
           <button type="Submit" onClick={checkfilldata}>Save</button>
           {err &&'Error occured'}
        </form>

    </div>
  )
  }

export default Product