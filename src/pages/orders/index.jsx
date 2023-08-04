
"use client"

import { Modal, Button } from "antd";
import Head from "next/head";
import Image from "next/image";

import { useState, useEffect, useRef } from "react";

const Index = () => {

  const orders = [
    {
      id: 1,
      name: "Product Name",
      image: "/images/productImage.svg",
      sku: "24355",
      Payment: {
        price: "$778",
        status: "Fully Paid",
      },
      status: "Completed",
      category: "Engine",
      rate: 5,
    },
    {
      id: 2,
      name: "Product Name",
      image: "/images/productImage.svg",
      sku: "24355",
      Payment: {
        price: "$778",
        status: "Fully Paid",
      },
      status: "Completed",
      category: "Engine",
      rate: 5,
    },
    {
      id: 3,
      name: "Product Name",
      image: "/images/productImage.svg",
      sku: "24355",
      Payment: {
        price: "$778",
        status: "Fully Paid",
      },
      status: "Completed",
      category: "Engine",
      rate: 5,
    },
    {
      id: 4,
      name: "Product Name",
      image: "/images/productImage.svg",
      sku: "24355",
      Payment: {
        price: "$778",
        status: "Fully Paid",
      },
      status: "Completed",
      category: "Engine",
      rate: 5,
    },
    {
      id: 5,
      name: "Product Name",
      image: "/images/productImage.svg",
      sku: "24355",
      Payment: {
        price: "$778",
        status: "Fully Paid",
      },
      status: "Cancelled",
      category: "Engine",
      rate: 5,
    },
    {
      id: 6,
      name: "Product Name",
      image: "/images/productImage.svg",
      sku: "24355",
      Payment: {
        price: "$778",
        status: "Fully Paid",
      },
      status: "Completed",
      category: "Engine",
      rate: 5,
    },
    {
      id: 7,
      name: "Product Name",
      image: "/images/productImage.svg",
      sku: "24355",
      Payment: {
        price: "$778",
        status: "Fully Paid",
      },
      status: "Completed",
      category: "Engine",
      rate: 5,
    },
    {
      id: 8,
      name: "Product Name",
      image: "/images/productImage.svg",
      sku: "24355",
      Payment: {
        price: "$778",
        status: "Fully Paid",
      },
      status: "Completed",
      category: "Engine",
      rate: 5,
    },
    {
      id: 9,
      name: "Product Name",
      image: "/images/productImage.svg",
      sku: "24355",
      Payment: {
        price: "$778",
        status: "Fully Paid",
      },
      status: "Completed",
      category: "Engine",
      rate: 5,
    },
  ];

  const [selectedRows, setSelectedRows] = useState([]);
  const [formattedDateTime, setFormattedDateTime] = useState("");
  const [isContentWrapped, setIsContentWrapped] = useState(false);
  const [isContentWrapped2, setIsContentWrapped2] = useState(false);
  const [isContentWrapped3, setIsContentWrapped3] = useState(false);
  const actionsRef = useRef();
  const [showActions, setShowActions] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showModifyModal, setShowModifyModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [allOrders, setAllOrders] = useState(orders)

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIsContentWrapped(windowWidth < 759); 
    };


 
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize2 = () => {
      const windowWidth = window.innerWidth;
      setIsContentWrapped2(windowWidth < 420); 
    };
    

 
    handleResize2();

    window.addEventListener("resize", handleResize2);

    return () => {
      window.removeEventListener("resize", handleResize2);
    };
  }, []);

  useEffect(() => {
    const handleResize3 = () => {
      const windowWidth = window.innerWidth;
      setIsContentWrapped3(windowWidth < 381); 
    };
    

 
    handleResize3();

    window.addEventListener("resize", handleResize3);

    return () => {
      window.removeEventListener("resize", handleResize3);
    };
  }, []);

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
  const handlemodify = (orderId) => {
    setShowActions(false);
    setShowModifyModal(true)

  }

  const handleModifyToggle = (productId) => {
    setSelectedProductId(productId);
    setShowModify(!showModify);
    setShowModifyModal(true)
  };

  const handleDeleteConfirmation = () => {
    const updatedOrders = orders.filter((order) => order.id !== selectedProductId);
    const updated = orders.filter((order) => order.id !== selectedProductId);
   
    setAllOrders(updatedOrders);
    setSelectedProductId(null)
    setShowDeleteModal(false);
  };


  const handleDelete = (orderId) => {
    setShowActions(false);
    setShowDeleteModal(true);
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
    setSelectedProductId(null)
  };

  const handleModifyCancel = () => {
    setShowModifyModal(false);
    setSelectedProductId(null)
  };

  const handleActionsToggle = (orderId) => {
    setSelectedProductId(orderId);
    setShowActions(!showActions);
  };



  return (
    <div className="w-full bg-[F9F9F9]">
      <Head>
        <title>Orders</title>
      </Head>
      <div className="h-full w-full  my-4">
        <div className="hidden md:flex justify-between mx-[2rem] bg-[#FFFFFF] rounded-md shadow-md px-4 py-4">
          <div>
            <h1 className="text-[24px] font-[600]">Orders</h1>
          </div>
          <div className="md:flex items-center hidden ">
            <div className="flex mr-3">
              <p className="text-xs mr-2">Data Refreshed</p>
              <Image
                src="/images/refresh.svg"
                width={15}
                height={15}
                alt="Refresh Icon"
              />
            </div>
            <div className="bg-[#F0F5FB] border rounded-md border-[#0852C12B] px-3 py-3 text-xs font-medium">
              <p>{formattedDateTime}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`flex ${isContentWrapped ? "justify-center" : "justify-between"} flex-row  flex-wrap  items-start px-6  `}>
        <div className={`flex flex-row ${isContentWrapped ? "justify-center" : ""}  flex-wrap items-center mx-3  w-auto`}>
          <div className="text-[16px] font-[600]">Sales Period:</div>
          <div className="bg-transparent flex border border-[#0852C12B] rounded-md py-1 px-2 my-1">
            <p className="font-[500]">08/12/2023 - 08/12/2023</p>
            <Image
              src="/images/calender.svg"
              width={15}
              height={15}
              className="ml-2"
            />
          </div>
        </div>
        <div className={`flex ${isContentWrapped2 ?  "justify-center"  : ""} flex-row flex-wrap w-auto `}>
          <div className="text-[14px] font-[500] flex bg-[#FFFFFF] border border-[#0852C12B] items-center px-2 rounded-md my-1 mx-2">
            Sort by:
            <div className="relative text-left ml-1">
              <select className="py-2 text-sm font-medium bg-transparent w-[100px] focus:outline-none">
                <option value="bestSeller">Best Seller</option>
                <option value="priceLowToHigh">Price: Low to High</option>
                <option value="priceHighToLow">Price: High to Low</option>
              </select>
            </div>
          </div>
          <div className="text-[14px] font-[500] flex bg-[#FFFFFF] border border-[#0852C12B] items-center px-2 rounded-md my-1 mx-2">
            <div className="relative text-left ml-2">
              <select className="py-2 text-sm font-medium bg-transparent  focus:outline-none">
                <option value="bestSeller">Product Category</option>
                <option value="priceLowToHigh">Engine</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Table */}
        <div className="w-full overflow-x-auto px-4 py-4">
          <table className="w-full hidden md:block">
            {/* Table headers */}
            <thead className="rounded-[10px] shadow-md my-3">
              <tr className="text-[#0852C1] rounded-[10px] shadow-md bg-[#FFFFFF] text-left px-4 py-4">
                <th className="w-[70px] px-2 text-sm md:text-base"></th>
                <th className=" px-3 py-6 text-sm md:text-base">Products Name</th>
                <th className="w-1/8 px-3 py-4 mx-2 text-sm md:text-base">SKU</th>
                <th className="w-1/8 text-sm md:text-base">Category</th>
                <th className="w-1/8 text-sm md:text-base">Payment</th>
                <th className="w-1/12 text-sm md:text-base">Order Status</th>
                <th className="w-1/8 text-center md:text-base text-sm">Rate</th>
                <th className="w-1/12 text-sm md:text-base">Actions</th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody>
              {orders.map((order) => (
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
                  <td className="text-center">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(order.id)}
                      onChange={() => toggleRowSelection(order.id)}
                    />
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
                    {order.sku}
                  </td>
                  <td className="text-[#777777] font-[400] text-[14px]">
                    {order.category}
                  </td>
                  <td className="text-[#777777] font-[400] text-[14px]">
                    <p>{order.Payment.price}</p>
                    <p>{order.Payment.status}</p>
                  </td>
                  <td className="text-[#FFFFFF] font-[400] text-[14px] text-center">
                    <p
                      className={`rounded-md px-2 py-2 ${
                        order.status === "Cancelled"
                          ? "bg-[#D94B38]"
                          : order.status === "Completed"
                          ? "bg-[#49E258]"
                          : "bg-[#F0E74A]"
                      }`}
                    >
                      {order.status}
                    </p>
                  </td>{" "}
                  <td className="text-center">
                    <div className="flex justify-center">
                      {Array.from({ length: order.rate }, (_, index) => (
                        <Image
                          key={index}
                          src="/images/start.svg"
                          width={16}
                          height={16}
                          alt="Star"
                        />
                      ))}
                    </div>
                  </td>
                  <td className="flex justify-around items-center">
                    <button className="flex items-center w-60px my-8">
                      <Image
                        src="/images/edit.svg"
                        width={16}
                        height={16}
                        alt="Edit"
                      />
                    </button>
                    <button className="w-[50px] flex items-center justify-center my-6">
                      <Image
                        src="/images/more.svg"
                        width={3}
                        height={3}
                        alt="Delete"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="md:hidden flex flex-col space-y-4">
            {orders.map((order) => (
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
                  <p>Category: {" "}{order.category}</p>
                  <p>OrderId: {" "}{order.id}</p>
                  </div>
                 
                  </div>
                  
                 
                  <div className="ml-auto">
                    <button
                      className="p-1 rounded-md hover:bg-gray-200"
                      onClick={() => handleActionsToggle(order.id)}
                    >
                      <Image
                        src="/images/more.svg"
                        width={3}
                        height={3}
                        alt="More Actions"
                      />
                    </button>
                    <div className="relative md:block" ref={actionsRef}>
                      {showActions && selectedProductId === order.id && (
                        <div
                          className="absolute right-0 top-0  w-32 bg-white rounded-md shadow-lg overflow-hidden border "
                          style={{ border: '1px solid #E5E7EB' }}
                        >
                          <button
                            className="block w-full py-1 text-sm text-left px-4 transition-colors duration-200 hover:bg-red-600 text-white overflow-hidden"
                            style={{ backgroundColor: '#F73B3F' }}
                            onClick={() => handleDelete(order.id)}
                           
                          >
                            Delete
                          </button>
                          <button
                            className="block w-full py-1 text-sm text-left px-4 transition-colors duration-200 hover:bg-green-600 text-white overflow-hidden"
                            style={{ backgroundColor: '#0852C1' }}
                            onClick={() => handlemodify(product.id)}
                          >
                            Edit
                          </button>
                        </div>

                      )}
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
                    <p className="text-[#0852C1] mr-1">SKU:</p>{" "}{order.sku}
                  </p>
                  <p className="text-[#777777] font-[400] flex ">
                  <p className="text-[#0852C1] mr-1">Payment:</p> {" "}{order.Payment.price}
                  </p>
                  <div className="flex py-2 px-2 bg-blue-500 rounded-md">
                  <p className="text-white font-[400] flex ">
                  {order.Payment.status}
                  </p>
                  </div>
                  
                 
                </div>
                <div className="flex justify-between pt-3  pb-3 mb-2 flex-wrap  sm:text-[17px]">
                  <p className="text-[#777777] font-[400]  flex items-center">
                  <p className="text-[#0852C1] mr-1">Rating:</p> 
                  <div className="flex">
                  {Array.from({ length: order.rate }, (_, index) => (
                        <Image
                          key={index}
                          src="/images/start.svg"
                          width={16}
                          height={16}
                          alt="Star"
                        />
                      ))}
                  </div>
                  </p>
                  <div className="flex items-start justify-center text-white">
                  <p
                      className={`rounded-md px-2 py-2 ${
                        order.status === "Cancelled"
                          ? "bg-[#D94B38]"
                          : order.status === "Completed"
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
      <Modal
  title="Delete Order"
  visible={showDeleteModal}
  onCancel={handleDeleteCancel}
  footer={[
    <Button
      key="cancel"
      className="btn-cancel"
      onClick={handleDeleteCancel}
    >
      No
    </Button>,
    <Button
      key="delete"
      className="btn-delete"
      type="primary"
      style={{ backgroundColor: '#F73B3F', borderColor: '#F73B3F' }}
      onClick={handleDeleteConfirmation}
    >
      Yes
    </Button>,
  ]}
>
  <p>Do you want to delete this order?</p>
</Modal>

    </div>
  );
};

export default Index;

// export const getServerSideProps = async () => {
//   const categories = await categoryApi.getCategories();
//   const products = await productApi.getProdcuts();
//   return { props: { categories, products } };
// };
