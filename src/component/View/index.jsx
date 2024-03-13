import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Search from "../../assets/icons/search-normal.svg";
import Bell from "../../assets/icons/bell-bold.svg";
import TestUser from "../../assets/img/userTest.png";
const ViewComponent = () => {
  return (
    <div className="w-full h-full flex ">
      <Sidebar />
      <div className="flex w-full flex-col">
        <div className="w-full h-[100px]  flex justify-between pr-[25px]">
          <div className="flex gap-[10px] items-center">
            <img src={Search} alt="search" className="w-[20px] h-[20px]" />
            <input
              type="text"
              placeholder="Search..."
              className="border-none outline-none bg-inherit placeholder:text-[13px] placeholder:font-[600]"
            />
          </div>

          <div className="flex gap-[20px] items-center">
            <img
              src={Bell}
              alt="search"
              className="w-[20px] h-[20px] cursor-pointer"
            />
            <img
              src={TestUser}
              alt="search"
              className="w-[33px] h-[33px] cursor-pointer rounded-[50%] "
            />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default ViewComponent;
