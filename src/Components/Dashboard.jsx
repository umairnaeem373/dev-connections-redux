import React,{useEffect,useState} from "react";
import NavBar2 from "./NavBar2";
import { BsFillPersonFill, BsFillPersonVcardFill } from "react-icons/bs";
import { FaGraduationCap, FaUserTie } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector ,useDispatch } from "react-redux";
import { deleteUser, getUser } from "../Actions/Actions";

function Dashboard() {
  const State=useSelector(e=>e.single)
  console.log("state",State);
  
  
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const [user, setUserData] = useState({});
  
  useEffect(() => {
    document.title = 'Dashboard';
    setUserData(JSON.parse(localStorage.getItem('user')))
    user.id && dispatch(getUser(user.id))
    State.user && localStorage.setItem('user',JSON.stringify(State.user))
  }, []);


 const handleClick=(id)=>{
  dispatch(deleteUser(id));
  alert("Account Deleted Successfully")
  navigate('/')
  }
  
  console.log(user,'uuu');
  return (
    <div className="px-16">
      <NavBar2 />
      <h1 className="text-5xl text-blue-500 text-left py-6 font-bold ">
        Dashboard
      </h1>
      <h1 className="text-3xl text-left py-2  flex">
        <span className="p-1">
          <BsFillPersonFill />
        </span>
        Welcome {user.name}
      </h1>
      <div className="flex flex-col items-center  md:flex-row gap-y-2 *:w-52 *:rounded py-6 shadow-sm" role="group">
        <button
        onClick={()=>navigate('/edit-profile')}
          type="button"
          className="inline-flex items-center px-4 py-2  ms-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <span className="p-1 text-2xl text-blue-900">
            <BsFillPersonVcardFill />
          </span>
          Edit Profile
        </button>
        <button
        onClick={()=>navigate('/add-experience')}
          type="button"
          className="inline-flex items-center px-4 py-2 ms-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <span className="p-1 text-2xl text-blue-900">
            <FaUserTie />
          </span>
          Add Experience
        </button>
        <button
        onClick={()=>navigate('/add-education')}
          type="button"
          className="inline-flex items-center ms-4 px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <span className="p-1 text-2xl text-blue-900">
            <FaGraduationCap />
          </span>
          Add Education
        </button>
      </div>

      <div>
        <h1 className="text-3xl font-600 py-4 text-left">
          Experience Creadentials
        </h1>


        <div className="relative w-3/4 mx-auto my-4 overflow-x-auto">
          <table className="w-full border text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Company
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Years
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
            {user.experience&&
        user.experience.map((ele, index) => {
          return(
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {ele.company}
                </th>
                <td className="px-6 py-4">{ele.title}</td>
                <td className="px-6 py-4">{ele.date.split('-').reverse().join('-')}</td>
                <td className="px-6 py-4">
                  <button
                    type="button"
                    className="inline-flex items-center ms-4 px-4 py-2 text-sm font-medium text-gray-900 bg-red-500 border border-gray-200 hover:bg-red-300 hover:text-white  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>)
              })
              }
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-600 py-4 text-left">
          Education Creadentials
        </h1>

        <div className="relative w-3/4 rounded mx-auto my-4 overflow-x-auto">
          <table className="w-full border text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  School
                </th>
                <th scope="col" className="px-6 py-3">
                  Degree
                </th>
                <th scope="col" className="px-6 py-3">
                  Feild of study
                </th>
                <th scope="col" className="px-6 py-3">
                  Years
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
            {user.education&&
        user.education.map((ele, index) => {
          return(
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {ele.school}
                </th>
                <td className="px-6 py-4">{ele.degree}</td>
                <td className="px-6 py-4">{ele.feild}</td>
                <td className="px-6 py-4">{ele.date.split('-').reverse().join('-')}</td>
                <td className="px-6 py-4">
                  <button
                    type="button"
                    className="inline-flex items-center ms-4 px-4 py-2 text-sm font-medium text-gray-900 bg-red-500 border border-gray-200 hover:bg-red-300 hover:text-white  focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>)
              })
              }
            </tbody>
          </table>
        </div>
      </div>

      <button onClick={()=>handleClick(user.id)} className="bg-red-200 py-2 px-4">Delete Account</button>
    </div>
  );
}

export default Dashboard;
