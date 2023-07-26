import ProductModal from "@/components/Products/ProductModal";
// import categoryApi from "@/lib/category";
// import productApi from "@/lib/product";
import { useQuery } from "@tanstack/react-query";

import Head from "next/head";
import Image from "next/image";

import { useState } from "react";

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
      hour12: true
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
  const products =[
    {
      id: 1,
      name: "Product Name",
      image: "/images/productImage.svg",
      sku: "24355",
      stock: "In Stock (456)",
      Price: "$778",
      category: "Engine",
      statistics: "Best Seller",
      date: "12/07/23"
    },
    {
      id: 2,
      name: "Product Name",
      image: "/images/productImage.svg",
      sku: "24355",
      stock: "In Stock (456)",
      Price: "$778",
      category: "Engine",
      statistics: "Best Seller",
      date: "12/07/23"
    },
    {
      id: 3,
      name: "Product Name",
      image: "/images/productImage.svg",
      sku: "24355",
      stock: "In Stock (456)",
      Price: "$778",
      category: "Engine",
      statistics: "Best Seller",
      date: "12/07/23"
    },
    {
      id: 4,
      name: "Product Name",
      image: "/images/productImage.svg",
      sku: "24355",
      stock: "In Stock (456)",
      Price: "$778",
      category: "Engine",
      statistics: "Best Seller",
      date: "12/07/23"
    },
    {
      id: 5,
      name: "Product Name",
      image: "/images/productImage.svg",
      sku: "24355",
      stock: "In Stock (456)",
      Price: "$778",
      category: "Engine",
      statistics: "Best Seller",
      date: "12/07/23"
    },
    {
      id: 6,
      name: "Product Name",
      image: "/images/productImage.svg",
      sku: "24355",
      stock: "In Stock (456)",
      Price: "$778",
      category: "Engine",
      statistics: "Best Seller",
      date: "12/07/23"
    },
    {
      id: 7,
      name: "Product Name",
      image: "/images/productImage.svg",
      sku: "24355",
      stock: "In Stock (456)",
      Price: "$778",
      category: "Engine",
      statistics: "Best Seller",
      date: "12/07/23"
    },
    {
      id: 8,
      name: "Product Name",
      image: "/images/productImage.svg",
      sku: "24355",
      stock: "In Stock (456)",
      Price: "$778",
      category: "Engine",
      statistics: "Best Seller",
      date: "12/07/23"
    },
    {
      id: 9,
      name: "Product Name",
      image: "/images/productImage.svg",
      sku: "24355",
      stock: "In Stock (456)",
      Price: "$778",
      category: "Engine",
      statistics: "Best Seller",
      date: "12/07/23"
    },
  ]

  return (
    <div className="w-full bg-[F9F9F9]">
      <Head>
        <title>Products</title>
      </Head>
      <div className="h-full w-full bg-[#F9F9F9] my-4">

      <div className="flex justify-between mx-[2rem] bg-[#FFFFFF] rounded-md shadow-md px-4 py-4">
                    <div>
                        <h1 className="text-[24px] font-[600]">Product Management</h1>
                    </div>
                    <div className="flex items-center">
                        <div className="flex mr-3">
                            <p className="text-xs mr-2">Data Refreshed</p>
                            <Image src="/images/refresh.svg"
                                width={15}
                                height={15}
                                alt="Refresh Icon"/>
                        </div>
                        <div className="bg-[#F0F5FB] border rounded-md border-[#0852C12B] px-3 py-3 text-xs font-medium">
                            <p>{formattedDateTime}</p>
                        </div>
                    </div>
                </div>
        </div>

        <div className="flex justify-between mx-[2rem] my-4 bg-[#F9F9F9]">
        {/* First div with two buttons */}
        <div className="flex">
          <button className="bg-[#0852C1] text-white font-medium px-4 py-2 rounded-md mr-2 flex flex-row-reverse items-center transition-colors duration-300 hover:bg-[#0E71EB]">
            <Image src="/images/addProduct.svg" width={16} height={16} alt="Add Product" className="ml-2" />
            Add New Product
          </button>
          <button className="text-[#0852C1] font-medium px-4 py-1 rounded-md border-2 border-[#0852C1] transition-colors duration-300 hover:text-white hover:bg-[#0852C1]">
            Export
          </button>
        </div>

        {/* Second div with search bar */}
        <div className="flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="py-2  pl-2 pr-4 rounded-md bg-[#EBEFF6] border border-[#0852C12B] text-black text-base focus:outline-none transition-all duration-300"
            />
            <Image src="/images/searchIcon.svg" width={16} height={16} alt="Search" className="absolute right-3 top-3" />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center px-4 bg-[#F9F9F9]">
      <div className="flex text-[16px] mx-2">
        <p className="mr-2">Products:</p>{" "}<p className="mr-2">All ({products.length})</p>{" | "}
        <p className="text-[#0852C1] mx-2">Published</p><p>(1,766)</p>
        <p className="text-[#0852C1] mx-2">Draft</p><p>(87)</p>
      </div>
      <div className="flex">
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
          <table className="w-full">
            {/* Table headers */}
            <thead className="rounded-lg shadow-md my-3" >
              <tr className="text-[#0852C1] rounded-lg shadow-md bg-[#FFFFFF] text-left px-4 py-4">
                <th className="w-0 "></th>
                <th className="w-1/4 px-3 py-8 ">Products Name</th>
                <th className="w-1/12 px-3 py-4 mx-2">SKU</th>
                <th className="w-1/12">Stock</th>
                <th className="w-1/12">Price</th>
                <th className="w-1/12">Category</th>
                <th className="w-1/12">Statistics</th>
                <th className="w-1/12 text-center">Rate</th>
                <th className="w-1/12">Date</th>
                <th className="w-1/12">Actions</th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className={`hover:bg-blue-100 py-4 ${
                    selectedRows.includes(product.id)
                      ? "bg-blue-100 shadow-lg"
                      : ""
                  } ${product.id % 2 === 0 ? "bg-white shadow-md my-4 hover:bg-blue-100" : "bg-[#F9F9F9] hover:bg-blue-200"}`}
                >
                  {/* Checkbox column */}
                  <td className="text-center">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(product.id)}
                      onChange={() => toggleRowSelection(product.id)}
                    />
                  </td>
                  <td className="font-[500] py-8 my-4">{product.name}</td>
                  <td className="text-[#777777] font-[400] text-[14px]">{product.sku}</td>
                  <td className="text-[#777777] font-[400] text-[14px]">{product.stock}</td>
                  <td className="text-[#777777] font-[400] text-[14px]">{product.Price}</td>
                  <td className="text-[#0852C1] font-[400] text-[14px]" >{product.category}</td>
                  <td className="text-[#777777] font-[400] text-[14px]">{product.statistics}</td>
                  <td className="text-center">
                    <Image
                      src="/images/start.svg"
                      width={16}
                      height={16}
                      alt="Rating"
                    />
                  </td>
                  <td className="text-[#777777] font-[400] text-[14px]"><p>Last Modified</p>{product.date}</td>
                  <td className="flex justify-around items-center">
                    <button>
                      <Image
                        src="/images/edit.svg"
                        width={16}
                        height={16}
                        alt="Edit"
                      />
                    </button>
                    <button>
                      <Image
                        src="/images/more.svg"
                        width={5}
                        height={5}
                        alt="Delete"
                      />
                    </button>
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
