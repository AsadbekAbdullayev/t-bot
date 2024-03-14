import React from "react";
import Bitcoin from "../../assets/img/bitcoin.png";
import BitcoinIcon from "../../assets/icons/vuesax_bold_bitcoin-(btc).svg";
import Cardano from "../../assets/icons/vuesax_bold_cardano-(ada).svg";
import Ethereum from "../../assets/icons/vuesax_bold_ethereum-(eth).svg";
import Mask from "../../assets/img/Mask group.png";
import Arrow from "../../assets/img/arrow-square-out-bold.png";
import ArrowRight from "../../assets/img/ArrowRight.png";
import Search from "../../assets/icons/search-normal.svg";
import Matic from "../../assets/img/matic.png";
import { Input, Select } from "antd";

const Insight = () => {
  return (
    <div className="max-w-full h-full flex flex-col gap-[30px] pr-[25px] pb-[25px]">
      <div>
        <p className="text-[#1d1f24] text-[24px] font-[700] ">Insight</p>
        <p className="text-[#71717A] text-[14px] font-[400] mt-[5px]">
          See the latest insights from the crypto market
        </p>
      </div>

      <div className="flex gap-[24px]">
        <div className="flex flex-col gap-[20px]">
          <div
            className="w-full h-[312px] rounded-[16px] p-[20px] flex gap-[20px] items-center"
            style={{
              boxShadow:
                "0px 1px 3px 0px rgba(0, 0, 0, 0.1),0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
              background: "#fff",
            }}
          >
            <img
              src={Mask}
              alt="Mask"
              className="w-[436px] h-[272px] rounded-[16px]"
            />
            <div className="h-full flex flex-col gap-[16px] overflow-hidden">
              <p className="text-[#6B6E75] text-[12px] font-[500]">TRENDING</p>
              <p className="text-[#1d1f24] text-[18px] font-[500]">
                Top 10 CryptoPunks wallet lays dormant, house sells on OpenSea,
                and more
              </p>

              <p className="text-[#1d1f24] text-[14px] font-[400] h-[100px] overflow-hidden">
                An airdrop is an unsolicited distribution of a cryptocurrency
                token or coin, usually for free, to numerous wallet addresses.
                Airdrops are often associated with the launch of a new
                cryptocurrency or a DeFi protocol, primarily as a way of gaining
                attention and new followers, resulting in a larger user base and
                a wider disbursement of coins. Airdrops have been a more
                important part of ICOs since crypto entrepreneurs have started
                doing private sales instead of public offerings to raise initial
                capital
              </p>
              <div className="flex gap-[10px] cursor-pointer items-center w-fit">
                <p className="text-[#1d1f24] text-[12px] font-[600]">
                  COINTELEGRAPH
                </p>
                <img src={Arrow} alt="Arrow" className="w-[17px] h-[17px]" />
              </div>
            </div>
          </div>

          <div
            className="w-full  rounded-[16px] p-[20px] flex flex-col gap-[20px] "
            style={{
              boxShadow:
                "0px 1px 3px 0px rgba(0, 0, 0, 0.1),0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
              background: "#fff",
            }}
          >
            <div className="w-full flex justify-between">
              <p className="text-[#1d1f24] text-[20px] font-[500]">Today</p>
              <div className="flex gap-[10px]">
                <Input
                  placeholder="Search insight..."
                  prefix={
                    <img
                      src={Search}
                      alt="search"
                      className="w-[15px] h-[15px] mr-[5px]"
                    />
                  }
                  style={{ width: "240px", height: "34px" }}
                />

                <Select
                  defaultValue="All coins"
                  style={{
                    width: "164px",
                    height: "34px",
                  }}
                  options={[
                    {
                      value: "All coins",
                      label: "All coins",
                    },
                  ]}
                />
              </div>
            </div>

            <div className="w-full h-[168px] rounded-[16px] p-[20px] flex gap-[20px] items-center">
              <img
                src={Bitcoin}
                alt="Mask"
                className="w-[244px] h-[148px] rounded-[16px]"
              />
              <div className="h-full flex flex-col gap-[16px] overflow-hidden">
                <p className="text-[#6B6E75] text-[12px] font-[500]">NEWS</p>
                <p className="text-[#1d1f24] text-[18px] font-[600]">
                  Bitcoin Price Today Oct 17: Why Is Crypto Crashing Today
                </p>

                <p className="text-[#1d1f24] text-[14px] font-[400] h-[100px] overflow-hidden">
                  Bitcoin Price Today Oct 19 Latest Updates: Bitcoin price falls
                  today as the market correction erases most of the gains
                  from...
                </p>
                <div className="flex gap-[10px]">
                  <div className="flex gap-[10px] cursor-pointer items-center w-fit">
                    <p className="text-[#1d1f24] text-[12px] font-[600]">
                      COINGAPE
                    </p>
                    <img
                      src={Arrow}
                      alt="Arrow"
                      className="w-[17px] h-[17px]"
                    />
                  </div>
                  <p className="text-[#6B6E75] text-[12px] font-[600]">
                    OCT 17, 2022
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-[168px] rounded-[16px] p-[20px] flex gap-[20px] items-center">
              <img
                src={Matic}
                alt="Mask"
                className="w-[244px] h-[148px] rounded-[16px]"
              />
              <div className="h-full flex flex-col gap-[16px] overflow-hidden">
                <p className="text-[#6B6E75] text-[12px] font-[500]">NEWS</p>
                <p className="text-[#1d1f24] text-[18px] font-[600]">
                  MATIC Price Surges More Than 6%, Is It Finally A Trend Change?
                </p>

                <p className="text-[#1d1f24] text-[14px] font-[400] h-[100px] overflow-hidden">
                  MATIC price has witnessed a rally as the coin almost
                  appreciated by 7% over the last 24 hours. MATIC (Polygon) had
                  been trying...
                </p>
                <div className="flex gap-[10px]">
                  <div className="flex gap-[10px] cursor-pointer items-center w-fit">
                    <p className="text-[#1d1f24] text-[12px] font-[600]">
                      NEWSBTC
                    </p>
                    <img
                      src={Arrow}
                      alt="Arrow"
                      className="w-[17px] h-[17px]"
                    />
                  </div>
                  <p className="text-[#6B6E75] text-[12px] font-[600]">
                    OCT 17, 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="max-w-[460px] w-full h-[400px]  rounded-[16px] p-[20px] flex flex-col gap-[20px]"
          style={{
            boxShadow:
              "0px 1px 3px 0px rgba(0, 0, 0, 0.1),0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
            background: "#fff",
          }}
        >
          <div className="flex items-center justify-between">
            <p className="text-[#1d1f24] text-[20px] font-[500]">
              Top token & coins
            </p>

            <div className="flex gap-[12px] items-center cursor-pointer">
              <p className="text-[#7662EA] text-[17px] font-[500]">See All</p>
              <img src={ArrowRight} alt="Arrow" className="w-[20px] h-[20px]" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-[10px]">
              <div className="w-[44px] h-[44px] rounded-[12px] bg-[#F7931A] bg-opacity-15 flex justify-center items-center">
                <img
                  src={BitcoinIcon}
                  alt="BitcoinIcon"
                  className="w-[24px] h-[24px]"
                />
              </div>
              <div className="flex flex-col h-[44px] justify-between py-[5px]">
                <p className="text-[#1D1F24] text-[12px] font-[600]">Bitcoin</p>
                <p className="text-[#6B6E75] text-[12px] font-[400]">BTC</p>
              </div>
            </div>

            <div className="flex w-fit h-[26px] items-center bg-[#ECEFF3] rounded-[8px] p-[10px]">
              <p className="text-[#1D1F24] text-[13px] font-[600]">#1</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-[10px]">
              <div className="w-[44px] h-[44px] rounded-[12px] bg-[#0033AD] bg-opacity-15 flex justify-center items-center">
                <img
                  src={Cardano}
                  alt="BitcoinIcon"
                  className="w-[24px] h-[24px]"
                />
              </div>
              <div className="flex flex-col h-[44px] justify-between py-[5px]">
                <p className="text-[#1D1F24] text-[12px] font-[600]">Cardano</p>
                <p className="text-[#6B6E75] text-[12px] font-[400]">ADA</p>
              </div>
            </div>

            <div className="flex w-fit h-[26px] items-center bg-[#ECEFF3] rounded-[8px] p-[10px]">
              <p className="text-[#1D1F24] text-[13px] font-[600]">#8</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-[10px]">
              <div className="w-[44px] h-[44px] rounded-[12px] bg-[#328332] bg-opacity-15 flex justify-center items-center">
                <img
                  src={Ethereum}
                  alt="BitcoinIcon"
                  className="w-[24px] h-[24px]"
                />
              </div>
              <div className="flex flex-col h-[44px] justify-between py-[5px]">
                <p className="text-[#1D1F24] text-[12px] font-[600]">
                  Ethereum Classic
                </p>
                <p className="text-[#6B6E75] text-[12px] font-[400]">ETC</p>
              </div>
            </div>

            <div className="flex w-fit h-[26px] items-center bg-[#ECEFF3] rounded-[8px] p-[10px]">
              <p className="text-[#1D1F24] text-[13px] font-[600]">#24</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insight;
