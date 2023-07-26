import { PieChartOutlined, HomeFilled, SettingFilled } from "@ant-design/icons";
import Image from "next/image";
const routes = [
  {
    path: "/",
    icon: <Image src={"/images/home.svg"} width={12} height={12} />,
    title: "Dashboard",
    roles: ["admin", "user"],
  },
  // {
  //   path: "/orders",
  //   icon: <Image src={"/images/order_icon2.svg"} width={16} height={16} />,
  //   title: "Orders",
  //   roles: ["admin", "user"],
  //   childrens: [
  //     {
  //       path: "/orders",
  //       icon: (
  //         <Image src={"/images/order_icon2.svg"} width={16} height={16} />
  //       ),
  //       title: "All",
  //       roles: ["admin", "user"],
  //     },
  //     {
  //       path: "/orders/new-orders",
  //       icon: (
  //         <Image src={"/images/new_order_icon.svg"} width={12} height={12} />
  //       ),
  //       title: "New orders",
  //       roles: ["admin", "user"],
  //     },
  //     {
  //       path: "/orders/order-history",
  //       icon: (
  //         <Image
  //           src={"/images/order_history_icon.svg"}
  //           width={12}
  //           height={12}
  //         />
  //       ),
  //       title: "Order history",
  //       roles: ["user", "admin"],
  //     },
  //     {
  //       path: "/orders/completed",
  //       icon: (
  //         <Image src={"/images/completed_icon.svg"} width={12} height={12} />
  //       ),
  //       title: "Completed",
  //       roles: ["user", "admin"],
  //     },
  //     {
  //       path: "/orders/cancelled",
  //       icon: (
  //         <Image src={"/images/cancelled_icon.svg"} width={12} height={12} />
  //       ),
  //       title: "Cancelled",
  //       roles: ["user", "admin"],
  //     },
  //   ],
  // },
  // {
  //   path: "/orders/new-orders",
  //   icon: <Image src={"/images/new_order_icon.svg"} width={12} height={12} />,
  //   title: "New orders",
  //   roles: ["admin", "user"],
  // },
  // {
  //   path: "/orders/order-history",
  //   icon: (
  //     <Image src={"/images/order_history_icon.svg"} width={12} height={12} />
  //   ),
  //   title: "Order history",
  //   roles: ["user", "admin"],
  // },
  // {
  //   path: "/orders/completed",
  //   icon: <Image src={"/images/completed_icon.svg"} width={12} height={12} />,
  //   title: "Completed",
  //   roles: ["user", "admin"],
  // },
  // {
  //   path: "/orders/cancelled",
  //   icon: <Image src={"/images/cancelled_icon.svg"} width={12} height={12} />,
  //   title: "Cancelled",
  //   roles: ["user", "admin"],
  // },
  {
    path: "/seller",
    icon: <Image src={"/images/category_icon.svg"} width={18} height={20} />,
    title: "Seller",
    roles: ["user", "admin"],
  },
  {
    path: "/products",
    icon: <Image src={"/images/bag.svg"} width={18} height={20} />,
    title: "Products",
    roles: ["user", "admin"],
  },
  {
    path: "/services",
    icon: <Image src={"/images/users_icon.svg"} width={12} height={12} />,
    title: "Services",
    roles: ["user", "admin"],
  },
  {
    path: "/history",
    icon: <Image src={"/images/settings_icon.svg"} width={14} height={14} />,
    title: "History",
    roles: ["user", "admin"],
  },
    {
    path: "/ratings",
    icon: <Image src={"/images/settings_icon.svg"} width={14} height={14} />,
    title: "Ratings",
    roles: ["user", "admin"],
  },
    {
    path: "/accountsettings",
    icon: <Image src={"/images/settings_icon.svg"} width={14} height={14} />,
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
