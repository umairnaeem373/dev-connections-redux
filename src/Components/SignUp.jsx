import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { addUser } from '../Actions/Actions';
import { useNavigate } from 'react-router-dom';


const initialState={}

function SignUp() {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [user, setUser] = useState(initialState)

    const handleChange=(e)=>{
        setUser({
            ...user, [e.target.name] : e.target.value
        })
    }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 text-center">Sign Up</h1>
      <h2 className="text-xl sm:text-2xl mb-6 text-center"><i className="fas fa-user"></i> Create Your Account</h2>
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
        <input className="border-b mb-4 px-4 py-3 rounded-lg w-full text-gray-700" 
        type="text" 
        placeholder="Name"
        name='name'
    onChange={handleChange}
         />
        <input className="border-b mb-4 px-4 py-3 rounded-lg w-full text-gray-700"
         type="text"
         placeholder="Email Address"
         name='email'
         onChange={handleChange}
         />
        <input className="border-b mb-4 px-4 py-3 rounded-lg w-full text-gray-700"
         type="text"
         placeholder="Github Username (Optional)"
         name='git'
         onChange={handleChange}
         />
        <input className="border-b mb-4 px-4 py-3 rounded-lg w-full text-gray-700"
         type="password"
         placeholder="Password"
         name='password'
         onChange={handleChange}
         />
        <input className="border-b mb-4 px-4 py-3 rounded-lg w-full text-gray-700"
         type="password"
         placeholder="Confirm Password"
         name='confirm'
         onChange={handleChange}
         />
        <button className="bg-[#CF901A] text-white px-4 py-3 rounded-lg w-full hover:bg-yellow-600"
        onClick={()=>{
          dispatch(addUser(user))
          navigate("/login")
          
        }}
        >Register</button>
        <p className="mt-4 text-center">Already Have an Account? <Link to="/Sign_in" className="text-[#CF901A] hover:text-yellow-600">Sign In</Link></p>
      </div>
    </div>
  );
}

export default SignUp;


