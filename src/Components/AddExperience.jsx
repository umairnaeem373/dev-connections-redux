import React, { useEffect, useState } from "react";
import NavBar2 from "./NavBar2";
import { FaCode } from "react-icons/fa";
import { editProfile, getUser } from "../Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AddExperience() {
  const State = useSelector((e) => e.single);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [Inp, setInp] = useState({});

  useEffect(() => {
    dispatch(getUser(user.id));
    State.user && localStorage.setItem("user", JSON.stringify(State.user));
  }, []);

  const handleChange = (e) => {
    setInp({ ...Inp, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { title, company, date } = Inp;
    if (!title || !company || !date) {
      alert("Please fill all fields!");
    } else {
      user.experience
        ? dispatch(
            editProfile(user.id, { experience: [...user.experience, Inp] })
          )
        : dispatch(editProfile(user.id, { experience: [Inp] }));
    }
  };

  return (
    <div className="px-16">
      <NavBar2 />
      <h1 className="text-5xl text-blue-500 text-left py-6 font-bold ">
        Add An Experience
      </h1>
      <h1 className="text-3xl text-left py-2  flex">
        <span className="p-1">
          <FaCode />
        </span>
        Add any developer/programming positions that you have had in the past
      </h1>

      <div className="my-6">
        <input
          onChange={handleChange}
          type="text"
          id="small-input"
          name="title"
          placeholder="*Job Title"
          className="required block w-full p-2 text-xl text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="my-6">
        <input
          onChange={handleChange}
          type="text"
          id="small-input"
          name="company"
          placeholder="*Company"
          className="block w-full p-2 text-xl text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="my-6">
        <input
          onChange={handleChange}
          type="text"
          id="small-input"
          placeholder="Location"
          name="location"
          className="block w-full p-2 text-xl text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="my-6">
        <input
          onChange={handleChange}
          type="Date"
          id="small-input"
          name="date"
          placeholder="Date"
          className="block w-full p-2 text-xl text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="my-6">
        <input
          onChange={handleChange}
          type="text"
          id="small-input"
          name="bio"
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
          onClick={() => navigate("/dashboard")}
          type="button"
          className="inline-flex items-center px-4 py-2 ms-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          GO BACK
        </button>
      </div>
    </div>
  );
}

export default AddExperience;
