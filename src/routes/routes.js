import { PieChartOutlined, HomeFilled, SettingFilled } from "@ant-design/icons";
import Image from "next/image";
const routes = [
  {
    path: "/",
    icon: <Image src={"/images/menu.svg"} width={12} height={12} />,
    title: "Dashboard",
    roles: ["admin", "user"],
  },

  {
    path: "/seller",
    icon: <Image src={"/images/sellerIcon.svg"} width={18} height={20} />,
    title: "Seller",
    roles: ["user", "admin"],
  },
  {
    path: "/products",
    icon: <Image src={"/images/products.svg"} width={18} height={20} />,
    title: "Products",
    roles: ["user", "admin"],
  },
  {
    path: "/orders",
    icon: <Image src={"/images/products.svg"} width={18} height={20} />,
    title: "Orders",
    roles: ["user", "admin"],
  },
  
  {
    path: "/orderhistory",
    icon: <Image src={"/images/history.svg"} width={14} height={14} />,
    title: "Order History",
    roles: ["user", "admin"],
  },
    {
    path: "/ratings",
    icon: <Image src={"/images/ratings.svg"} width={14} height={14} />,
    title: "Ratings",
    roles: ["user", "admin"],
  },
    {
    path: "/accountsettings",
    icon: <Image src={"/images/settings.svg"} width={14} height={14} />,
    title: "Account Settings",
    roles: ["user", "admin"],
  },
  // {
  //   path: "/doctors",
  //   icon: <Image src={'/images/doctors_icon.svg'} width={12} height={12} />,
  //   title: "Doctors",
  //   roles: ["user", "admin"],
  // },
  // {
  //   path: "/nurses",
  //   icon: <Image src={'/images/nurses_icon.svg'} width={12} height={12} />,
  //   title: "Nurses",
  //   roles: ["user"],
  // },
  // {
  //   path: "/patients",
  //   icon: <Image src={'/images/patients_icon.svg'} width={12} height={12} />,
  //   title: "Patients",
  //   roles: ["user", "admin"],
  // },
  // {
  //   path: "/analysis",
  //   icon: <Image src={'/images/analysis_icon.svg'} width={12} height={12} />,
  //   title: "Analysis",
  //   roles: ["user", "admin"],
  // },
];

export default routes;
