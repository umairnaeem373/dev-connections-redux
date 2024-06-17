import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { allUsers } from "../Actions/Actions";
import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
function Developers() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const State = useSelector((e) => e.all.users);

  const Developers = State.filter((ele) => ele.hasOwnProperty("profile"));

  React.useEffect(() => {
    dispatch(allUsers());
  }, []);

  return (
    <div className="px-4 mt-8 sm:px-10 md:px-20 lg:px-40 border py-8 pt-12 md:pt-16 lg:pt-20">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl capitalize text-brown-500 font-semibold text-center">
        Developers
      </h1>
      <h2 className="text-xl sm:text-2xl my-6 text-center">
        <i className="fas fa-laptop-code"></i> Browse and Connect with
        Developers
      </h2>

      {/* user profile div start here */}

      {Developers.map((ele, i) => {
        return (
          <div className="border rounded-xl py-6 md:py-12 px-6 mb-8 md:px-12 flex flex-wrap flex-col md:flex-row items-center justify-center bg-white shadow-lg">
            <div className="w-48 h-48 bg-red-500 rounded-full">
              <img
                className="h-full w-full rounded-full object-cover"
                src={

                 ele.git ? `https://github.com/${ele.git}.png` : "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699056000&semt=sph"
                }
                alt=""
              />
            </div>
            <div className="md:flex border md:ms-4 border-gray-300 rounded bg-gray-100 lg:w-[400px] mt-4 lg:ms-8 items-center ">
              <div className="  w-[200px] p-4 md:p-3 text-center">
                <h2 className="text-2xl font-bold">{ele.name}</h2>
                <p className="text-lg mb-3 mt-1">
                  {ele.profile.career} at {ele.profile.company}
                </p>
                <p className="text-lg ">{ele.profile.address}</p>
                <button
                  onClick={() => navigate(`/user-profile/${ele.id}`)}
                  className="bg-[#CF901A] text-white px-4 py-2 rounded-lg mt-3 hover:bg-yellow-600"
                >
                  View Profile
                </button>
              </div>
              <div className=" hidden md:block md:ml-12 mt-4 md:mt-0 p-4">
                <ul>
                  {ele.profile.skills.split(",").map((e) => {
                    return (
                      <li className="flex">
                        <span>
                          <TiTick />
                        </span>
                        {e}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        );
      })}

      {/* user profile div end here */}
    </div>
  );
}

export default Developers;
