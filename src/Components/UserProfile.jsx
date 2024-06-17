import React,{useEffect} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteUser, getUser } from '../Actions/Actions'

function UserProfile() {
    const {id}=useParams()
    const navigate = useNavigate()
    const { user } = useSelector(state => state.single)


    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getUser(id))
    },[dispatch])

   const  handleClick=(id)=>{
      dispatch(deleteUser(id));
      alert("Account Deleted Successfully")
      navigate('/developers_profile')
    }


  return (
    <div className="my-16 px-16">
      <h1 className="text-5xl text-blue-500 text-left py-6 font-bold ">
      Profile
      </h1>
      <div className='border'>
        <h1>Username: {user?.name}</h1>
        <p>Email: {user?.email}</p>
      </div>
    </div>
  )
}

export default UserProfile