import React from 'react'
import './Home.css'
import Header from '../header/Header'
const Home = (props) => {
  return (
    <div>
      <Header xxx={props.checkLogOut}/>
       <h1 className='tt'> Welcome To Adminpanel</h1>
    </div>
  )
}

export default Home