import React from 'react'
import './Transferdata.css'

const Transferdata = (props) => {
  return (
    <div>
        <h1 className='aa'>Welcome</h1>
        <p>
            User Name :&nbsp; {props.username}<br/>
            Password :&nbsp; {props.password}<br/>
            Usertype :&nbsp; {props.usertype}<br/>
        </p>
    </div>
  )
}

export default Transferdata