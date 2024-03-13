import React from "react";
import { Tabs } from "antd";
import AllCoin from "./all";
import AirdropCoin from "./airdrop";
import SendCoin from "./send";
import ReceivedCoin from "./received";
const Transactions = () => {
  const items = [
    {
      key: "1",
      label: "All",
      children: <ReceivedCoin />,
    },
    {
      key: "2",
      label: "Sent",
      children: <SendCoin />,
    },
    {
      key: "3",
      label: "Received",
      children: <AllCoin />,
    },
    {
      key: "4",
      label: "Airdrop",
      children: <AirdropCoin />,
    },
  ];
  return (
    <div className="w-full h-full pr-[25px]">
      <div
        className="w-full min-h-[500px] rounded-[16px] p-[16px] "
        style={{
          boxShadow:
            "0px 1px 3px 0px rgba(0, 0, 0, 0.1),0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
          background: "#fff",
        }}
      >
        <p className="text-[#1d1f24] text-[20px] font-[700] ">Transactions</p>
        <p className="text-[#71717A] text-[14px] font-[400] mt-[5px]">
          This is a list of latest transactions.
        </p>
        <div className="w-full h-[1px] bg-[#b3b3b9] mb-[10px]"></div>
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </div>
  );
};

export default Transactions;
