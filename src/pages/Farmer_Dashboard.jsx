import React, { useState, useRef, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, Route, Routes } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import Sidebar from "../components/Sidebar";
import Logo from "../assets/logo_no.png";

const Farmer_Dashboard = () => {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const scrollRef = useRef(null);

  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transaction-height duration-75 ease-out">
      <div className="hidden md:flex h-screen flex-initial">
        <Sidebar />
      </div>
      <div className="flex md:hidden flex-row">
        <div className="p-2 w-full flex flex-row justidy-between items-center shadow-md">
          <HiMenu
            fontSize={40}
            className="cursor-pointer"
            onClick={() => setToggleSidebar(true)}
          />
          <Link to="/">
            <img src={Logo} alt="logo" className="w-32" />
          </Link>
        </div>
        {toggleSidebar && (
          <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
            <div className="absolute w-full flex justify-end items-center p-2">
              <AiFillCloseCircle
                className="cursor-pointer text-white"
                fontSize={30}
                onClick={() => setToggleSidebar(false)}
              />
            </div>
            <Sidebar closeToggle={setToggleSidebar} />
          </div>
        )}
      </div>

      <div className="pb-2 flex-1 h-screen overflow-y-scroll" ref={scrollRef}>
        {/* open area for content */}
      </div>
    </div>
  );
};

export default Farmer_Dashboard;
