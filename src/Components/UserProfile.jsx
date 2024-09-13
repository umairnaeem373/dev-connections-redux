import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteUser, getUser } from "../Actions/Actions";

function UserProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.single);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user,'use effect user')
    dispatch(getUser(id));
  }, [dispatch, id]);

  const handleClick = (id) => {
    dispatch(deleteUser(id));
    alert("Account Deleted Successfully");
    navigate("/developers_profile");
  };

  return (
    <div className="my-16 px-8">
      <h1 className="text-5xl text-blue-500 text-left py-6 font-bold ">
        Profile
      </h1>
      <div className="border-2 min-w-64 grid sm:grid-cols-2 py-2 rounded-lg shadow-md *:text-start">
        <img className="rounded-full h-48 block mx-auto" src={`https://github.com/${user.git}.png`}  alt={`${user.name} profile pic` }/>
        <div className="mt-4">
        <h1 className="font-bold text-xl px-4">{user?.name}</h1>
        <p className="font-semi-bold px-4 py-1"> {user?.email}</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
