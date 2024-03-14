import React from "react";
import { Wrapper } from "./style";
import Bitcoin from "../../assets/icons/vuesax_bold_bitcoin-(btc).svg";
import Cardano from "../../assets/icons/vuesax_bold_cardano-(ada).svg";
import Ethereum from "../../assets/icons/vuesax_bold_ethereum-(eth).svg";
import Xrp1 from "../../assets/icons/vuesax_bold_xrp-(xrp)-1.svg";
import Xrp from "../../assets/icons/vuesax_bold_xrp-(xrp).svg";
import XRP from "../../assets/icons/XRP.svg";
import COTI from "../../assets/icons/COTI.svg";
import MXC from "../../assets/icons/MXC.svg";
import Australian from "../../assets/img/Australian.png";
import First from "../../assets/img/First.png";
import AllCoin from "./coin";
const Trade = () => {
  return (
    <div className="max-w-full h-full flex flex-col gap-[30px] pr-[25px] pb-[25px]">
      <p className="text-[#1d1f24] text-[24px] font-[700] ">Trade</p>

      <Wrapper>
        <div className="flex flex-col justify-start gap-[12px]">
          <div className="flex gap-[8px] items-center">
            <img src={Bitcoin} alt="Xrp" className="w-[20px] h-[20px]" />
            <p className="text-[#EF746D] text-[13px] font-[600] ">2 projects</p>
          </div>

          <div className="h-[74px] min-w-[178px] bg-[#F4F6F9] rounded-[8px] p-[8px] border-solid border border-[#e0e3e8] flex flex-col gap-[8px]">
            <p className="text-[#6B6E75] text-[13px] font-[400] ">1 wallet</p>
            <p className="text-[#1d1f24] text-[18px] font-[600] ">from $ 200</p>
          </div>
        </div>

        <div className="w-[1px] h-full bg-[#E0E3E8]"></div>

        <div className="flex flex-col justify-start gap-[12px]">
          <div className="flex gap-[8px] items-center">
            <img src={Ethereum} alt="Xrp" className="w-[20px] h-[20px]" />
            <p className="text-[#222683] text-[13px] font-[600] ">3 projects</p>
          </div>

          <div className="h-[74px] min-w-[178px] bg-[#F4F6F9] rounded-[8px] p-[8px] border-solid border border-[#e0e3e8] flex flex-col gap-[8px]">
            <p className="text-[#6B6E75] text-[13px] font-[400] ">2 wallet</p>
            <p className="text-[#1d1f24] text-[18px] font-[600] ">from $ 400</p>
          </div>
        </div>
        <div className="w-[1px] h-full bg-[#E0E3E8]"></div>

        <div className="flex flex-col justify-start gap-[12px]">
          <div className="flex gap-[8px] items-center">
            <img src={Cardano} alt="Xrp" className="w-[20px] h-[20px]" />
            <p className="text-[#4A86E4] text-[13px] font-[600] ">5 projects</p>
          </div>

          <div className="h-[74px] min-w-[178px] bg-[#F4F6F9] rounded-[8px] p-[8px] border-solid border border-[#e0e3e8] flex flex-col gap-[8px]">
            <p className="text-[#6B6E75] text-[13px] font-[400] ">5 wallet</p>
            <p className="text-[#1d1f24] text-[18px] font-[600] ">from $ 300</p>
          </div>
        </div>
        <div className="w-[1px] h-full bg-[#E0E3E8]"></div>

        <div className="flex flex-col justify-start gap-[12px]">
          <div className="flex gap-[8px] items-center">
            <img src={Xrp1} alt="Xrp" className="w-[20px] h-[20px]" />
            <p className="text-[#D377F3] text-[13px] font-[600] ">2 projects</p>
          </div>

          <div className="h-[74px] min-w-[178px] bg-[#F4F6F9] rounded-[8px] p-[8px] border-solid border border-[#e0e3e8] flex flex-col gap-[8px]">
            <p className="text-[#6B6E75] text-[13px] font-[400] ">1 wallet</p>
            <p className="text-[#1d1f24] text-[18px] font-[600] ">from $ 700</p>
          </div>
        </div>
        <div className="w-[1px] h-full bg-[#E0E3E8]"></div>

        <div className="flex flex-col justify-start gap-[12px]">
          <div className="flex gap-[8px] items-center">
            <img src={Xrp} alt="Xrp" className="w-[20px] h-[20px]" />
            <p className="text-[#EB5757] text-[13px] font-[600] ">2 projects</p>
          </div>

          <div className="h-[74px] min-w-[178px] bg-[#F4F6F9] rounded-[8px] p-[8px] border-solid border border-[#e0e3e8] flex flex-col gap-[8px]">
            <p className="text-[#6B6E75] text-[13px] font-[400] ">1 wallet</p>
            <p className="text-[#1d1f24] text-[18px] font-[600] ">from $ 900</p>
          </div>
        </div>
      </Wrapper>

      <div
        className="w-full  rounded-[16px] p-[16px] "
        style={{
          boxShadow:
            "0px 1px 3px 0px rgba(0, 0, 0, 0.1),0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
          background: "#fff",
        }}
      >
        <p className="text-[#1d1f24] text-[20px] font-[600] mb-[18px]">
          More information
        </p>
        <p className="text-[#6B6E75] text-[14px] font-[400] ">
          An airdrop is an unsolicited distribution of a cryptocurrency token or
          coin, usually for free, to numerous wallet addresses. Airdrops are
          often associated with the launch of a new cryptocurrency or a DeFi
          protocol, primarily as a way of gaining attention and new followers,
          resulting in a larger user base and a wider disbursement of coins.
        </p>
      </div>

      <AllCoin />

      <div
        className="w-full h-[212px] rounded-[16px] p-[20px] flex flex-col"
        style={{
          boxShadow:
            "0px 1px 3px 0px rgba(0, 0, 0, 0.1),0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
          background: "#fff",
        }}
      >
        <p className="text-[#1d1f24] text-[20px] font-[600] mb-[18px]">
          History
        </p>
        <div className="flex pb-[20px]">
          <div className="flex flex-1 flex-col justify-start gap-[8px]">
            <p className="text-[#6B6E75] text-[12px] font-[500] ">Coin</p>
            <p className="text-[#1d1f24] text-[16px] font-[600] mb-[18px]">
              Arbitrum
            </p>
            <p className="text-[#6B6E75] text-[12px] font-[500] ">
              Waiting time
            </p>
            <p className="text-[#1d1f24] text-[16px] font-[600] mb-[18px]">
              115 days
            </p>
          </div>

          <div className="flex flex-1 flex-col justify-start gap-[8px]">
            <p className="text-[#6B6E75] text-[12px] font-[500] ">
              investment (1 wallet)
            </p>
            <p className="text-[#1d1f24] text-[16px] font-[600] mb-[18px]">
              $250
            </p>
            <p className="text-[#6B6E75] text-[12px] font-[500] ">
              investment (all wallets)
            </p>
            <p className="text-[#1d1f24] text-[16px] font-[600] mb-[18px]">
              $13,343,342
            </p>
          </div>
          <div className="flex flex-1 flex-col justify-start gap-[8px]">
            <p className="text-[#6B6E75] text-[12px] font-[500] ">
              Profit (1 wallet)
            </p>
            <p className="text-[#1d1f24] text-[16px] font-[600] mb-[18px]">
              $2,700
            </p>
            <p className="text-[#6B6E75] text-[12px] font-[500] ">
              Profit (all wallets)
            </p>
            <p className="text-[#1d1f24] text-[16px] font-[600] mb-[18px]">
              $36,634,345
            </p>
          </div>
        </div>
      </div>

      <div
        className="w-full  rounded-[16px] p-[16px] "
        style={{
          boxShadow:
            "0px 1px 3px 0px rgba(0, 0, 0, 0.1),0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
          background: "#fff",
        }}
      >
        <p className="text-[#1d1f24] text-[20px] font-[600] mb-[18px]">About</p>
        <p className="text-[#6B6E75] text-[14px] font-[400] ">
          An airdrop is an unsolicited distribution of a cryptocurrency token or
          coin, usually for free, to numerous wallet addresses. Airdrops are
          often associated with the launch of a new cryptocurrency or a DeFi
          protocol, primarily as a way of gaining attention and new followers,
          resulting in a larger user base and a wider disbursement of coins.
          Airdrops have been a more important part of ICOs since crypto
          entrepreneurs have started doing private sales instead of public
          offerings to raise initial capital
        </p>
      </div>

      <div
        className="w-full  rounded-[16px] p-[20px] "
        style={{
          boxShadow:
            "0px 1px 3px 0px rgba(0, 0, 0, 0.1),0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
          background: "#fff",
        }}
      >
        <p className="text-[#1d1f24] text-[20px] font-[600] mb-[18px]">
          Trending assets
        </p>
        <div className="flex">
          <div className="flex flex-1 justify-start gap-[14px] items-center">
            <img src={XRP} alt="XRP" className="w-[42px] h-[42px]" />
            <p className="text-[#1d1f24] text-[16px] font-[600] ">XRP</p>
          </div>
          <div className="flex flex-1 justify-start gap-[14px] items-center">
            <img src={COTI} alt="XRP" className="w-[42px] h-[42px]" />
            <p className="text-[#1d1f24] text-[16px] font-[600] ">COTI</p>
          </div>
          <div className=" flex flex-1 justify-start gap-[14px] items-center">
            <img src={MXC} alt="XRP" className="w-[42px] h-[42px]" />
            <p className="text-[#1d1f24] text-[16px] font-[600] ">MXC</p>
          </div>
        </div>
      </div>

      <div
        className="w-full  rounded-[16px] p-[20px] "
        style={{
          boxShadow:
            "0px 1px 3px 0px rgba(0, 0, 0, 0.1),0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
          background: "#fff",
        }}
      >
        <p className="text-[#1d1f24] text-[20px] font-[600] mb-[28px]">News</p>
        <div className="flex  flex-wrap">
          <div className="w-[50%]  p-[10px]">
            <div
              className="w-full h-full  flex justify-start p-[10px] gap-[10px]"
              style={{
                boxSizing: "border-box",
                border: "1px solid rgb(224, 227, 232)",
                borderRadius: "10px",
              }}
            >
              <img
                src={First}
                alt="Australian"
                className="w-[70px] h-[70px] rounded-[10px]"
              />

              <div className="flex h-full flex-col justify-between gap-[10px]">
                <div className="w-[244px] h-[40px]  overflow-hidden">
                  <p className="text-[#1d1f24] text-[13px] font-[500] ">
                    Australian authority temporarily suspends three Holon
                    Investments...
                  </p>
                </div>

                <div className="flex gap-[10px]">
                  <p className="text-[#6B6E75] text-[12px] font-[500] ">
                    COINDESK
                  </p>
                  <p className="text-[#6B6E75] text-[12px] font-[500] ">
                    OCT 17, 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50%]  p-[10px]">
            <div
              className="w-full h-full  flex justify-start p-[10px] gap-[10px]"
              style={{
                boxSizing: "border-box",
                border: "1px solid rgb(224, 227, 232)",
                borderRadius: "10px",
              }}
            >
              <img
                src={Australian}
                alt="Australian"
                className="w-[70px] h-[70px] rounded-[10px]"
              />

              <div className="flex h-full flex-col justify-between gap-[10px]">
                <div className="w-[244px] h-[40px]  overflow-hidden">
                  <p className="text-[#1d1f24] text-[13px] font-[500] ">
                    First Mover Americas: Technical Signs Flashing Green for
                    Bitcoin .Technical Signs Flashing G. Bitcoin .Technical
                    Signs Bitcoin .Technical Signs Flashing G. Flashing G.
                  </p>
                </div>

                <div className="flex gap-[10px]">
                  <p className="text-[#6B6E75] text-[12px] font-[500] ">
                    THE BLOCK
                  </p>
                  <p className="text-[#6B6E75] text-[12px] font-[500] ">
                    OCT 17, 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
