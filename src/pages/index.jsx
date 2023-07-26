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

  const columns = [
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-poppins font-medium">#</span>
          <Image
            src={"/images/sort.svg"}
            width={20}
            height={20}
            style={{ marginLeft: "8px" }}
          />
        </div>
      ),
      dataIndex: "no",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="w-full flex items-center justify-center">
          <span className="text-base font-poppins font-medium text-[#474747]">
            {record.no}
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-poppins font-medium">Date</span>
        </div>
      ),
      dataIndex: "date",
      render: (_, record) => (
        <div className="w-full flex items-center">
          <span className="text-base font-poppins font-medium text-[#474747]">
            {record.date}
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <Image
            src={"/images/sort.svg"}
            width={20}
            height={20}
            style={{ marginLeft: "8px" }}
          />
          <span className="text-base font-poppins font-medium">Customer</span>
        </div>
      ),
      dataIndex: "name",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => {
        return record?.name ? (
          <div className="flex items-center justify-center space-x-2">
            <Avatar
              icon={<UserOutlined />}
              // src={
              //   record?.user?.image
              //     ? `${process.env.NEXT_PUBLIC_API_URL}${record?.user?.image.url}`
              //     : ""
              // }
              className="flex items-center justify-center"
            />
            <span className="text-base font-poppins font-medium text-[#474747]">
              {record?.name}
            </span>
          </div>
        ) : (
          "N/A"
        );
      },
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <Image
            src={"/images/sort.svg"}
            width={20}
            height={20}
            style={{ marginLeft: "8px" }}
          />
          <span className="text-base font-poppins font-medium">Country</span>
        </div>
      ),
      dataIndex: "country",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => {
        return (
          <div className="flex items-center justify-center space-x-2">
            <span className="text-base font-poppins font-medium text-[#474747]">
              {record?.country}
            </span>
          </div>
        );
      },
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <Image
            src={"/images/sort.svg"}
            width={20}
            height={20}
            style={{ marginLeft: "8px" }}
          />
          <span className="text-base font-poppins font-medium">Products</span>
        </div>
      ),
      dataIndex: "service",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="w-full flex items-center justify-center">
          <Button className="text-base font-poppins font-medium text-[#474747]">
            View Products
          </Button>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <Image
            src={"/images/sort.svg"}
            width={20}
            height={20}
            style={{ marginLeft: "8px" }}
          />
          <span className="text-base font-poppins font-medium">Status</span>
        </div>
      ),
      dataIndex: "status",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="w-full flex items-center justify-center">
          <Tag
            style={{ background: "rgba(207, 246, 128, 0.46)" }}
            className="mx-auto text-sm font-poppins font-normal text-[black] px-6 py-1"
          >
            {record.status}
          </Tag>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <Image
            src={"/images/sort.svg"}
            width={20}
            height={20}
            style={{ marginLeft: "8px" }}
          />
          <span className="text-base font-poppins font-medium">Payment</span>
        </div>
      ),
      dataIndex: "payment",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="w-full flex items-center justify-center">
          <Tag
            style={{ background: "rgba(245, 98, 51, 0.47)" }}
            className="mx-auto text-sm font-poppins font-normal text-[black] px-6 py-1"
          >
            {record.payment}
          </Tag>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <Image
            src={"/images/sort.svg"}
            width={20}
            height={20}
            style={{ marginLeft: "8px" }}
          />
          <span className="text-base font-poppins font-medium">Action</span>
        </div>
      ),
      render: (_, record) => (
        <div className="w-full flex items-center justify-center">
          <Image src={"/images/accept.svg"} width={18} height={18} />
        </div>
      ),
    },
  ];
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
      {/* <main className="flex flex-col space-y-10">
        <div className="flex flex-col items-start md:flex-row space-y-5 md:space-y-0 md:items-center justify-between">
          <div>
            <h2 className="text-2xl font-barlow font-semibold">Dashboard</h2>
            <span className="text-base font-normal font-poppins">
              Here is your daily Statistics
            </span>
          </div>
          {/* <div className="flex space-x-5">
            <Select
              suffixIcon={
                <Image
                  src={"/images/dropdown.svg"}
                  width={7.18}
                  height={4.59}
                />
              }
              style={{
                width: "5rem",
                boxShadow: "0px 2px 24px rgba(0, 0, 0, 0.12)",
              }}
              bordered={false}
              className="text-xs font-normal"
              placeholder="Paid"
              options={[
                { value: "Paid", label: "Paid" },
                { value: "UnPaid", label: "UnPaid" },
              ]}
            />
            <Select
              suffixIcon={
                <Image src={"/images/filter.svg"} width={12} height={13} />
              }
              style={{
                width: "8rem",
                boxShadow: "0px 2px 24px rgba(0, 0, 0, 0.12)",
              }}
              bordered={false}
              className="text-xs font-normal"
              placeholder="Category"
              options={[
                { value: "Paid", label: "Paid" },
                { value: "UnPaid", label: "UnPaid" },
              ]}
            />
          </div> */}
        {/* </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <TopCard
            title="Total Orders"
            number="150"
            icon="/images/order_icon.svg"
            bg={"#D7E4F1"}
          />
          <TopCard
            title="Completed"
            number="150"
            icon="/images/order_completed.svg"
            bg={"#E0F1E0"}
          />
          <TopCard
            title="Cancelled"
            number="150"
            icon="/images/order_cancel.svg"
            bg={"#FDDFDB"}
          />
          <TopCard
            title="Customers"
            number="150"
            icon="/images/top4.svg"
            bg={"#FDEFDC"}
          />
          <TopCard
            title="Products"
            number="150"
            icon="/images/products_icons.svg"
            bg={"#D7E4F1"}
          />
          <TopCard
            title="Out of Stock"
            number="150"
            icon="/images/sold.svg"
            bg={"#FDDFDB"}
          />
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="font-semibold font-barlow text-2xl">New Orders</h1>
          <Table
            columns={columns}
            dataSource={data}
            onChange={onChange}
            id="newOrders"
            scroll={{ x: 900 }}
          />
        </div> */}
      {/* </main> */} 
      <div className="h-full w-full bg-[#F9F9F9] m-0">
          <div className="w-full h-full flex flex-col flex-grow py-4">
            {/* <div className="flex flex-row justify-between w-[100%] items-center px-4 py-2">
              <div className="relative mx-4 w-[40%] ">
                <input
                  type="text"
                  placeholder="Search for"
                  className="flex-grow bg-[#FFFFFF] py-1 px-5 w-full outline-none rounded-md border border-[#0852C12B]"
                />
                <Image
                  src="/assets/searchIcon.svg"
                  className="absolute top-2 right-2"
                  width={17}
                  height={17}
                  alt="Search Icon"
                />
              </div>
              <div className="flex items-center px-4 py-2">
                <div className="relative flex align-center justify-center w-8 h-8 mr-3 rounded-full">
                  <Image src="/assets/country.svg" fill objectFit="contain" alt="Location Icon" />
                </div>
                <div className="relative mx-3">
                  <Image src="/assets/bellIcon.svg" width={24} height={24} alt="Bell Icon" />
                  <span className="absolute -top-5 -right-1 px-2 py-1 text-xs font-medium text-white bg-red-500 rounded-full">
                    9
                  </span>
                </div>
                <div className="relative mx-3">
                  <div className="flex align-center justify-center w-10 h-10 rounded-full bg-blue-500">
                    <Image src="/assets/userAdmin.svg" width={20} height={20} alt="User Icon" />
                  </div>
                </div>
              </div>
            </div> */}

            <div className="flex justify-between mx-[2rem] bg-[#FFFFFF] rounded-md shadow-md px-4 py-4">
              <div>
                <h1 className="text-[24px] font-[600]">Dashboard</h1>
              </div>
              <div className="flex items-center">
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
              <div className="flex items-start mx-[2rem]">
              <ConversationRate/>
              <Stats/>
              <ProfitPerformance/>
              </div>

              <div  className="flex items-start mx-[2rem]">
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
