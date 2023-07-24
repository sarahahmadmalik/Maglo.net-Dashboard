import TopCard from "@/components/Home/TopCard";
import { Avatar, Button, Select, Table, Tag } from "antd";
import Head from "next/head";
import Image from "next/image";
import { UserOutlined } from "@ant-design/icons";

const Index = () => {
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
      <main className="flex flex-col space-y-10">
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
        </div>
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
        </div>
      </main>
    </>
  );
};

export default Index;
