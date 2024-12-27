 
import {NavLink} from "react-router-dom"
import React from 'react';



const Navbar=()=>
{
    return (
      <nav className="bg-[#202020] shadow-md">
 <div className=" container mx-auto px-4  ">
         
        <ul className="flex items-center justify-between py-4 text-white">
        <li className="font-bold text-lg tracking-wide">EDU LEARN</li>

<div className="flex gap-5 text-sm font-medium">
  
<li className="hover:text-blue-400 transition duration-200 ">
            <NavLink to="/">home
          
            </NavLink>
          </li>
          
          {/* <li  className="hover:text-blue-400 transition-all duration-200 transition-property-easein">
            <NavLink to="/About">About</NavLink>
          
          </li> */}
           <li className="hover:text-blue-400 transition duration-200">
            <NavLink to="/About">About</NavLink>
          </li>
 
          <li  className="hover:text-blue-400 transition duration-200">
            <NavLink to="/Courses">Courses</NavLink>
          
          </li>

        
          <li  className="hover:text-blue-400 transition duration-200">
            <NavLink to="/Contact"> Contact</NavLink>
         
          </li>

          <li  className="hover:text-blue-400 transition duration-200">
            <NavLink to="/Login">login</NavLink>
            
          </li>
          <li  className="hover:text-blue-400 transition duration-200">
            <NavLink to="/Register">Register</NavLink>
            
          </li>

</div>
        
        </ul>
      </div>
</nav>


// <div className="min-h-screen flex flex-col">
//   {/* Navbar */}
//   <nav className="bg-[#202020] shadow-md">
//     <div className="container mx-auto px-4">
//       <ul className="flex items-center justify-between py-4 text-white">
//         <li className="font-bold text-lg tracking-wide">EDU LEARN</li>
//         <div className="flex gap-5 text-sm font-medium">
//           <li className="hover:text-blue-400 transition duration-200">
//             <NavLink to="/">Home</NavLink>
//           </li>
//           <li className="hover:text-blue-400 transition duration-200">
//             <NavLink to="/About">About</NavLink>
//           </li>
//           <li className="hover:text-blue-400 transition duration-200">
//             <NavLink to="/Courses">Courses</NavLink>
//           </li>
//           <li className="hover:text-blue-400 transition duration-200">
//             <NavLink to="/Contact">Contact</NavLink>
//           </li>
//           <li className="hover:text-blue-400 transition duration-200">
//             <NavLink to="/Login">Login</NavLink>
//           </li>
//           <li className="hover:text-blue-400 transition duration-200">
//             <NavLink to="/Register">Register</NavLink>
//           </li>
//         </div>
//       </ul>
//     </div>
//   </nav>
//   </div>










    );
}
export default Navbar;