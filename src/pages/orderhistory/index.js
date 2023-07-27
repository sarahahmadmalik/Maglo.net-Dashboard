import ProductModal from "@/components/Products/ProductModal";
// import categoryApi from "@/lib/category";
// import productApi from "@/lib/product";
import { useQuery } from "@tanstack/react-query";

import Head from "next/head";
import Image from "next/image";

import { useState } from "react";
import DateRangeInput from  '../../components/History/DateRangeInput'
const Index = () => {
  const [showProductModal, setShowProductModal] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
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
  const toggleRowSelection = (productId) => {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.includes(productId)) {
        return prevSelectedRows.filter((id) => id !== productId);
      } else {
        return [...prevSelectedRows, productId];
      }
    });
  };
  // const { data, isLoading, isError } = useQuery(
  //   ["products"],
  //   async () => {
  //     const data = await productApi.getProdcuts();
  //     return data;
  //   },
  //   {
  //     initialData: products,
  //   }
  // );
  // const columns = [
  //   {
  //     title: (
  //       <div className="flex items-center space-x-4">
  //         <span className="text-base font-poppins font-medium">#</span>
  //         <Image
  //           src={"/images/sort.svg"}
  //           width={20}
  //           height={20}
  //           style={{ marginLeft: "8px" }}
  //         />
  //       </div>
  //     ),
  //     dataIndex: "no",
  //     key: "no",
  //     render: (_, record, index) => {
  //       return (
  //         <div className="flex items-center justify-center space-x-2">
  //           <span className="text-base font-poppins font-medium text-[#474747]">
  //             {index + 1}
  //           </span>
  //         </div>
  //       );
  //     },
  //   },
  //   {
  //     title: (
  //       <div className="flex items-center space-x-4">
  //         <span className="text-base font-poppins font-medium">Image</span>
  //       </div>
  //     ),
  //     key: "image",
  //     dataIndex: "image",
  //     render: (_, record) => {
  //       return (
  //         <div className="flex items-center justify-center space-x-2">
  //           {record?.images?.length > 0 ? (
  //             <AntdImage src={record?.images[0].url} width={40} height={40} />
  //           ) : (
  //             <span className="text-base font-poppins font-medium text-[#474747]">
  //               N/A
  //             </span>
  //           )}
  //         </div>
  //       );
  //     },
  //   },
  //   {
  //     title: (
  //       <div className="flex items-center space-x-4">
  //         <Image
  //           src={"/images/sort.svg"}
  //           width={20}
  //           height={20}
  //           style={{ marginLeft: "8px" }}
  //         />
  //         <span className="text-base font-poppins font-medium">Name</span>
  //       </div>
  //     ),
  //     dataIndex: "name",
  //     key: "name",
  //     render: (_, record) => {
  //       return (
  //         <div className="flex items-center justify-center space-x-2">
  //           <span className="text-base font-poppins font-medium text-[#474747]">
  //             {record?.name ? record?.name : "N/A"}
  //           </span>
  //         </div>
  //       );
  //     },

  //     //   filteredValue: [searchedText],
  //     //   onFilter: (value, record) => {
  //     //     return (
  //     //       String(record.name).toLowerCase().includes(value.toLowerCase()) ||
  //     //       String(record.category).toLowerCase().includes(value.toLowerCase()) ||
  //     //       String(record.subCategory)
  //     //         .toLowerCase()
  //     //         .includes(value.toLowerCase()) ||
  //     //       String(record.colors).toLowerCase().includes(value.toLowerCase()) ||
  //     //       String(record.type).toLowerCase().includes(value.toLowerCase()) ||
  //     //       String(record.material).toLowerCase().includes(value.toLowerCase()) ||
  //     //       String(record.sizes).toLowerCase().includes(value.toLowerCase())
  //     //     );
  //     //   },
  //   },
  //   {
  //     title: (
  //       <div className="flex items-center space-x-4">
  //         <Image
  //           src={"/images/sort.svg"}
  //           width={20}
  //           height={20}
  //           style={{ marginLeft: "8px" }}
  //         />
  //         <span className="text-base font-poppins font-medium">Category</span>
  //       </div>
  //     ),
  //     dataIndex: "category",
  //     key: "category",
  //     render: (_, record) => {
  //       return (
  //         <div className="flex items-center justify-center space-x-2">
  //           <span className="text-base font-poppins font-medium text-[#474747]">
  //             {record?.category ? record?.category : "N/A"}
  //           </span>
  //         </div>
  //       );
  //     },
  //   },
  //   {
  //     title: (
  //       <div className="flex items-center space-x-4">
  //         <Image
  //           src={"/images/sort.svg"}
  //           width={20}
  //           height={20}
  //           style={{ marginLeft: "8px" }}
  //         />
  //         <span className="text-base font-poppins font-medium">Price</span>
  //       </div>
  //     ),
  //     dataIndex: "price",
  //     key: "price",
  //     render: (_, record) => {
  //       return (
  //         <div className="flex items-center justify-center space-x-2">
  //           <Image src={"/images/currency_gray.svg"} width={10} height={10} />
  //           <span className="text-base font-poppins font-medium text-[#474747]">
  //             {record?.price ? record?.price : "N/A"}
  //           </span>
  //         </div>
  //       );
  //     },
  //   },
  //   {
  //     title: (
  //       <div className="flex items-center space-x-4">
  //         <Image
  //           src={"/images/sort.svg"}
  //           width={20}
  //           height={20}
  //           style={{ marginLeft: "8px" }}
  //         />
  //         <span className="text-base font-poppins font-medium">
  //           Items in Stock
  //         </span>
  //       </div>
  //     ),
  //     dataIndex: "itemsInStock",
  //     key: "itemsInStock",
  //     render: (_, record) => {
  //       return (
  //         <div className="flex items-center justify-center space-x-2">
  //           <span className="text-base font-poppins font-medium text-[#474747]">
  //             {record?.itemsInStock ? record?.itemsInStock : "N/A"}
  //           </span>
  //         </div>
  //       );
  //     },
  //   },
  //   {
  //     title: (
  //       <div className="flex items-center justify-center space-x-4">
  //         <span className="text-base font-poppins font-medium">Actions</span>
  //       </div>
  //     ),
  //     key: "actions",
  //     render: () => {
  //       return (
  //         <div className="flex items-center justify-center">
  //           <Popconfirm
  //             placement="left"
  //             title={
  //               <div className="flex flex-col">
  //                 <Button
  //                   type="link"
  //                   className="flex items-center space-x-2 text-[#2f9379] font-poppins hover:text-[#2f9379]"
  //                 >
  //                   <Image src={"/images/eye.svg"} width={18} height={18} />
  //                   View Details
  //                 </Button>
  //                 <Button
  //                   type="link"
  //                   className="flex items-center space-x-2 text-[#2f9379] font-poppins"
  //                 >
  //                   <Image
  //                     src={"/images/edit_icon1.svg"}
  //                     width={18}
  //                     height={18}
  //                   />
  //                   Edit Details
  //                 </Button>
  //                 <Button
  //                   type="link"
  //                   className="flex items-center space-x-2 text-[#D94B38] font-poppins"
  //                 >
  //                   <Image src={"/images/delete.svg"} width={18} height={18} />
  //                   Delete
  //                 </Button>
  //               </div>
  //             }
  //             description=""
  //             // onConfirm={confirm}
  //             icon={null}
  //           >
  //             <Image
  //               className="cursor-pointer"
  //               src={"/images/more_icon.svg"}
  //               width={24}
  //               height={24}
  //             />
  //           </Popconfirm>
  //         </div>
  //       );
  //     },
  //   },
  // ];

  // const data = [
  //   {
  //     no: "1",
  //     name: "Axe Perfume",
  //     category: "Perfume",
  //     price: "100",
  //     itemsInStock: 10,
  //   },
  // ];
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
      <div className="h-full w-full bg-[#F9F9F9] my-4">
        <div className="flex justify-between mx-[2rem] bg-[#FFFFFF] rounded-md shadow-md px-4 py-4">
          <div>
            <h1 className="text-[24px] font-[600]">Order History</h1>
          </div>
          <div className="flex items-center">
        <DateRangeInput/>

          </div>
        </div>
      </div>

      <div>
        {/* Table */}
        <div className="w-full overflow-x-auto px-4 py-4">
          <table className="w-full">
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
        </div>
      </div>
      {showProductModal && (
        <ProductModal
          show={showProductModal}
          close={() => {
            setShowProductModal(false);
          }}
          categories={categories}
        />
      )}
    </div>
  );
};

export default Index;

// export const getServerSideProps = async () => {
//   const categories = await categoryApi.getCategories();
//   const products = await productApi.getProdcuts();
//   return { props: { categories, products } };
// };
