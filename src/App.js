import logo from './logo.svg';
import './App.css';
import Transferdata from './components/Transferdata';
import Login from './components/login/Login';
import Course from './components/course/Course';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Logindata from './components/login/Logindata';
import Home from './components/Home/Home';
import Book from './components/book/Book';
import Bookview from './components/book/Bookview';
import Product from './components/product/Product';
import Productview from './components/product/Productview';
import React, { useEffect, useState } from 'react';

function App() {
  const[isloggedin,setIsloggedin]=useState(false);
  
    useEffect(()=>{
      const storevalue=localStorage.getItem("isloggedin");
      if(storevalue=="1")
      {
        setIsloggedin(true);
      }
    },[])
    
    const Logincheck=(un,pwd) =>{
      localStorage.setItem("isloggedin",'1');
      setIsloggedin(true);
    }
    const LogOutcheck=(un,pwd) =>{
      localStorage.setItem("isloggedin",'1');
      setIsloggedin(false);
    }

    
  return (
    <div>
      <React.Fragment>
      {!isloggedin && <Login checkLogin={Logincheck}/>}
      {isloggedin && <Home checkLogin={LogOutcheck}/>}
      </React.Fragment>
    <BrowserRouter>
      <Routes>
       {/* <Route path={'/'} element={<Login/>}></Route> */}
      <Route path={'/Homedata'} element={<Logindata/>}></Route> 
      {/* <Route path={'/Home'} element={<Home/>}></Route> */}
      <Route path={'/Course'} element={<Course/>}></Route> 
      {/* <Route path={'/Book'} element={<Book/>}></Route>  */}
       {/* <Route path={'/v'} element={<Bookview/>}></Route> 
       <Route path={'/'} element={<Product/>}></Route>
       <Route path={'/p'} element={<Productview/>}></Route>*/}
     </Routes>      
    </BrowserRouter>



      {/* <Transferdata username="Sana" password="123456" usertype="admin"/> */}
      {/* <Login/> */}
      {/* <Course/> */}
      {/* <Logindata/> */}
      {/* <Home/> */}
      {/* <Product/> */}
      
      
    </div>
  );
}

export default App;
