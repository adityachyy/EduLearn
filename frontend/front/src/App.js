import About from './components/About'
import Contact from './components/Contact'
import { Login }  from './components/Login'
import Courses from './components/Courses'
import Navbar from './components/Navbar'
import { Register } from './components/Register'
import './App.css'


 import {Route, Routes} from "react-router-dom"
import Home from './components/Home'

 
function App() {


  return (
   <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
  <Route path="/Courses" element={<Courses/>}/>

  <Route path="/About" element={<About/>}/> 
  <Route path="/Contact" element={<Contact/>}/>
  <Route path="/Login" element={<Login/>}/>
  <Route path="/Register" element={<Register/>}/>
     </Routes>

     
    

   </div>
  );
}

export default App

