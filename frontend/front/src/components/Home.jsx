
import React from "react"

import Courses from "./Courses"
import Footer from "./Footer"
const Home=()=>
{
    return(<div>
       
       <div className="relative bg-gray-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          
          backgroundImage: "url('image.jpg')",
           // Replace with your image URL
        }}
      >
        <div className="absolute inset-0  opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-screen text-center">
        <div className="px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Learn Without Limits
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Access quality education from anywhere in the world
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Explore Courses
          </button>
        </div>
      </div>
    </div>
    <Courses/>
    <Footer/>
    </div>)
}





export default Home;