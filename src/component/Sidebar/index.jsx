import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import {
  ArrowsLeftRightIcon,
  ChartPieSliceIcon,
  FrameIcon,
  GaugeIcon,
  StackIcon,
} from "./style";
const Sidebar = () => {
  const navigate = useNavigate();
  const [url, setUrl] = useState("");
  useEffect(() => setUrl(window.location.pathname), [window.location.pathname]);
  return (
    <div className="w-[288px] h-[100vh] pl-[15px] py-[30px] mr-[50px]">
      <div className="flex gap-[12px] items-center mb-[64px]">
        <img src={Logo} alt="Sunstone" />
        <p className="text-[#1d1f24] text-[18px] font-[700] ">
          Admin Dashboard
        </p>
      </div>

      <div className="w-full flex flex-col gap-[8px]">
        <div
          className={`flex h-[48px] gap-[10px] p-[10px] items-center cursor-pointer rounded-[12px] ${
            url == "/transactions" && "bg-[#fff]"
          }`}
          onClick={() => navigate("/transactions")}
        >
          <StackIcon active={url == "/transactions" ? true : false} />
          <p className="text-[#1d1f24] text-[14px] font-[600] ">Transactions</p>
        </div>

        <div
          className={`flex h-[48px] gap-[10px] p-[10px] items-center cursor-pointer rounded-[12px] ${
            url == "/dashboard" && "bg-[#fff]"
          }`}
          onClick={() => navigate("/dashboard")}
        >
          <GaugeIcon active={url == "/dashboard" ? true : false} />
          <p className="text-[#1d1f24] text-[14px] font-[600] ">Dashboard</p>
        </div>

        <div
          className={`flex h-[48px] gap-[10px] p-[10px] items-center cursor-pointer rounded-[12px] ${
            url == "/trade" && "bg-[#fff]"
          }`}
          onClick={() => navigate("/trade")}
        >
          <ArrowsLeftRightIcon active={url == "/trade" ? true : false} />
          <p className="text-[#1d1f24] text-[14px] font-[600] ">Trade</p>
        </div>

        <div
          className={`flex h-[48px] gap-[10px] p-[10px] items-center cursor-pointer rounded-[12px] ${
            url == "/insight" && "bg-[#fff]"
          }`}
          onClick={() => navigate("/insight")}
        >
          <FrameIcon active={url == "/insight" ? true : false} />
          <p className="text-[#1d1f24] text-[14px] font-[600] ">Insight</p>
        </div>

        <div
          className={`flex h-[48px] gap-[10px] p-[10px] items-center cursor-pointer rounded-[12px] ${
            url == "/reports" && "bg-[#fff]"
          }`}
          onClick={() => navigate("/reports")}
        >
          <ChartPieSliceIcon active={url == "/reports" ? true : false} />
          <p className="text-[#1d1f24] text-[14px] font-[600] ">Reports</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
