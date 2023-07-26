import { Avatar, Button, Dropdown, Layout, Spin } from "antd";
import Sidebar from "./Sidebar";
import { useMutation, useQuery } from "@tanstack/react-query";
import { db } from "@/config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import authApi from "@/lib/authApi";

const { Header, Content } = Layout;

const Index = ({ children }) => {
  const router = useRouter();
  // const logoutMutation = useMutation(
  //   async () => {
  //     await authApi.logout();
  //   },
  //   {
  //     onSuccess: () => {
  //       router.push("/signin");
  //     },
  //   }
  // );
  // const { data, isLoading } = useQuery(["user"], async () => {
  //   const response = await (await fetch("/api/currentUser")).json();
  //   console.log("res", response);
  //   if (!response?.uid) {
  //     router.push("/signin");
  //   } else {
  //     const userRef = doc(db, "users", response.uid);
  //     const userRes = await getDoc(userRef);

  //     if (userRes.exists) {
  //       return userRes.data();
  //     }
  //   }

  //   return null;
  // });
  // if (isLoading) {
  //   return <Spin className="absolute top-1/2 left-1/2" />;
  // }

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
          className="site-layout-background flex items-center justify-end"
          style={{ paddingTop: 20, paddingBottom: 20, height: "4rem" }}
        >
          <Dropdown menu={{ items }} placement="bottom">
            <Avatar
              size="large"
              icon={<UserOutlined style={{ color: "black" }} />}
              className="flex items-center justify-center bg-white cursor-pointer"
            />
          </Dropdown>

          {/* <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: ".5rem",
              paddingRight: "30px",
            }}
          >
            <Avatar
              size="large"
              icon={<UserOutlined style={{ color: "black" }} />}
              className="flex items-center justify-center bg-white"
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                className="text-sm md:text-lg font-medium font-poppins"
                style={{ textTransform: "capitalize", color: "#F49342" }}
              >
                {data?.name}
              </span>
              <span
                className="text-white text-xs md:text-base font-normal font-poppins"
                style={{ textTransform: "capitalize", opacity: "60" }}
              >
                {data?.role}
              </span>
            </div>
          </div> */}
        </Header>
        <Content
          style={{
            background: "#FAFBFF",
          }}
        >
          

            {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Index;
