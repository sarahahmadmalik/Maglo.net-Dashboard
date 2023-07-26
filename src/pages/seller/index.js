import ProductModal from "@/components/Products/ProductModal";
import SellerCard from '../../components/Seller/SellerCard'
import Head from "next/head";
import Image from "next/image";

import {useState} from "react";

const Index = () => {
    const [showProductModal, setShowProductModal] = useState(false);
    // const { data, isLoading, isError } = useQuery(
    //     ["products"],
    //     async () => {
    //       const data = await productApi.getProdcuts();
    //       return data;
    //     },
    //     {
    //       initialData: products,
    //     }
    // );
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

    const sellers = [
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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

    

    const sellersPerPage = 4; // Number of sellers to display per page
    const [currentPage, setCurrentPage] = useState(1);
     // Calculate the indexes of sellers to display on the current page
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

  // Function to handle Previous button
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  let pageNumbers = [];
  if (totalPages <= 3) {
    pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  } else if (currentPage <= 2) {
    pageNumbers = [1, 2, 3];
  } else if (currentPage >= totalPages - 1) {
    pageNumbers = [totalPages - 2, totalPages - 1, totalPages];
  } else {
    pageNumbers = [currentPage - 1, currentPage, currentPage + 1];
  }

    return (
        <div className="w-full">
            <Head>
                <title>Sellers</title>
            </Head>
            <div className="h-full w-full bg-[#F9F9F9] my-4">
                <div className="flex justify-between mx-[2rem] bg-[#FFFFFF] rounded-md shadow-md px-4 py-4">
                    <div>
                        <h1 className="text-[24px] font-[600]">Dashboard</h1>
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
                <div className="flex flex-row justify-between mx-[2rem] my-4">
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
                        <div className="text-[1gpx] font-medium text-right">View Profile: {currentSellers.length} {"/"} {sellers.length}</div>
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
                {currentSellers.map((seller) => (
            <SellerCard key={seller.id} seller={seller} />
          ))}
        </div>

        <div className="flex justify-center mt-4">
        {currentPage > 1 && (
          <div
            className={`w-8 h-8 rounded-full mx-1 flex items-center justify-center cursor-pointer bg-white text-[#0852C1]`}
            onClick={handlePrevPage}
          >
            {"<"}
          </div>
        )}
        {pageNumbers.map((pageNumber) => (
          <div
            key={pageNumber}
            onClick={() => handlePagination(pageNumber)}
            className={`w-8 h-8 rounded-full mx-1 flex items-center justify-center cursor-pointer ${
              currentPage === pageNumber ? "bg-[#0852C1] text-white" : "bg-white text-[#0852C1]"
            }`}
          >
            {pageNumber}
          </div>
        ))}
        {currentPage < totalPages && (
          <div
            className={`w-8 h-8 rounded-full mx-1 flex items-center justify-center cursor-pointer bg-white text-[#0852C1]`}
            onClick={handleNextPage}
          >
            {">"}
          </div>
        )}
      </div>


             </div>
        </div>
    );
};

export default Index;

// export const getServerSideProps = async () => {
// const categories = await categoryApi.getCategories();
// const products = await productApi.getProdcuts();
// return { props: { categories, products } };
// };
