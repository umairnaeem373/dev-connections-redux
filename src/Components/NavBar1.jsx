import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { SlMenu } from "react-icons/sl";

function NavBar1() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [width, setWidth] = useState(window.innerWidth);

  const login = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    login ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [login]);

  const loginOpts = [
    {
      title: "Developers",
      link: "/developers_profile",
    },
    {
      title: "Posts",
      link: "/posts",
    },
    {
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      title: "Logout",
      link: "/login",
    },
  ];

  const logoutOpts = [
    {
      title: "Developers",
      link: "/developers_profile",
    },
    {
      title: "Sign Up",
      link: "/sign_up",
    },
    {
      title: "Login",
      link: "/login",
    },
  ];

  return (
    <>
      <nav className="w-full shadow-md fixed z-10 top-0 left-0">
        <div className="md:flex items-center justify-between bg-yellow-50 py-4 px-7 md:px-10">
          <div className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              DevConnections
            </span>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 md:hidden cursor-pointer"
          >
            {open ? <AiOutlineClose /> : <SlMenu />}
          </div>
          <ul
            className={`md:flex gap-4 md:items-center md:pb-0 pb-12 absolute left-0 w-full md:static bg-yellow-50
           md:z-auto z-[-1] md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in
            ${open ? "top-12" : "top-[-400px] "} `}
          >
            {isLoggedIn
              ? loginOpts.map(({ title, link }) => (
                  <li
                    key={title}
                    className="md:ml-8 text-sm font-medium uppercase md:my-0 my-7"
                  >
                    <Link to={link}>{title}</Link>
                  </li>
                ))
              : logoutOpts.map(({ title, link }) => (
                  <li
                    key={title}
                    onClick={() => setOpen(false)}
                    className="md:ml-8 text-sm font-medium uppercase md:my-0 my-7"
                  >
                    <Link to={link}>{title}</Link>
                  </li>
                ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

{
  /* <nav className="bg-gray-200 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              DevConnections
            </span>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <button
                onClick={() => navigate("/developers_profile")}
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                Developers
              </button>
              <button
                onClick={() => navigate("/sign_up")}
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Register
              </button>
              <button
                onClick={() => navigate("/sign_in")}
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Login
              </button>
            </ul>
          </div>
        </div>
      </nav> */
}

export default NavBar1;
