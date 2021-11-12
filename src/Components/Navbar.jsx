import React from "react";
import PollIcon from "@mui/icons-material/Poll";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Avatar from "@mui/material/Avatar";
import "./Navbar.css";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <>
      <div className="py-4  border-b px-2 2xl:px-16 border-black">
        <div className="flex items-center justify-between">
          <div className="logo flex items-center">
            <PollIcon className="poll__Icon  text-blue-500 transform rotate-45" />
            <h1 className="font-extrabold text-2xl 2xl:text-4xl ml-3">Fungy</h1>
          </div>
          <div className="search hidden 2xl:block  2xl:ml-6">
            <div className="border px-3 py-3 rounded-full bg-gray-200">
              <SearchIcon className="" />
              <input
                type="text"
                placeholder="Search items,collections,creators"
                className="outline-none bg-gray-200 ml-2"
              />
            </div>
          </div>
          <div className="menu hidden ml-3 mt-5 lg:mt-0  xl:flex xl:ml-6 text-sm lg:text-lg text-gray-500 xl:font-medium">
            <a href="/">Explore</a>
            <a href="/" className=" ml-2 lg:ml-5">
              My Items
            </a>
            <a href="/" className=" ml-2 lg:ml-5">
              Following
            </a>
            <a href="/" className=" ml-2 lg:ml-5">
              Activity
            </a>
            <a href="/" className=" ml-2 lg:ml-5">
              How it works
            </a>
            <div className=" ml-2 lg:ml-5">
              <a href="/">Community</a>
              <KeyboardArrowDownIcon />
            </div>
          </div>
          
          <div className=" ml-6 flex items-center">
            <div className="notificaton border rounded-full">
              <NotificationsNoneIcon className="p-1 text-gray-500" />
            </div>
            <div className=" drop-down">
              <div className="token border flex items-center ml-2 lg:ml-5 rounded-full px-4 py-1 hover:text-blue-600 cursor-pointer hover:border-blue-600 ">
                <h1 className="text-sm lg:text-lg">0</h1>
                <h1 className=" text-sm lg:text-lg ml-2">TOKEN</h1>
              </div>
              <div className="dropdown-content hidden z-30 absolute">
              <div className="flex flex-col bg-white w-52 mt-7 shadow border-t-2 border-blue-500 rounded-b-lg">
              <h1 className="text-center mt-4 text-blue-600 font-medium text-lg">Create a Collection</h1>
              <a href="/" className="mt-2 ml-6 font-medium">My Profile</a>
                <a href="/" className="mt-2 ml-6 font-medium">My Favourite</a>
                <a href="/" className="mt-2 ml-6 font-medium">Manage Funds</a>
                <a href="/" className="mt-2 ml-6 mb-3 font-medium">Log Out</a>
              </div>
               
              </div>
            </div>
            <Avatar
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAsK6oIKzeSCKiqpjv5cuoC4ZC_hJ0FxNkvQ&usqp=CAU"
              className="ml-4"
            />
            <div className=" block xl:hidden">
            <MobileMenu/>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
