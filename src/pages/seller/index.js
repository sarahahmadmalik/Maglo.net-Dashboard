"use client"

import SellerCard from '../../components/Seller/SellerCard'
import Head from "next/head";
import Image from "next/image";
import { Modal } from "antd";
import { Button } from 'antd';
import {useState, useEffect} from "react";

const Index = () => {
    
    const sellersArray = [
        {
            id: 1,
            name: "James Williams",
            image: "/images/seller1.svg",
            address: "Steet 45, Cherry Lane New York USA",
            phone: "+1 5456499566",
            email: "demoseller@email.com",
            reviews: "5",
            statistics: {
                newOrders: 45,
                income: "$678k"
            }
        },
        {
            id: 2,
            name: "James Williams",
            image: "/images/seller2.svg",
            address: "Steet 45, Cherry Lane New York USA",
            phone: "+1 5456499566",
            email: "demoseller@email.com",
            reviews: "5",
            statistics: {
                newOrders: 45,
                income: "$678k"
            }
        },
        {
            id: 3,
            name: "James Williams",
            image: "/images/seller3.svg",
            address: "Steet 45, Cherry Lane New York USA",
            phone: "+1 5456499566",
            email: "demoseller@email.com",
            reviews: "5",
            statistics: {
                newOrders: 45,
                income: "$678k"
            }
        },
        {
            id: 4,
            name: "James Williams",
            image: "/images/seller1.svg",
            address: "Steet 45, Cherry Lane New York USA",
            phone: "+1 5456499566",
            email: "demoseller@email.com",
            reviews: "5",
            statistics: {
                newOrders: 45,
                income: "$678k"
            }
        }, {
            id: 5,
            name: "James Williams",
            image: "/images/seller2.svg",
            address: "Steet 45, Cherry Lane New York USA",
            phone: "+1 5456499566",
            email: "demoseller@email.com",
            reviews: "5",
            statistics: {
                newOrders: 45,
                income: "$678k"
            }
        }, {
            id: 6,
            name: "James Williams",
            image: "/images/seller3.svg",
            address: "Steet 45, Cherry Lane New York USA",
            phone: "+1 5456499566",
            email: "demoseller@email.com",
            reviews: "5",
            statistics: {
                newOrders: 45,
                income: "$678k"
            }
        }, {
            id: 7,
            name: "James Williams",
            image: "/images/seller1.svg",
            address: "Steet 45, Cherry Lane New York USA",
            phone: "+1 5456499566",
            email: "demoseller@email.com",
            reviews: "5",
            statistics: {
                newOrders: 45,
                income: "$678k"
            }
        }, {
            id: 8,
            name: "James Williams",
            image: "/images/seller2.svg",
            address: "Steet 45, Cherry Lane New York USA",
            phone: "+1 5456499566",
            email: "demoseller@email.com",
            reviews: "5",
            statistics: {
                newOrders: 45,
                income: "$678k"
            }
        },
    ]
    const [formattedDateTime, setFormattedDateTime] = useState("");
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [sellers, setSellers] = useState(sellersArray);
    const [seller_id, setSeller_id] = useState("");
    const [editedSeller, setEditedSeller] = useState({
        id: null,
        name: "",
        image: "",
        email: "",
        address: "",
        phone: "",
        reviews: "",
        statistics: {}
      });

    const handleDeleteConfirmation = () => {
 
        const updatedSellers = sellers.filter((seller) => seller.id !== seller_id);
        setSellers(updatedSellers);
        setSeller_id("")
        
        setShowDeleteModal(false);
      };
    
      const handleOpenModal = (sellerId) => {
        console.log(sellerId)
        setSeller_id(sellerId);
        setShowDeleteModal(true);
        
      };
    
      const handleDeleteCancel = () => {
        setShowDeleteModal(false);
      };

      const handleEditModal =(sellerId) => {
        setSeller_id(sellerId)
        setShowEditModal(true);
      }

      const handleEditModalCancel = () => {
        setSeller_id("")
        setShowEditModal(false)
      }

      const handleEditModalSave = () => {
        const updatedSellerFields = {
            name: editedSeller.name,
            phone: editedSeller.phone,
            email: editedSeller.email,
            address: editedSeller.address,
          };
        
          // Find the index of the editedSeller in the sellers array
          const editedSellerIndex = sellers.findIndex((seller) => seller.id === seller_id);
        
          if (editedSellerIndex !== -1) {
            // Update only the specified fields of the seller
            const updatedSellers = sellers.map((seller) =>
              seller.id === seller_id ? { ...seller, ...updatedSellerFields } : seller
            );
            setSellers(updatedSellers);
          }
        
          console.log(sellers);
      
        setShowEditModal(false); 
        setEditedSeller({
            id: null,
            name: "",
            image: "",
            email: "",
            address: "",
            phone: "",
            reviews: "",
            statistics: {}
          })
        setSeller_id("")
      };

      

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


    const sellersPerPage = 4; 
    const [currentPage, setCurrentPage] = useState(1);
    
    const indexOfLastSeller = currentPage * sellersPerPage;
    const indexOfFirstSeller = indexOfLastSeller - sellersPerPage;
    const currentSellers = sellers.slice(indexOfFirstSeller, indexOfLastSeller);

    const totalPages = Math.ceil(sellers.length / sellersPerPage);

    const handlePagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    let pageNumbers = [];
    if (totalPages <= 3) {
        pageNumbers = Array.from({
            length: totalPages
        }, (_, index) => index + 1);
    } else if (currentPage <= 2) {
        pageNumbers = [1, 2, 3];
    } else if (currentPage >= totalPages - 1) {
        pageNumbers = [
            totalPages - 2,
            totalPages - 1,
            totalPages
        ];
    } else {
        pageNumbers = [
            currentPage - 1,
            currentPage,
            currentPage + 1
        ];
    }

    return (
        <div className="w-full">
            <Head>
                <title>Sellers</title>
            </Head>
            <div className="h-full w-full my-4">
                <div className="flex justify-between mx-[2rem] bg-[#FFFFFF] rounded-md shadow-md px-4 py-4">
                    <div>
                        <h1 className="text-[24px] font-[600]">Seller</h1>
                    </div>
                    <div className="md:flex items-center hidden">
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
                <div className="flex md:flex-row flex-col justify-between mx-[2rem] my-4">
                    <div className="flex flex-col">
                        <div className="text-[16px] font-[600]">Sales Period:</div>
                        <div className="bg-transparent flex border border-[#0852C12B] rounded-md py-1 px-2 my-1">
                            <p className="font-[500]">08/12/2023 - 08/12/2023</p>
                            <Image src="/images/calender.svg"
                                width={15}
                                height={15}
                                className="ml-2"/></div>
                    </div>
                    <div className="flex flex-col items-right">
                        <div className="text-[1gpx] font-medium text-right">View Profile: {
                            currentSellers.length
                        }
                            {"/"}
                            {
                            sellers.length
                        }</div>
                        <div className="text-[14px] font-[500] flex border border-[#0852C12B] items-center px-2 rounded-md my-1">
                            Sort by:{" "}
                            <div className="relative text-left ml-2">
                                <select className="py-2 text-sm font-medium bg-transparent w-[100px] focus:outline-none">
                                    <option value="bestSeller">Best Seller</option>
                                    <option value="priceLowToHigh">Price: Low to High</option>
                                    <option value="priceHighToLow">Price: High to Low</option>
                                </select>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col gap-4 mx-4">
                    {
                    currentSellers.map((seller) => (
                        <SellerCard key={
                                seller.id
                            }
                            seller={seller} onOpenModal={handleOpenModal} onEditModal={handleEditModal}/>
                    ))
                } </div>

                <div className="flex justify-center mt-4">
                    {
                    currentPage > 1 && (
                        <div className={`w-8 h-8 rounded-full mx-1 flex items-center justify-center cursor-pointer bg-white text-[#0852C1]`}
                            onClick={handlePrevPage}>
                            {"<"} </div>
                    )
                }
                    {
                    pageNumbers.map((pageNumber) => (
                        <div key={pageNumber}
                            onClick={
                                () => handlePagination(pageNumber)
                            }
                            className={
                                `w-8 h-8 rounded-full mx-1 flex items-center justify-center cursor-pointer ${
                                    currentPage === pageNumber ? "bg-[#0852C1] text-white" : "bg-white text-[#0852C1]"
                                }`
                        }>
                            {pageNumber} </div>
                    ))
                }
                    {
                    currentPage < totalPages && (
                        <div className={`w-8 h-8 rounded-full mx-1 flex items-center justify-center cursor-pointer bg-white text-[#0852C1]`}
                            onClick={handleNextPage}>
                            {">"} </div>
                    )
                } </div>


            </div>
               {/* Delete Seller Modal */}
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
  <p>Do you want to delete this seller?</p>
</Modal>
<Modal
  title="Edit Seller"
  visible={showEditModal}
  onCancel={handleEditModalCancel}
  footer={[
    <Button
      key="cancel"
      className="bg-gray-300 text-black hover:bg-gray-400 mr-2"
      onClick={handleEditModalCancel}
    >
      Cancel
    </Button>,
    <Button
      key="save"
      className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white"
      onClick={handleEditModalSave}
    >
      Save
    </Button>,
  ]}
>
  <div className="flex flex-col gap-4 p-4">
    <div className="flex flex-col">
      <label htmlFor="name" className="text-sm font-semibold mb-1">
        Name
      </label>
      <input
        id="name"
        type="text"
        value={editedSeller.name}
        onChange={(e) =>
          setEditedSeller({ ...editedSeller, name: e.target.value })
        }
        className="border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500 transition-all"
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="email" className="text-sm font-semibold mb-1">
        Email
      </label>
      <input
        id="email"
        type="email"
        value={editedSeller.email}
        onChange={(e) =>
          setEditedSeller({ ...editedSeller, email: e.target.value })
        }
        className="border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500 transition-all"
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="address" className="text-sm font-semibold mb-1">
        Address
      </label>
      <input
        id="address"
        type="text"
        value={editedSeller.address}
        onChange={(e) =>
          setEditedSeller({ ...editedSeller, address: e.target.value })
        }
        className="border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500 transition-all"
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="phone" className="text-sm font-semibold mb-1">
        Phone
      </label>
      <input
        id="phone"
        type="text"
        value={editedSeller.phone}
        onChange={(e) =>
          setEditedSeller({ ...editedSeller, phone: e.target.value })
        }
        className="border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500 transition-all"
      />
    </div>
    {/* Add the input fields for the picture here */}
  </div>
</Modal>


        </div>
    );
};

export default Index;

