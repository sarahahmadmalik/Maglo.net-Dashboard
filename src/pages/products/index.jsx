import ProductModal from "@/components/Products/ProductModal";
// import categoryApi from "@/lib/category";
// import productApi from "@/lib/product";
import { useQuery } from "@tanstack/react-query";
import { Modal } from "antd";
import { Button } from 'antd';
import Head from "next/head";
import Image from "next/image";
import Link from 'next/link'
import { useState, useEffect, useRef } from "react";

const Index = () => {
  let products = [
    {
      id: 1,
      name: "Product Name",
      image: "/images/productImage.svg",
      sku: "24355",
      stock: "In Stock (456)",
      Price: "$778",
      category: "Engine",
      statistics: "Best Seller",
      date: "12/07/23",
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
      date: "12/07/23",
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
      date: "12/07/23",
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
      date: "12/07/23",
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
      date: "12/07/23",
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
      date: "12/07/23",
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
      date: "12/07/23",
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
      date: "12/07/23",
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
      date: "12/07/23",
    },
  ];

  const [showProductModal, setShowProductModal] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [formattedDateTime, setFormattedDateTime] = useState("");
  const [showActions, setShowActions] = useState(false);
  const [showModify, setShowModify] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showModifyModal, setShowModifyModal] = useState(false);
  const[Allproducts, setAllproducts] = useState(products)
  const [selectedProductId, setSelectedProductId] = useState(null);
  const actionsRef = useRef();
  const [isContentWrapped, setIsContentWrapped] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIsContentWrapped(windowWidth < 490); 
    };

 
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleActionsToggle = (productId) => {
    setSelectedProductId(productId);
    setShowActions(!showActions);
  };

  const handleDeleteConfirmation = () => {
    const updatedProducts = products.filter((product) => product.id !== selectedProductId);
    const updated = products.filter((product) => product.id !== selectedProductId);
    products = updated
    console.log(updatedProducts)
    setAllproducts(updatedProducts);
    setSelectedProductId(null)
    setShowDeleteModal(false);
  };

  const handlemodify = (prodId) => {
    setShowModify(true);
    setShowModifyModal(true)

  }

  const handleModifyToggle = (productId) => {
    setSelectedProductId(productId);
    setShowModify(!showModify);
    setShowModifyModal(true)
  };


 

  const handleDelete = (productId) => {
    setSelectedProductId(productId);
    setShowActions(false);
    setShowDeleteModal(true);
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
    setSelectedProductId(null)
  };

 console.log(showActions)
 console.log(selectedProductId)

  // useEffect(() => {

  //   const handleOutsideClick = (event) => {
  //     if (!actionsRef.current.contains(event.target)) {
  //       setShowActions(false);
  //     }
  //   };

  
  //   document.body.addEventListener("click", handleOutsideClick);

  //   return () => {
  //     document.body.removeEventListener("click", handleOutsideClick);
  //   };
  // }, []);

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


  const categories=['engine'];
 
  

  return (
    <div className="w-full bg-[F9F9F9]">
      <Head>
        <title>Products</title>
      </Head>
     
      <div className="h-full w-full my-4">

        <div className="hidden  md:flex-row md:flex justify-between md:mx-[2rem] mx-4 bg-[#FFFFFF] rounded-md shadow-md px-4 py-4">
          <div>
            <h1 className="text-[24px] font-[600]">Product Management</h1>
          </div>
          <div className="items-center hidden md:flex">
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

      <div className={`flex ${isContentWrapped ? "justify-center" : "justify-between"} flex-row  md:mx-[2rem] mx-4 my-4 items-start flex-wrap`}>
        {/* First div with two buttons */}
        <div className="flex">
          <button className="bg-[#0852C1] text-white text-xs md:text-base font-medium px-4 py-2 rounded-md mr-2 flex flex-row-reverse items-center transition-colors duration-300 hover:bg-[#0E71EB]" onClick={() => setShowProductModal(true)}>
            <Image
              src="/images/addProduct.svg"
              width={16}
              height={16}
              alt="Add Product"
              className="ml-2"
            />
            Add New Product
          </button>
          <button className="text-[#0852C1] text-xs md:text-base font-medium px-4 py-1 rounded-md border-2 border-[#0852C1] transition-colors duration-300 hover:text-white hover:bg-[#0852C1]">
            Export
          </button>
        </div>

        {/* Second div with search bar */}
        <div className={`flex ${isContentWrapped ? "mt-3" : "mt-0"} items-center md:my-3 sm:my-0  flex-wrap`}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="py-2  pl-2 pr-4 rounded-md bg-[#EBEFF6] border border-[#0852C12B] text-black text-xs md:text-base focus:outline-none transition-all duration-300"
            />
            <Image
              src="/images/searchIcon.svg"
              width={16}
              height={16}
              alt="Search"
              className="absolute right-3 top-3"
            />
          </div>
        </div>
      </div>

      <div className=" flex flex-row justify-between items-center px-2 flex-wrap">
        <div className="flex flex-row text-sm flex-wrap mx-4">
          <div className="flex">
          <p className="mr-2">Products:</p>{" "}
          <p className="mr-2">All ({Allproducts.length})</p>
          <p className="hidden sm:block">  {" | "}</p>
          </div>
        <div className="flex">
          <p className="text-[#0852C1] sm:mx-2">Published</p>
          <p>(1,766)</p>
          <p className="text-[#0852C1] mx-2">Draft</p>
          <p>(87)</p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap">
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
        <div className="w-full overflow-x-auto px-4 py-4 ">
          <table className=" hidden md:block w-full mx-auto ">
            {/* Table headers */}
            <thead className="rounded-lg shadow-md my-3 w-full">
              <tr className="text-[#0852C1] rounded-lg shadow-md bg-[#FFFFFF] text-left text-xs md:text-base px-4 py-4 w-full">
                <th className="w-0 "></th>
                <th className="w-1/4  px-3 py-6 ">Products Name</th>
                <th className="w-1/12 xl:w-1/6  px-3 py-4 mx-2">SKU</th>
                <th className="w-1/12 xl:w-1/6">Stock</th>
                <th className="md:w-1/12 w-1/8">Price</th>
                <th className="w-1/12">Category</th>
                <th className="w-1/12">Statistics</th>
                <th className="w-1/12 text-center">Rate</th>
                <th className="w-1/12">Date</th>
                <th className="w-1/12">Actions</th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody>
              {Allproducts.map((product) => (
                <tr
                  key={product.id}
                  className={` text-xs hover:bg-blue-100 py-4 ${
                    selectedRows.includes(product.id)
                      ? "bg-blue-100 shadow-lg"
                      : ""
                  } ${
                    product.id % 2 === 0
                      ? "bg-white shadow-md my-4 hover:bg-blue-100"
                      : "hover:bg-blue-200"
                  }`}
                >
                  {/* Checkbox column */}
                  <td className="text-center">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(product.id)}
                      onChange={() => toggleRowSelection(product.id)}
                    />
                  </td>
                  <td className="font-[500] p-6 text-xs md:text-base">
                    <div className="flex items-center">
                      <div className="rounded-lg overflow-hidden mr-4">
                        <Image
                          src={product.image}
                          width={40}
                          height={40}
                          alt="Product Image"
                        />
                      </div>
                      {product.name}
                    </div>
                  </td>
                  <td className="text-[#777777] font-[400] md:text-[14px] text-xs">
                    {product.sku}
                  </td>
                  <td className="text-[#777777] font-[400] md:text-[14px] text-xs">
                    {product.stock}
                  </td>
                  <td className="text-[#777777] font-[400] md:text-[14px] text-xs">
                    {product.Price}
                  </td>
                  <td className="text-[#0852C1] font-[400] md:text-[14px] text-xs">
                    {product.category}
                  </td>
                  <td className="text-[#777777] font-[400] md:text-[14px] text-xs">
                    {product.statistics}
                  </td>
                  <td className="">
                    <div className="flex justify-center items-center">
                    <Image
                      src="/images/start.svg"
                      width={16}
                      height={16}
                      alt="Rating"
                    />
                    </div>
                  </td>
                  <td className="text-[#777777] font-[400] md:text-[14px] text-xs">
                    <p>Last Modified</p>
                    {product.date}
                  </td>
                  <td className="flex justify-around items-center">
                    <button className="flex items-center w-60px my-5"   onClick={() => handleModifyToggle(product.id)}  >
                      <Image
                        src="/images/edit.svg"
                        width={16}
                        height={16}
                        alt="Edit"
                      />
                    </button>
                    <div className="relative md:block" ref={actionsRef}>
                      <button
                        className="p-1 rounded-md hover:bg-gray-200"
                        onClick={() => handleActionsToggle(product.id)}
                      >
                        <Image
                          src="/images/more.svg"
                          width={3}
                          height={3}
                          alt="More Actions"
                        />
                      </button>
                      {showActions && selectedProductId === product.id && (
                        <div
                          className="absolute right-0 top-[-20]  w-32 bg-white rounded-md shadow-lg overflow-hidden border " 
                          style={{ border: "1px solid #E5E7EB" }}
                        >
                          <button
                            className="block w-full py-1 text-sm text-left px-4 transition-colors duration-200 hover:bg-red-600 text-white overflow-hidden"
                            style={{ backgroundColor: "#F73B3F" }}
                            onClick={() => handleDelete(product.id)}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="md:hidden flex flex-col space-y-4">
            {Allproducts.map((product) => (
              <div
                key={product.id}
                className={`bg-white rounded-md shadow-md p-4 ${
                  selectedRows.includes(product.id) ? 'bg-blue-100 shadow-lg' : ''
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="rounded-lg overflow-hidden mr-4">
                    <Image
                      src={product.image}
                      width={60}
                      height={60}
                      alt="Product Image"
                    />
                  </div>
                  <div>
                  <p className="font-semibold text-base">{product.name}</p>
                  <p>Category: {" "}{product.category}</p>
                  </div>
                 
                  <div className="ml-auto">
                    <button
                      className="p-1 rounded-md hover:bg-gray-200"
                      onClick={() => handleActionsToggle(product.id)}
                    >
                      <Image
                        src="/images/more.svg"
                        width={3}
                        height={3}
                        alt="More Actions"
                      />
                    </button>
                    <div className="relative md:block" ref={actionsRef}>
                      {showActions && selectedProductId === product.id && (
                        <div
                          className="absolute right-0 top-0  w-32 bg-white rounded-md shadow-lg overflow-hidden border "
                          style={{ border: '1px solid #E5E7EB' }}
                        >
                          <button
                            className="block w-full py-1 text-sm text-left px-4 transition-colors duration-200 hover:bg-red-600 text-white overflow-hidden"
                            style={{ backgroundColor: '#F73B3F' }}
                            onClick={() => handleDelete(product.id)}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between border-b border-blue-500 pb-3  flex-wrap items-center mb-2">
                  <p className="text-[#777777] font-[400]  flex">
                    <p className="text-[#0852C1] mr-1">SKU:</p>{" "}{product.sku}
                  </p>
                  <p className="text-[#777777] font-[400] flex ">
                  <p className="text-[#0852C1] mr-1">Stock:</p> {" "}{product.stock}
                  </p>
                  <p className="text-[#777777] font-[400] flex ">
                  <p className="text-[#0852C1] mr-1">Statistics: </p>{product.statistics}
                  </p>
                 
                </div>
                <div className="flex justify-between pt-1 border-b border-blue-500 pb-3 mb-2 flex-wrap">
                  <p className="text-[#777777] font-[400]  flex">
                  <p className="text-[#0852C1] mr-1">Last Modified:</p> {product.date}
                  </p>
                  <div className="flex items-start justify-center">
                  <p className="text-[#0852C1] font-[400]  mr-2">
                      Rate
                    </p>
                    <Image
                      src="/images/start.svg"
                      width={16}
                      height={16}
                      alt="Rating"
                    />
                    
                  </div>
                  
                </div>
                <div className= "flex justify-between items-center  pb-3 mb-2 flex-wrap ">
                <p className="text-[#777777] font-[400] text-[17px] font-[500] flex">
                    <p className="text-[#0852C1] mr-1">Price:</p>{" "}{product.Price}
                  </p>
                <div className="flex">
                    <button
                      className="flex items-center  px-2 py-2 "    onClick={() => handleModifyToggle(product.id)}
                    >
                      <Image
                        src="/images/edit.svg"
                        width={16}
                        height={16}
                        alt="Edit"
                      />
                    </button>
                    <div className="relative md:block" ref={actionsRef}>
                      {showModify && selectedProductId === product.id && (
                        <div
                          className="absolute right-0 top-6  w-32 bg-white rounded-md shadow-lg overflow-hidden border "
                          style={{ border: '1px solid #E5E7EB' }}
                        >
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
              </div>
            ))}
          </div>         
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
        <Modal
  title="Delete Seller"
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
  <p>Do you want to delete this product?</p>
</Modal>

    </div>
  );
};

export default Index;

