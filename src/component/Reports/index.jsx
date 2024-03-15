import React, { useState } from "react";
import BitcoinIcon from "../../assets/icons/vuesax_bold_bitcoin-(btc).svg";
import Ethereum from "../../assets/icons/vuesax_bold_ethereum-(eth).svg";
import ArrowRight from "../../assets/img/ArrowRight.png";
import Up from "../../assets/icons/arrow-up.svg";
import { Select } from "antd";
import Chart from "react-apexcharts";

const Reports = () => {
  const [chartData2, setChartData2] = useState({
    series: [
      {
        data: [
          [1327359600000, 30.95],
          [1327446000000, 31.34],
          [1327532400000, 31.18],
          [1327618800000, 31.05],
          [1327878000000, 31.0],
          [1327964400000, 30.95],
          [1328050800000, 31.24],
          [1328137200000, 31.29],
          [1328223600000, 31.85],
          [1328482800000, 31.86],
          [1328569200000, 32.28],
          [1328655600000, 32.1],
          [1328742000000, 32.65],
          [1328828400000, 32.21],
          [1329087600000, 32.35],
          [1329174000000, 32.44],
          [1329260400000, 32.46],
          [1329346800000, 32.86],
          [1329433200000, 32.75],
          [1329778800000, 32.54],
        ],
      },
      {
        name: "Downloads2",
        data: [
          [1327359600000, 33.95],
          [1327446000000, 30.34],
          [1327532400000, 29.18],
          [1327618800000, 28.05],
          [1327878000000, 27.0],
          [1327964400000, 26.95],
          [1328050800000, 25.24],
          [1328137200000, 26.29],
          [1328223600000, 26.85],
          [1328482800000, 27.86],
          [1328569200000, 25.28],
          [1328655600000, 28.1],
          [1328742000000, 29.65],
          [1328828400000, 26.21],
          [1329087600000, 25.35],
          [1329174000000, 33.44],
          [1329260400000, 24.46],
          [1329346800000, 28.86],
          [1329433200000, 29.75],
          [1329778800000, 32.54],
        ],
      },
    ],
    options: {
      chart: {
        id: "area-datetime",
        type: "area",
        height: 350,
        zoom: {
          autoScaleYaxis: true,
        },
      },
      annotations: {
        // Your annotations
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
        style: "hollow",
      },
      xaxis: {
        type: "datetime",
        // Your x-axis settings
      },
      tooltip: {
        x: {
          format: "dd MMM yyyy",
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100],
        },
      },
    },
    selection: "one_year",
  });

  const chartData = {
    options: {
      chart: {
        id: "area-datetime",
        height: 350,
        type: "area",

        toolbar: {
          show: false,
        },
      },
      xaxis: {
        type: "datetime",
        labels: {
          show: false, // Hide x-axis labels
        },
        axisBorder: {
          show: false, // Hide x-axis border
        },
        axisTicks: {
          show: false, // Hide x-axis ticks
        },
      },
      yaxis: {
        show: false, // Hide y-axis
      },
      dataLabels: {
        enabled: false, // Disable data labels
      },
      grid: {
        show: false, // Hide grid lines
      },
      tooltip: {
        enabled: false, // Disable tooltip
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100],
        },
      },
      stroke: {
        width: 2, // Set line width
      },
    },
    series: [
      {
        name: "Downloads",
        data: [
          [1327359600000, 30.95],
          [1327446000000, 31.34],
          [1327532400000, 31.18],
          [1327618800000, 31.05],
          [1327878000000, 31.0],
          [1327964400000, 30.95],
          [1328050800000, 31.24],
          [1328137200000, 31.29],
          [1328223600000, 31.85],
          [1328482800000, 31.86],
          [1328569200000, 32.28],
          [1328655600000, 32.1],
          [1328742000000, 32.65],
          [1328828400000, 32.21],
          [1329087600000, 32.35],
          [1329174000000, 32.44],
          [1329260400000, 32.46],
          [1329346800000, 32.86],
          [1329433200000, 32.75],
          [1329778800000, 32.54],
        ],
      },
    ],
  };

  return (
    <div className="max-w-full h-full flex flex-col gap-[30px] pr-[25px] pb-[25px]">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[#1d1f24] text-[24px] font-[700] ">Reports</p>
          <p className="text-[#71717A] text-[14px] font-[400] mt-[5px]">
            Take a look for your Sunstone account reports
          </p>
        </div>
        <Select
          defaultValue="Last 6 Month: Jan 1, 2022 - Jun 31, 2022"
          style={{
            // width: "164px",
            height: "34px",
          }}
          options={[
            {
              value: "Last 6 Month: Jan 1, 2022 - Jun 31, 2022",
              label: "Last 6 Month: Jan 1, 2022 - Jun 31, 2022",
            },
            {
              value: "Last 2 Month: Jan 1, 2023 - Jun 31, 2023",
              label: "Last 2 Month: Jan 1, 2023 - Jun 31, 2023",
            },
          ]}
        />
      </div>

      <div className="flex gap-[24px]">
        <div
          className="max-w-[50%] w-full rounded-[16px] p-[20px] flex flex-col gap-[20px]"
          style={{
            boxShadow:
              "0px 1px 3px 0px rgba(0, 0, 0, 0.1),0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
            background: "#fff",
          }}
        >
          <p className="text-[#1d1f24] text-[20px] font-[500] ">Balance</p>

          <div className="flex justify-between relative ">
            <div className="flex gap-[5px] items-center ">
              <p className="text-[#1d1f24] text-[24px] font-[700] mr-[10px]">
                $42.431,20
              </p>
              <div className="w-[24px] h-[24px] rounded-[50%] flex justify-center items-center bg-[#E2F3F0]">
                <img src={Up} alt="Up" className="w-[18px] h-[18px]" />
              </div>
              <p className="text-[#429482] text-[14px] font-[500] ">1,8%</p>
            </div>
            <div className="w-[180px] h-[45px] absolute top-[-60px] right-[10px]">
              <Chart
                options={chartData.options}
                series={chartData.series}
                type="area"
              />
            </div>
          </div>

          <div className="flex justify-between">
            <p className="text-[#1d1f24] text-[20px] font-[500] ">Assets</p>
            <div className="flex gap-[12px] items-center cursor-pointer">
              <p className="text-[#7662EA] text-[17px] font-[500]">
                <div className="flex gap-[12px] items-center cursor-pointer">
                  <p className="text-[#7662EA] text-[14px] font-[500]">
                    See All Assets
                  </p>
                  <img
                    src={ArrowRight}
                    alt="Arrow"
                    className="w-[20px] h-[20px]"
                  />
                </div>
              </p>
            </div>
          </div>

          <div className="flex gap-[20px]">
            <div
              className="w-[50%] flex justify-between items-center rounded-[10px] p-[10px]"
              style={{ border: "1px solid rgb(224, 227, 232)" }}
            >
              <div className="flex gap-[10px]">
                <div className="w-[44px] h-[44px] rounded-[12px] bg-[#F7931A] bg-opacity-15 flex justify-center items-center">
                  <img
                    src={BitcoinIcon}
                    alt="BitcoinIcon"
                    className="w-[24px] h-[24px]"
                  />
                </div>
                <div className="flex flex-col h-[44px] justify-between py-[5px]">
                  <p className="text-[#1D1F24] text-[12px] font-[600]">
                    Bitcoin
                  </p>
                  <p className="text-[#6B6E75] text-[12px] font-[400]">BTC</p>
                </div>
              </div>
              <div className="flex flex-col h-[44px] justify-between py-[5px]">
                <p className="text-[#1D1F24] text-[12px] font-[600]">
                  1.240 BTC
                </p>
                <p className="text-[#6B6E75] text-[12px] font-[400]">
                  $12,340.12
                </p>
              </div>
            </div>
            <div
              className="w-[50%] flex justify-between items-center rounded-[10px] p-[10px]"
              style={{ border: "1px solid rgb(224, 227, 232)" }}
            >
              <div className="flex gap-[10px]">
                <div className="w-[44px] h-[44px] rounded-[12px] bg-[#627EEA] bg-opacity-15 flex justify-center items-center">
                  <img
                    src={Ethereum}
                    alt="BitcoinIcon"
                    className="w-[24px] h-[24px]"
                  />
                </div>
                <div className="flex flex-col h-[44px] justify-between py-[5px]">
                  <p className="text-[#1D1F24] text-[12px] font-[600]">
                    Ethereum
                  </p>
                  <p className="text-[#6B6E75] text-[12px] font-[400]">ETH</p>
                </div>
              </div>
              <div className="flex flex-col h-[44px] justify-between py-[5px]">
                <p className="text-[#1D1F24] text-[12px] font-[600]">
                  1.240 BTC
                </p>
                <p className="text-[#6B6E75] text-[12px] font-[400]">
                  $12,340.12
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-[20px]">
            <div
              className="w-[50%] flex justify-between items-center rounded-[10px] p-[10px]"
              style={{ border: "1px solid rgb(224, 227, 232)" }}
            >
              <div className="flex gap-[10px]">
                <div className="w-[44px] h-[44px] rounded-[12px] bg-[#F7931A] bg-opacity-15 flex justify-center items-center">
                  <img
                    src={BitcoinIcon}
                    alt="BitcoinIcon"
                    className="w-[24px] h-[24px]"
                  />
                </div>
                <div className="flex flex-col h-[44px] justify-between py-[5px]">
                  <p className="text-[#1D1F24] text-[12px] font-[600]">
                    Bitcoin
                  </p>
                  <p className="text-[#6B6E75] text-[12px] font-[400]">BTC</p>
                </div>
              </div>
              <div className="flex flex-col h-[44px] justify-between py-[5px]">
                <p className="text-[#1D1F24] text-[12px] font-[600]">
                  1.240 BTC
                </p>
                <p className="text-[#6B6E75] text-[12px] font-[400]">
                  $12,340.12
                </p>
              </div>
            </div>
            <div
              className="w-[50%] flex justify-between items-center rounded-[10px] p-[10px]"
              style={{ border: "1px solid rgb(224, 227, 232)" }}
            >
              <div className="flex gap-[10px]">
                <div className="w-[44px] h-[44px] rounded-[12px] bg-[#627EEA] bg-opacity-15 flex justify-center items-center">
                  <img
                    src={Ethereum}
                    alt="BitcoinIcon"
                    className="w-[24px] h-[24px]"
                  />
                </div>
                <div className="flex flex-col h-[44px] justify-between py-[5px]">
                  <p className="text-[#1D1F24] text-[12px] font-[600]">
                    Ethereum
                  </p>
                  <p className="text-[#6B6E75] text-[12px] font-[400]">ETH</p>
                </div>
              </div>
              <div className="flex flex-col h-[44px] justify-between py-[5px]">
                <p className="text-[#1D1F24] text-[12px] font-[600]">
                  1.240 BTC
                </p>
                <p className="text-[#6B6E75] text-[12px] font-[400]">
                  $12,340.12
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[50%] w-full  flex flex-col gap-[24px]">
          <div className="flex gap-[24px] ">
            <div
              className="max-w-[50%] w-full h-[163px] rounded-[16px] p-[20px] flex flex-col gap-[5px]"
              style={{
                boxShadow:
                  "0px 1px 3px 0px rgba(0, 0, 0, 0.1),0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
                background: "#fff",
              }}
            >
              <p className="text-[#1d1f24] text-[20px] font-[500] mb-[15px]">
                Profit
              </p>
              <div className="flex gap-[5px] items-center ">
                <p className="text-[#1d1f24] text-[24px] font-[700] mr-[10px]">
                  $10.212,20
                </p>
                <div className="w-[24px] h-[24px] rounded-[50%] flex justify-center items-center bg-[#E2F3F0]">
                  <img src={Up} alt="Up" className="w-[18px] h-[18px]" />
                </div>
                <p className="text-[#429482] text-[14px] font-[500] ">3,1%</p>
              </div>
              <p className="text-[#71717A] text-[14px] font-[400] ">
                vs previous 6 month
              </p>
            </div>
            <div
              className="max-w-[50%] w-full h-[163px] rounded-[16px] p-[20px] flex flex-col gap-[5px]"
              style={{
                boxShadow:
                  "0px 1px 3px 0px rgba(0, 0, 0, 0.1),0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
                background: "#fff",
              }}
            >
              <p className="text-[#1d1f24] text-[20px] font-[500] mb-[15px]">
                Invested
              </p>
              <div className="flex gap-[5px] items-center ">
                <p className="text-[#1d1f24] text-[24px] font-[700] mr-[10px]">
                  $32.146,20
                </p>
                <div className="w-[24px] h-[24px] rounded-[50%] flex justify-center items-center bg-[#E2F3F0]">
                  <img src={Up} alt="Up" className="w-[18px] h-[18px]" />
                </div>
                <p className="text-[#429482] text-[14px] font-[500] ">0.7%</p>
              </div>
              <p className="text-[#71717A] text-[14px] font-[400] ">
                vs previous 6 month
              </p>
            </div>
          </div>

          <div className="flex gap-[24px]">
            <div
              className="max-w-[50%] w-full h-[163px] rounded-[16px] p-[20px] flex flex-col gap-[5px]"
              style={{
                boxShadow:
                  "0px 1px 3px 0px rgba(0, 0, 0, 0.1),0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
                background: "#fff",
              }}
            >
              <p className="text-[#1d1f24] text-[20px] font-[500] mb-[15px]">
                Top Assets
              </p>
              <div className="flex gap-[5px] items-center ">
                <p className="text-[#1d1f24] text-[24px] font-[700] mr-[10px]">
                  $84.554,30
                </p>
                <div className="w-[24px] h-[24px] rounded-[50%] flex justify-center items-center bg-[#E2F3F0]">
                  <img src={Up} alt="Up" className="w-[18px] h-[18px]" />
                </div>
                <p className="text-[#429482] text-[14px] font-[500] ">1.8%</p>
              </div>
              <p className="text-[#71717A] text-[14px] font-[400] ">
                vs previous 6 month
              </p>
            </div>
            <div
              className="max-w-[50%] w-full h-[163px] rounded-[16px] p-[20px] flex flex-col gap-[5px]"
              style={{
                boxShadow:
                  "0px 1px 3px 0px rgba(0, 0, 0, 0.1),0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
                background: "#fff",
              }}
            >
              <p className="text-[#1d1f24] text-[20px] font-[500] mb-[15px]">
                ROI
              </p>
              <div className="flex gap-[5px] items-center ">
                <p className="text-[#1d1f24] text-[24px] font-[700] mr-[10px]">
                  58.1%
                </p>
                <div className="w-[24px] h-[24px] rounded-[50%] flex justify-center items-center bg-[#E2F3F0]">
                  <img src={Up} alt="Up" className="w-[18px] h-[18px]" />
                </div>
                <p className="text-[#429482] text-[14px] font-[500] ">3,1%</p>
              </div>
              <p className="text-[#71717A] text-[14px] font-[400] ">
                vs previous 6 month
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full min-h-[500px] rounded-[16px] p-[16px] "
        style={{
          boxShadow:
            "0px 1px 3px 0px rgba(0, 0, 0, 0.1),0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
          background: "#fff",
        }}
      >
        <p className="text-[#1d1f24] text-[20px] font-[700] mb-[20px]">
          Trending Rates
        </p>
        <div className="flex gap-[8px] mb-[10px] items-center">
          <div className="w-[6px] h-[6px] rounded-[50%] bg-[#7662EA]"></div>
          <p className="text-[#1d1f24] text-[13px] font-[400] mr-[20px]">
            Price
          </p>
          <div className="w-[6px] h-[6px] rounded-[50%] bg-[#459CED]"></div>
          <p className="text-[#1d1f24] text-[13px] font-[400] mr-[15px]">
            Market Cap
          </p>
        </div>
        <Chart
          options={chartData2.options}
          series={chartData2.series}
          type="line"
          height={350}
        />
      </div>
    </div>
  );
};

export default Reports;
