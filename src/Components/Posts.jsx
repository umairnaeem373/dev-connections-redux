import React, { useEffect, useState } from "react";
import { editProfile, getUser } from "../Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import { getStorage  } from "firebase/storage";
import {fbase} from '../firebase'

function Posts() {
  
  const storage = getStorage(fbase)
  console.log(fbase,storage,'swipe wipe')
  
  const [Inp, setInp] = useState({});
  const dispatch = useDispatch();
  const State = useSelector((e) => e.single);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    dispatch(getUser(user.id));
    // State.user && localStorage.setItem('user',JSON.stringify(State.user))
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInp({ ...Inp, [name]: value });
  };

  console.log(Inp);

  const handleSubmit = () => {
    State.user.posts
      ? dispatch(editProfile(user.id, { posts: [...State.user.posts, Inp] }))
      : dispatch(editProfile(user.id, { posts: [Inp] }));
  };

  console.log(State, "ppp");

  return (
    <div className="mt-16 p-16">
      <h1 className="text-5xl text-blue-500 text-left py-6 font-bold ">
        Posts
      </h1>
      <h1 className="text-3xl text-left py-2  flex">
        This is where you can view and create posts.
      </h1>
      <div className="flex">
        <input
          onChange={handleChange}
          type="text"
          name="title"
          id="small-input"
          className="block w-full p-2 text-gray-900 border border-gray-300 bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <input
          onChange={handleChange}
          type="file"
          name="media"
          id="post_input"
        />
        <button
          onClick={handleSubmit}
          type="button"
          className="inline-flex items-center px-4 py-2  ms-4 text-sm font-medium text-gray-900 bg-orange-400 border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Post
        </button>
      </div>

      {State.loading === true ? (
        <h1>Loading...</h1>
      ) : (
        State.user?.posts?.map((post, index) => {
          return (
            <div key={index}>
              <h1 className="text-black">{post}</h1>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Posts;
