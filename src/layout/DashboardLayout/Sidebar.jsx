import { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import routes from "@/routes/routes";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const { Sider } = Layout;

const Sidebar = ({ role }) => {
  const router = useRouter();
  const [current, setCurrent] = useState(router.pathname);
  useEffect(() => {
    if (router.pathname) {
      if (current !== router.pathname) {
        setCurrent(router.pathname);
      }
    }
  }, [router, current]);

  return (
    <Sider collapsible style={{ paddingTop: "1rem" }}>
      <div className="flex items-center justify-center">
        <Image src={"/images/Maglolologo.svg"} width={118} height={48} />
      </div>
      <Menu
        style={{
          marginTop: "2rem",
        }}
        className="sidebar"
        theme="dark"
        defaultSelectedKeys={[current]}
        onClick={({ key }) => {
          setCurrent(key);
        }}
        mode="inline"
        items={routes.map((route) => {
          if (route.roles.includes(role)) {
            return {
              key: route.path,
              icon: route.icon,
              label:
                route?.childrens?.length > 0 ? (
                  <button
                    href={route.path}
                    className="font-normal text-base font-poppins text-white"
                  >
                    {route.title}
                  </button>
                ) : (
                  <Link
                    href={route.path}
                    className="font-normal text-base font-poppins text-white"
                  >
                    {route.title}
                  </Link>
                ),
              children: route?.childrens?.map((child) => {
                if (child.roles.includes(role)) {
                  return {
                    key: child.path,
                    icon: child.icon,
                    label: (
                      <Link
                        href={child.path}
                        className="font-normal text-base font-poppins text-white"
                      >
                        {child.title}
                      </Link>
                    ),
                  };
                }
              }),
            };
          }
        })}
      />
    </Sider>
  );
};

export default Sidebar;
