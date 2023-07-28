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

const Index = () => {
  const currentDateAndTime = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  let formattedDateTime = currentDateAndTime.toLocaleString("en-US", options);
  formattedDateTime = formattedDateTime.replace(" at", "");


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
    
      <div className="h-full w-full bg-[#F9F9F9] m-0">
          <div className="w-full h-full flex flex-col flex-grow py-4">
            
            <div className="flex justify-between mx-[2rem] bg-[#FFFFFF] rounded-md shadow-md px-4 py-4">
              <div>
                <h1 className="text-[24px] font-[600]">Dashboard</h1>
              </div>
              <div className="md:flex items-center hidden ">
                <div className="flex mr-3">
                  <p className="text-xs mr-2">Data Refreshed</p>
                  <Image src="/images/refresh.svg" width={15} height={15} alt="Refresh Icon" />
                </div>
                <div className="bg-[#F0F5FB] border rounded-md border-[#0852C12B] px-3 py-3 text-xs font-medium">
                  <p>{formattedDateTime}</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex md:flex-row flex-col md:justify-start justify-center md:items-start md:mx-[2rem]">
              <ConversationRate/>
              <Stats/>
              <ProfitPerformance/>
              </div>

              <div  className="flex md:flex-row flex-col md:justify-start justify-center md:items-start md:mx-[2rem]">
                <Visitors/>
                <MostVisited/>
              </div>
            
            
            </div>

          </div>
        </div>
        
    </>
  );
};

export default Index;
