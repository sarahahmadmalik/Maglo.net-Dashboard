import ProductModal from "@/components/Products/ProductModal";
// import categoryApi from "@/lib/category";
// import productApi from "@/lib/product";
import { useQuery } from "@tanstack/react-query";
"use client"
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import DateRangeInput from  '../../components/History/DateRangeInput'
const Index = () => {
  const [showProductModal, setShowProductModal] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
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
  const toggleRowSelection = (productId) => {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.includes(productId)) {
        return prevSelectedRows.filter((id) => id !== productId);
      } else {
        return [...prevSelectedRows, productId];
      }
    });
  };
 
  const history = [
    {
      id: 1,
      orderId: "#75677",
      name: "Product Name",
      seller: "James",
      image: "/images/productImage.svg",
      payment: "Credit Card",
      time: "45 min",
      Type: "Delivery",
      status: "Delivered",
    },
    {
        id: 2,
        orderId: "#75677",
        name: "Product Name",
        seller: "James",
        image: "/images/productImage.svg",
        payment: "Credit Card",
        time: "45 min",
        Type: "Delivery",
        status: "Delivered",
      },
      {
        id: 3,
        orderId: "#75677",
        name: "Product Name",
        seller: "James",
        image: "/images/productImage.svg",
        payment: "Credit Card",
        time: "45 min",
        Type: "Delivery",
        status: "Delivered",
      },
      {
        id: 4,
        orderId: "#75677",
        name: "Product Name",
        seller: "James",
        image: "/images/productImage.svg",
        payment: "Credit Card",
        time: "45 min",
        Type: "Delivery",
        status: "Delivered",
      },
      {
        id: 5,
        orderId: "#75677",
        name: "Product Name",
        seller: "James",
        image: "/images/productImage.svg",
        payment: "Credit Card",
        time: "45 min",
        Type: "Delivery",
        status: "Delivered",
      },
      {
        id: 6,
        orderId: "#75677",
        name: "Product Name",
        seller: "James",
        image: "/images/productImage.svg",
        payment: "Credit Card",
        time: "45 min",
        Type: "Delivery",
        status: "Delivered",
      },
      {
        id: 7,
        orderId: "#75677",
        name: "Product Name",
        seller: "James",
        image: "/images/productImage.svg",
        payment: "Credit Card",
        time: "45 min",
        Type: "Delivery",
        status: "Cancelled",
      },
      {
        id: 8,
        orderId: "#75677",
        name: "Product Name",
        seller: "James",
        image: "/images/productImage.svg",
        payment: "Credit Card",
        time: "45 min",
        Type: "Delivery",
        status: "Delivered",
      },
      {
        id: 9,
        orderId: "#75677",
        name: "Product Name",
        seller: "James",
        image: "/images/productImage.svg",
        payment: "Credit Card",
        time: "45 min",
        Type: "Delivery",
        status: "Delivered",
      },
  ];

  return (
    <div className="w-full bg-[F9F9F9]">
      <Head>
        <title>Orders</title>
      </Head>
      <div className="h-full w-full my-4">
        <div className="hidden md:flex justify-between mx-[2rem] bg-[#FFFFFF] rounded-md shadow-md px-4 py-4">
          <div>
            <h1 className="text-[24px] font-[600]">Order History</h1>
          </div>
          <div className="flex items-center">
        <DateRangeInput/>

          </div>
        </div>
      </div>

      <div className="w-full ">
        {/* Table */}
        <div className="w-full  overflow-x-auto px-4 py-4">
          <table className="w-full invisible md:visible">
            {/* Table headers */}
            <thead className="rounded-[10px] shadow-md my-3">
              <tr className="text-[#0852C1] rounded-[10px] shadow-md bg-[#FFFFFF] text-left px-4 py-4">
                <th className="w-[70px] px-2 text-center">ID</th>
                <th className=" px-3 py-6 ">Products Name</th>
                <th className="w-1/8 px-3 py-4 mx-2">Name</th>
                <th className="w-1/8">Payment</th>
                <th className="w-1/6">Time Remaining</th>
                <th className="w-1/12">Type</th>
                <th className="w-1/8 text-center">Status</th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody>
              {history.map((order) => (
                <tr
                  key={order.id}
                  className={`hover:bg-blue-100 py-8 ${
                    selectedRows.includes(order.id)
                      ? "bg-blue-100 shadow-lg"
                      : ""
                  } ${
                    order.id % 2 === 0
                      ? "bg-white rounded-md shadow-md my-4 hover:bg-blue-100"
                      : " hover:bg-blue-200"
                  }`}
                >
                  {/* Checkbox column */}
                  <td className="text-center px-3 font-[400]">
                   {order.orderId}
                  </td>
                  <td className="font-[500] p-6">
                    <div className="flex items-center">
                      <div className="rounded-lg overflow-hidden mr-4">
                        <Image
                          src={order.image}
                          width={40}
                          height={40}
                          alt="Product Image"
                        />
                      </div>
                      {order.name}
                    </div>
                  </td>
                  <td className="text-[#777777] font-[400] text-[14px]">
                    {order.seller}
                  </td>
                  <td className="text-[#777777] font-[400] text-[14px]">
                    {order.payment}
                  </td>
                  <td className="text-[#777777] font-[400] text-[14px] text-left">
  <div className="flex items-center justify-center mr-2">
    <Image
      src="/images/clock.svg"
      className="mr-3"
      width={16}
      height={16}
      alt="Clock Icon"
    />
    {order.time}
  </div>
</td>

                  <td className="text-[#777777] font-[400] text-[14px]">
                   {order.Type}
                  </td>
                  <td className="text-[#FFFFFF] font-[400] text-[14px] text-center px-4">
  <p
    className={`rounded-md px-2 py-2 ${
      order.status === "Delivered"
        ? "bg-[#49E258]"
        : order.status === "Cancelled"
        ? "bg-[#D94B38]"
        : "bg-[#F0E74A]"
    }`}
  >
    {order.status}
  </p>
</td>

                 
                 
                </tr>
              ))}
            </tbody>
          </table>
          <div className="md:hidden flex flex-col space-y-4">
            {history.map((order) => (
              <div
                key={order.id}
                className={`bg-white rounded-md shadow-md p-4 ${
                  selectedRows.includes(order.id) ? 'bg-blue-100 shadow-lg' : ''
                }`}
              >
                <div className="flex items-center mb-4 ">
                  <div className="rounded-lg overflow-hidden mr-4">
                    <Image
                      src={order.image}
                      width={60}
                      height={60}
                      alt="Product Image"
                    />
                  </div>
                  <div>
                  <p className="font-semibold text-base">{order.name}</p>
                  <div>
                  <p>Category: {" "}{order.category} Engine</p>
                  <p>OrderId: {" "}{order.orderId}</p>
                  </div>
                 
                  </div>
                  
                </div>
                <div className="flex justify-between border-b border-blue-500 pb-3 sm:text-[17px]   flex-wrap items-center mb-2">
                 
                  <div className="flex flex-wrap">
                    <p className="text-[#0852C1] ">Subcategories:</p>
                    <div className="flex flex-wrap">
                    <p className="ml-2 text-[#777777]">sub category-1</p>{","}
                    <p className="ml-2 text-[#777777]">sub category-2</p>
                    </div>
                   
                  </div>
                  
                 
                </div>
                <div className="flex justify-between border-b border-blue-500 pb-3 sm:text-[17px]   flex-wrap items-center mb-2">
                  <p className="text-[#777777] font-[400]  flex">
                    <p className="text-[#0852C1] mr-1">Seller:</p>{" "}{order.seller}
                  </p>
                  <p className="text-[#777777] font-[400] flex ">
                  <p className="text-[#0852C1] mr-1">Payment:</p> {" "}{order.payment}
                  </p>
                  <p className="text-[#777777] font-[400] flex items-center  ">
                    Type: {" "}   
                    <div className="flex py-2 px-2 bg-blue-500 rounded-md ml-2">
                  <p className="text-white font-[400] flex ">
                  {order.Type}
                  </p>
                  </div>
                  </p>
                
                  
                 
                </div>
                <div className="flex justify-between pt-3  pb-3 mb-2 flex-wrap  sm:text-[17px]">
                  <p className="text-[#777777] font-[400]  flex items-center">
                  <p className="text-[#0852C1] mr-1">Time Remaining:</p> 
                  <div className="flex">
                  <Image
      src="/images/clock.svg"
      className="mr-2 ml-2"
      width={16}
      height={16}
      alt="Clock Icon"
    />
    {order.time}
                  </div>
                  </p>
                  <div className="flex items-start justify-center text-white">
                  <p
                      className={`rounded-md px-2 py-2 ${
                        order.status === "Cancelled"
                          ? "bg-[#D94B38]"
                          : order.status === "Delivered"
                          ? "bg-[#49E258]"
                          : "bg-[#F0E74A]"
                      }`}
                    >
                      {order.status}
                    </p>
                  </div>
                  
                </div>
               
              </div>
            ))}
          </div>  
        </div>
      </div>
   
    </div>
  );
};

export default Index;

// export const getServerSideProps = async () => {
//   const categories = await categoryApi.getCategories();
//   const products = await productApi.getProdcuts();
//   return { props: { categories, products } };
// };
