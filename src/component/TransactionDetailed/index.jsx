import React from "react";
const Transactions = () => {
  return (
    <div className="w-full h-full pr-[25px]">
      <p className="text-[#1d1f24] text-[20px] font-[700] ">
        Transaction Details
      </p>
      <p className="text-[#71717A] text-[14px] font-[400] mt-[5px] mb-[10px]">
        View details
      </p>
      <div
        className="w-full min-h-[750px] rounded-[2px] p-[16px] "
        style={{
          boxShadow:
            "0px 1px 3px 0px rgba(0, 0, 0, 0.1),0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
          background: "#fff",
        }}
      >
        <div className="flex w-full justify-end mb-[10px]">
          <p className="text-[#1d1f24] text-[24px] font-[500] ">
            Transaction #15478
          </p>
        </div>

        <div className="flex mb-[50px]">
          <div className="flex-1">
            <p className="text-[#1d1f24] text-[30px] font-[500] ">From</p>
            <p className="text-[#1d1f24] text-[22px] font-[500] mb-[10px]">
              Roger Culhane
            </p>
            <p className="text-[#64748B] text-[16px] font-[400] ">
              Email: RogerCulhane@example.com
            </p>
            <p className="text-[#64748B] text-[16px] font-[400] ">
              Telegram: @RogerCulhane
            </p>
            <p className="text-[#64748B] text-[16px] font-[400] ">
              Wallet Address: 0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5
            </p>
          </div>
          <div className="flex-1">
            <p className="text-[#1d1f24] text-[30px] font-[500] ">To</p>
            <p className="text-[#1d1f24] text-[22px] font-[500] mb-[10px]">
              T-BOT
            </p>
            <p className="text-[#64748B] text-[16px] font-[400] ">
              Email: contact@example.com
            </p>
            <p className="text-[#64748B] text-[16px] font-[400] ">
              Telegram: contact@example.com
            </p>
            <p className="text-[#64748B] text-[16px] font-[400] ">
              Address: 0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5
            </p>
          </div>
        </div>

        <div
          className="flex h-[166px] p-[30px]"
          style={{
            borderBottom: "1px solid rgb(226, 232, 240)",
            borderLeft: "1px solid rgb(226, 232, 240)",
            borderRight: "1px solid rgb(226, 232, 240)",
            borderRadius: "2px",
          }}
        >
          <div className="flex-1 flex-col">
            <div className="flex gap-[10px]">
              <p className="text-[#1d1f24] text-[16px] font-[500] ">Type</p>
              <p className="text-[#64748B] text-[14px] font-[500] ">Deposit</p>
            </div>
            <div className="flex gap-[10px]">
              <p className="text-[#1d1f24] text-[16px] font-[500] ">Form</p>
              <p className="text-[#64748B] text-[14px] font-[500] ">
                USDT TRC20
              </p>
            </div>
            <div className="flex gap-[10px]">
              <p className="text-[#1d1f24] text-[16px] font-[500] ">
                Wallet Address
              </p>
              <p className="text-[#64748B] text-[14px] font-[500] ">
                0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5
              </p>
            </div>
          </div>

          <div className="flex-1 flex h-full items-center">
            <p className="text-[#1d1f24] text-[16px] font-[500] ">
              Total Amounnt
            </p>
            <p className="text-[#1d1f24] text-[16px] font-[500] ">$120.00</p>
          </div>
        </div>

        <div className="flex gap-[10px] mt-[80px] justify-end">
          <div
            className="flex px-[30px] py-[10px] items-center justify-center h-[46px] rounded-[6px] cursor-pointer"
            style={{ border: "1px solid rgb(60, 80, 224)" }}
          >
            <p className="text-[#3C50E0] text-[16px] font-[500] ">
              Download Invoice
            </p>
          </div>

          <div className="flex px-[30px] py-[10px] items-center justify-center h-[46px] rounded-[6px] bg-[#3C50E0] cursor-pointer">
            <p className="text-[#fff] text-[16px] font-[500] ">Send Invoice</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
