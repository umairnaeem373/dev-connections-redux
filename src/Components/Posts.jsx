import React, { useEffect, useState } from "react";
import { editProfile, getUser } from "../Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { fbase } from "../firebase";

function Posts() {
  const storage = getStorage(fbase);

  const [Inp, setInp] = useState({});
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();
  const State = useSelector((e) => e.single);

  const { media } = Inp;

  console.log(State, Inp);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    dispatch(getUser(user.id));
    // State.user && localStorage.setItem('user',JSON.stringify(State.user))
  }, [dispatch, user.id]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    type === "file"
      ? setInp({ ...Inp, [name]: e.target.files[0] })
      : setInp((Inp) => ({ ...Inp, [name]: value }));
  };

  const handleSubmit = () => {
    const addMedia = () => {
      return new Promise((resolve, reject) => {
        if (!media) {
          resolve(); // No media, resolve the promise
        } else {
          const storageRef = ref(storage, `myImages/${media.name}`);
          const uploadTask = uploadBytesResumable(storageRef, media);
  
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              var progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              setProgress(progress);
            },
            (error) => {
              console.error(error);
              reject(error); // If there's an error, reject the promise
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                Inp.media = url; // Set the media URL in the `Inp` object
                resolve(); // Resolve the promise after the media URL is set
              });
            }
          );
        }
      });
    };
  
    addMedia().then(() => {
      console.log(Inp, "tempDATAT");
  
      State.user.posts
        ? dispatch(
            editProfile(user.id, {
              posts: [...State.user.posts, Inp],
            })
          )
        : dispatch(editProfile(user.id, { posts: [Inp] }));
    }).catch(error => {
      console.error("Error uploading media:", error);
    });
  };
  ;

  return (
    <div className="mt-16 p-16">
      <h1 className="text-5xl text-blue-500 text-left py-6 font-bold ">
        Posts
      </h1>
      <h1 className="text-3xl text-left py-2  flex">
        This is where you can view and create posts.
      </h1>
      <div className="grid border p-2 grid-cols-1 gap-2 sm:grid-cols-3">
        <input
          onChange={handleChange}
          type="text"
          name="title"
          id="small-input"
          className="block w-full p-2 text-gray-900 border border-gray-300 bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          onChange={handleChange}
          type="file"
          name="media"
          id="post_input"
        />
        <button
          onClick={handleSubmit}
          disabled={!Inp.media && !Inp.title}
          type="button"
          className="inline-flex justify-center max-w-[100px] items-center px-4 py-2 text-sm font-medium text-gray-900 bg-orange-400 border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Post
        </button>
        {media && media.name} {progress > 0 && `${progress}% uploaded`}
      </div>

      {State.loading === true ? (
        <h1>Loading...</h1>
      ) : (
        State.user?.posts?.map((post, index) => {
          return (
            <div
              className="flex border max-w-[80%] mx-auto rounded shadow flex-wrap my-2 p-2 justify-center items-center flex-col "
              key={index}
            >
              {post.title && (
                <h1 className="text-gray-500 text-start w-full">{post.title}</h1>
              )}
              {post.media && (
                <img
                  src={post.media}
                  className="max-h-48 max-w-48 rounded  shadow-xl"
                  alt="post.media"
                />
              )}
            </div>
          );
        })
      )}
    </div>
  );
}

export default Posts;
