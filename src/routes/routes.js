import { PieChartOutlined, HomeFilled, SettingFilled } from "@ant-design/icons";
import {
  MenuOutlined,
  DashboardOutlined,
  ShoppingCartOutlined,
  AppstoreAddOutlined,
  UnorderedListOutlined,
  HistoryOutlined,
  StarOutlined,
  SettingOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";

import Image from "next/image";
const routes = [
  {
    path: "/",
    icon: <DashboardOutlined />,
    title: "Dashboard",
    roles: ["admin", "user"],
  },

  {
    path: "/seller",
    icon: <UserOutlined />,
    title: "Seller",
    roles: ["user", "admin"],
  },
  {
    path: "/products",
    icon: <ShoppingCartOutlined />,
    title: "Products",
    roles: ["user", "admin"],
  },
  {
    path: "/categories",
    icon: <AppstoreAddOutlined />,
    title: "Categories",
    roles: ["user", "admin"],
  },
  {
    path: "/orders",
    icon: <UnorderedListOutlined />,
    title: "Orders",
    roles: ["user", "admin"],
  },
  
  {
    path: "/orderhistory",
    icon: <HistoryOutlined />,
    title: "Order History",
    roles: ["user", "admin"],
  },
    {
    path: "/ratings",
    icon: <StarOutlined />,
    title: "Ratings",
    roles: ["user", "admin"],
  },
    {
    path: "/settings",
    icon: <SettingOutlined />,
    title: "Account Settings",
    roles: ["user", "admin"],
  }
];

export default routes;
