import React , {useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector ,useDispatch } from 'react-redux';
import { allUsers } from '../Actions/Actions';

function SignIn() {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(allUsers())
  },[])

  const {users} = useSelector((state) => state.all);
  const [Current , setCurrent] = useState({}) 

  const handleChange=(e)=>{
    const {name,value}=e.target
    setCurrent({...Current,[name]:value})
  }

  const handleLogin=()=>{
    const person=users.find(e=>e.email===Current.email && e.password===Current.password)
    if (person){
       localStorage.setItem('user',JSON.stringify(person))
      window.location='/dashboard'
    }else{
        alert("Invalid email or password")
    } 
  }
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 text-center">Sign In</h1>
      <h2 className="text-xl sm:text-2xl mb-6 text-center"><i className="fas fa-user"></i> Sign Into Your Account</h2>
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
        <input onChange={handleChange} name='email' className="border-b mb-4 px-4 py-3 w-full text-gray-700" type="text" placeholder="Email Address" />
        <input onChange={handleChange} name='password' className="border-b mb-4 px-4 py-3 w-full text-gray-700" type="password" placeholder="Password" />
        <button className="bg-[#CF901A] text-white px-4 py-3 w-full hover:bg-yellow-600" onClick={handleLogin} >Login</button>
        <p className="mt-4 text-center">Don't Have an Account? <Link to="/sign_up" className="text-[#CF901A] hover:text-yellow-600">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default SignIn;
