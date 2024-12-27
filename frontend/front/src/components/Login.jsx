

import React from 'react'
import { useState, useEffect } from 'react'
import { useForm} from "react-hook-form"
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Login = () => {

    const {
        register,
        handleSubmit,
      
    } = useForm({
        defaultValues: {
            userName: "",
            userEmail: "",
            userPassword: "",
           
        }
    })

    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (redirect) {
            setTimeout(() => {
                window.location.href = "/login";
            }, 4000);
        }
    }, [redirect]);

    const onSubmit = (data) => {
        console.log(data)
        // send data to backend API
        fetch("http://localhost:8000/auth//login", {
            method: "Post",
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((result) => {
            console.log(result );
            console.log()
            toast.success("login successful")
            setRedirect(true)
        })
        .catch((err) => {
            toast.error("Unable to login")
            console.log(err);
        })
    }

    return (
        // <div className='max-w-scren-2xl w-full md:w-4/6 lg:w-1/2 container mt-2 mx-auto xl:px-24 px-4  bg-dark'>
        //     <div className=' bg-[#e7e7e7] mx-auto py-6 px-6 md:px-16 rounded-lg'>

        //         {/* FORM */}
        //         <form onSubmit={handleSubmit(onSubmit)} >
        //             <div className='flex flex-col lg:flex-row  gap-8'>

        //                 {/* JOB POSTING DETAILS */}
        //                 <div className='w-full'>
        //                     <div><h1 className='text-xl my-1 font-bold text-center'>Login</h1></div>
                           
        //                     <div>
        //                         <label className='block mt-2 m-1 text-sm'>Email</label>
        //                         <input type='email' required {...register("userEmail")} placeholder='Ex: abhisheksharma@gmail.com' className='create-job-input placeholder:text-xs md:placeholder:text-sm'></input>
        //                     </div>
        //                     <div>
        //                         <label className='block mt-2 m-1 text-sm'>Password</label>
        //                         <input type='password' required {...register("userPassword")} placeholder='Create strong password' className='create-job-input placeholder:text-xs md:placeholder:text-sm'></input>
        //                     </div>
                           

                            
                           
        //                 </div>
        //             </div>

        //             {/* Submit button */}
        //             <div className='flex justify-center my-8'>
        //                 <button className='block bg-dark text-white text-md py-3 px-16 rounded-md'>Login</button>
        //             </div>
        //         </form>
        //         <div className='text-center'>
        //             <Link to='/Login'><p className='hover:underline'>Already registered? Login here!</p></Link>
        //         </div>
        //     </div>
        // </div>
        <div className="relative min-h-screen bg-gradient-to-br from-gray-100 to-blue-300 flex items-center justify-center">
  <div className="max-w-md w-full mx-auto px-4 sm:px-8 lg:px-12">
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4 px-6 text-center">
        <h1 className="text-xl font-semibold">Login</h1>
        <p className="text-xs mt-1">Access your account</p>
      </div>

      <div className="p-6 bg-gray-100">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              required
              {...register("userEmail")}
              placeholder="Ex: abhisheksharma@gmail.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none placeholder:text-gray-400 text-xs"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              required
              {...register("userPassword")}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none placeholder:text-gray-400 text-xs"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            {/* <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-xs font-medium transition-all duration-200"
            >
              Login
            </button> */}
              <button
          type="submit"
          className="w-full bg-blue-500 sm:w-auto font-medium  text-white py-2 px-4 rounded-lg text-xs  hover:bg-blue-600 transition duration-300 hover:scale-105"
        >
          Login
        </button>
          </div>
        </form>

        {/* Register Link */}
        <div className="text-center mt-4">
          <Link to="/Register">
            <p className="text-xs text-blue-600 hover:underline">Don't have an account? Register here!</p>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
