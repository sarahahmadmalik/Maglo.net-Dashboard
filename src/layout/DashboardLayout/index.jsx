
import Sidebar from "./Sidebar";
import { useMutation, useQuery } from "@tanstack/react-query";
import { db } from "@/config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import authApi from "@/lib/authApi";
import { Avatar, Button, Dropdown, Input, Layout, Spin } from "antd";
import { SearchOutlined, BellOutlined } from "@ant-design/icons";
const { Header, Content } = Layout;

const Index = ({ children }) => {
  const router = useRouter();
  
  const items = [
    {
      key: "2",
      label: (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            className="text-sm md:text-lg font-medium font-poppins"
            style={{ textTransform: "capitalize", color: "#F49342" }}
          >
            {/* {data?.name} */}
            John Doe
          </span>
          <span
            className="text-black opacity-50 text-xs md:text-sm font-normal font-poppins"
            style={{ textTransform: "capitalize", opacity: "60" }}
          >
            {/* {data?.role} */}
            Admin
          </span>
        </div>
      ),
    },
    {
      key: "1",
      label: (
        <span
          className="text-red-600 opacity-50 text-xs md:text-base font-normal font-poppins"
          style={{ color: "red" }}
          onClick={() => logoutMutation.mutate()}
        >
          Logout
        </span>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar role={"admin"} />
      <Layout className="site-layout">
        <Header
          className=" bg-transparent flex items-center justify-between w-full"
          style={{ paddingTop: 20, paddingBottom: 20, height: "4rem" }}
        >
  
  <div className="flex items-center mr-auto ml-4 fontFamily">
          <Input
            placeholder="Search"
            className="border border-[#0852C12B] rounded-md px-4 py-2 text-sm sm:text-base focus:outline-none focus:border-blue-500 searchBar w-full"
            suffix={<SearchOutlined style={{ color: "blue" }} />}
          />
        </div>

<div className="flex items-center">
    {/* Country Image */}
    <div className="mr-4">
            <img
              src="/images/country.svg" 
              alt="Country"
              className="w-8 h-8 rounded-full"
            />
          </div>
          {/* Bell Icon with Notification Count */}
          <div className="relative mr-4">
            <BellOutlined style={{ fontSize: "24px", color: "rgba(0, 0, 0, 0.65)", }} />
            <span
              className="w-4 h-4 bg-[#C13508] text-white rounded-full text-xs text-center"
              style={{ fontSize: "0.7rem", fontWeight: "bold", background: "#C13508", position: "absolute", top: "6px", right:"-2px"}}
            >
              9 
            </span>
          </div>


          {/* Avatar */}
          <div>
            <Dropdown menu={{ items }} placement="bottomRight">
              <Avatar
                size="large"
                icon={<UserOutlined style={{ color: "#FFFFFF" }} />}
                className="flex items-center justify-center bg-[#0852C1] cursor-pointer"
              />
            </Dropdown>
          </div>
          </div>
        </Header>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default Index;
