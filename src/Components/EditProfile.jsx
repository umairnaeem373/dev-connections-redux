import React,{useState} from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { editProfile } from "../Actions/Actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function EditProfile() {

    const dispatch = useDispatch()
    let navigate=useNavigate();

    const user=JSON.parse(localStorage.getItem('user'))

    const[Inp,setInp]=useState({})

    const handleChange=(e)=>{
        setInp({...Inp,[e.target.name]: e.target.value})
    }

    const handleSubmit=()=>{
        const {career,company,address,skills}=Inp

        if(!career || !company || !address || !skills){
            alert('Please fill all fields!')
        }
        else {
          dispatch(editProfile(user.id,{profile:Inp}))
          navigate('/dashboard')
        }
    }
    


  return (
    <div className="mt-16 px-16">
      <h1 className="text-5xl text-blue-500 text-left py-6 font-bold ">
        Edit your profile
      </h1>
      <h1 className="text-3xl text-left py-2  flex">
        <span className="p-1">
          <BsFillPersonFill />
        </span>
        Add some changes to your profile
      </h1>

    
      <div className="my-2 w-full">
        <select onChange={handleChange} className="required w-full p-2 text-xl text-gray-900" name="career" id="career" required>
          <option value="">*Select Professional Status</option>
          <option value="developer">Developer</option>
          <option value="developer">Junior Developer</option>
          <option value="developer">Senior Developer</option>
          <option value="developer">Manager</option>
          <option value="developer">Student</option>
          <option value="developer">Instructor</option>
        </select>
        <span className="text-gray-400">Give us an idea of where you are at in your career</span>
      </div>

    <div className="my-6">
          <input
          onChange={handleChange}
            type="text"
            id="small-input"
            name='company'
            placeholder="Company"
            className="block w-full p-2 text-xl text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required/>
          <span className="text-gray-400">Could be your own company or one you work for</span>
        </div>
    <div className="my-6">
          <input
          onChange={handleChange}
            type="text"
            id="small-input"
            name="website"
            placeholder="Website"
            className="required block w-full p-2 text-xl text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <span className="text-gray-400">Could be your own or a company website</span>
        </div>
    <div className="my-6">
          <input
          onChange={handleChange}
            type="text"
            id="small-input"
            placeholder="Address"
            name="address"
            className="block w-full p-2 text-xl text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required/>
            <span className="text-gray-400">City & state suggested (eg. Boston, MA)</span>
        </div>
    <div className="my-6">
          <input
          onChange={handleChange}
            type="text"
            id="small-input"
            name='skills'
            placeholder="Skills"
            className="block w-full p-2 text-xl text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required/>
            <span className="text-gray-400">Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)</span>
        </div>
    <div className="my-6">
          <input
          onChange={handleChange}
            type="text"
            id="small-input"
            name='bio'
            placeholder="A short bio of yourself"
            className="block w-full p-2 text-xl text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <span className="text-gray-400">Tell us a little about yourself</span>
        </div>
        

        <div className="flex py-6 shadow-sm" role="group">
        <button
        onClick={handleSubmit}
          type="button"
          className="inline-flex items-center px-4 py-2  ms-4 text-sm font-medium text-gray-900 bg-orange-400 border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          SUBMIT
        </button>
        <button
        onClick={()=>navigate('/dashboard')}
          type="button"
          className="inline-flex items-center px-4 py-2 ms-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
         GO BACK
        </button>
      </div>
    </div>
  );
}

export default EditProfile;
