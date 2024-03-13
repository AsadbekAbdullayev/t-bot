import React, { useEffect, useState } from "react";
import { Table, Tag, Spin } from "antd";
import request from "../../services/api/index";
import { LoadingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const AllCoin = () => {
  const columns = [
    {
      title: "TRANSACTION FROM",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "TRANSACTION TYPE",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "DATE & TIME",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "AMOUNT",
      key: "address",
      dataIndex: "address",
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
  ];
  const dataMock = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["in_progress"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["completed"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cancelled"],
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
  useEffect(() => {
    getAll();
  }, []);
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
    />
  );
};

export default AllCoin;
