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


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route path={'/'} element={<Login/>}></Route>
      <Route path={'/Homedata'} element={<Logindata/>}></Route> 
      <Route path={'/Course'} element={<Course/>}></Route> 
      <Route path={'/Home'} element={<Home/>}></Route>
       <Route path={'/Book'} element={<Book/>}></Route> 
       <Route path={'/v'} element={<Bookview/>}></Route> 


      </Routes>      
    </BrowserRouter>



      {/* <Transferdata username="Sana" password="123456" usertype="admin"/> */}
      {/* <Login/> */}
      {/* <Course/> */}
      {/* <Logindata/> */}
      {/* <Home/> */}
      
      
      
    </div>
  );
}

export default App;
