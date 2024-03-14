import React, { useEffect, useState } from "react";
import { Table, Tag, Spin } from "antd";
import request from "../../services/api/index";
import { LoadingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const AllCoin = () => {
  const columns = [
    {
      title: "Coin",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <p className="text-[#1d1f24] text-[13px] font-[600] ">{text}</p>
      ),
    },
    {
      title: "STATUS",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color =
              tag == "in_progress"
                ? "blue"
                : tag == "cancelled"
                ? "red"
                : "green";

            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Price",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Capitalization",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Start",
      key: "Start",
      dataIndex: "Start",
    },
  ];
  const dataMock = [
    {
      key: "1",
      name: "Bitcoin",
      age: "$ 990",
      address: "$ 100,000,000",
      tags: ["in_progress"],
      Start: "18 Aug 2020",
    },
    {
      key: "2",
      name: "Etherium",
      age: "$ 320",
      address: "$ 100,000,000",
      tags: ["completed"],
      Start: "18 Aug 2020",
    },
    {
      key: "3",
      name: "Ripple",
      age: "$ 140",
      address: "$ 100,000,000",
      tags: ["cancelled"],
      Start: "18 Aug 2020",
    },
  ];
  const rowClassName = () => "cursor-pointer";
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const getAll = async () => {
    setLoading(true);
    try {
      const res = await request.get("manager/send-transaction");
      const newRes = res?.data?.data;
      setData(newRes);
      setLoading(false);

      console.log(res, "res");
    } catch (error) {
      setLoading(false);

      console.error("Error");
    }
  };
  //   useEffect(() => {
  //     getAll();
  //   }, []);
  return loading ? (
    <div className="w-full h-[400px] flex justify-center items-center ">
      <Spin
        indicator={
          <LoadingOutlined
            style={{
              fontSize: 62,
              color: "#9ec8fc",
            }}
            spin
          />
        }
      />
    </div>
  ) : (
    <Table
      columns={columns}
      dataSource={dataMock}
      onRow={(record) => ({
        onClick: () => navigate(`/transaction-details/:${record?.age}`),
      })}
      pagination={false}
      rowClassName={rowClassName}
      style={{ borderRadius: "16px" }}
    />
  );
};

export default AllCoin;
