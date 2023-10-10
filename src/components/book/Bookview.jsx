import React, { useState } from 'react'

const Bookview = () => {
    const[viewd,setViewdata]=useState([]);

    const readbookdata =(event) =>{

    fetch("https://sampledbcs-9685d-default-rtdb.firebaseio.com/Book.json",)
    .then((response) => {
        return response.json()
    }).then((data) =>{
        console.log(snapshotToArray(data));
        setViewdata(snapshotToArray(data));
    }) 
    }

    function snapshotToArray(snapshot){
        const array=[];

        Object.keys(snapshot).forEach((key) => {
            array.push(snapshot[key]);
        });
        return array;
    }

  return (
    <div>
        <input type='button' value='view' onClick={readbookdata}></input>
        <br/>
        <br/>
        <table border="1">
            <tr>
                <th>BookName</th>
                <th>Auther</th>
                <th>Publisher</th>
            </tr>
            {viewd.map((value,index) =>{
                return(
                    <tr key={index}>
                        <td>{value.bookname}</td>
                        <td>{value.auther}</td>
                        <td>{value.publisher}</td>
                    </tr>
                )
            })}
        </table>
    </div>
  )
}

export default Bookview