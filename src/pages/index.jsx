import TopCard from "@/components/Home/TopCard";
// import { Avatar, Button, Select, Table, Tag } from "antd";
import Head from "next/head";
import Image from "next/image";
// import { UserOutlined } from "@ant-design/icons";
import ConversationRate from '../components/Home/ConversationRate'
import Stats from '../components/Home/Stats'
import ProfitPerformance from '../components/Home/ProfitPerformance'
import Visitors from '../components/Home/Visitors'
import MostVisited from '../components/Home/MostVisited'
import { useState, useEffect } from "react";
const Index = () => {
  const [formattedDateTime, setFormattedDateTime] = useState("");
  useEffect(() => {
    const currentDateAndTime = new Date();
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true
    };
    const newFormattedDateTime = currentDateAndTime.toLocaleString("en-US", options);
    setFormattedDateTime(newFormattedDateTime.replace(" at", ""));
  }, []);


  const data = [
    {
      key: "1",
      name: "John Brown",
      no: 1,
      status: "New",
      payment: "UnPaid",
      country: "USA",
      date: "13 Spt 2023",
      service: "Rehab",
    },
    {
      key: "2",
      name: "John Brown",
      no: 2,
      status: "New",
      payment: "UnPaid",
      country: "USA",
      date: "13 Spt 2023",
      service: "Rehab",
    },
    {
      key: "3",
      name: "John Brown",
      no: 3,
      status: "New",
      payment: "UnPaid",
      country: "USA",
      date: "13 Spt 2023",
      service: "Rehab",
    },
    {
      key: "4",
      name: "John Brown",
      no: 4,
      status: "New",
      payment: "UnPaid",
      country: "USA",
      date: "13 Spt 2023",
      service: "Rehab",
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
    
      <div className="h-full w-full flex justify-center items-center  m-0">
         <h1 className="font-500">Hello folks, This is sara</h1>
        </div>
        
    </>
  );
};

export default Index;
