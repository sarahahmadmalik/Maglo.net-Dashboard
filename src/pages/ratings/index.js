"use client"

import Head from "next/head";
import Image from "next/image";
import RatingProgressBar from '../../components/ratings/RatingProgressBar'
import { useState } from "react";
import ReviewTable from '../../components/ratings/ReviewTable'

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
  const toggleRowSelection = (productId) => {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.includes(productId)) {
        return prevSelectedRows.filter((id) => id !== productId);
      } else {
        return [...prevSelectedRows, productId];
      }
    });
  };

  
  const reviews =[
    {
        id: 1,
        name: "James Williams",
        email: "email@gmail.com",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        date: "02/09/2023",
        time: "03:33 pm",
        image: "/images/review1.svg",
        stars: 5
    },
    {
        id: 2,
        name: "James Williams",
        email: "email@gmail.com",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        date: "02/09/2023",
        time: "03:33 pm",
        image: "/images/review2.svg",
        stars: 5
    },
    {
        id: 3,
        name: "James Williams",
        email: "email@gmail.com",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        date: "02/09/2023",
        time: "03:33 pm",
        image: "/images/review3.svg",
        stars: 4
    },
    {
        id: 4,
        name: "James Williams",
        email: "email@gmail.com",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        date: "02/09/2023",
        time: "03:33 pm",
        image: "/images/review4.svg",
        stars: 5
    },
    {
        id: 5,
        name: "James Williams",
        email: "email@gmail.com",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        date: "02/09/2023",
        time: "03:33 pm",
        image: "/images/review1.svg",
        stars: 3
    },
    {
        id: 6,
        name: "James Williams",
        email: "email@gmail.com",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        date: "02/09/2023",
        time: "03:33 pm",
        image: "/images/review2.svg",
        stars: 5
    },
    {
        id: 7,
        name: "James Williams",
        email: "email@gmail.com",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        date: "02/09/2023",
        time: "03:33 pm",
        image: "/images/review3.svg",
        stars: 5
    },
    {
        id: 8,
        name: "James Williams",
        email: "email@gmail.com",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        date: "02/09/2023",
        time: "03:33 pm",
        image: "/images/review4.svg",
        stars: 4
    },
    {
        id: 9,
        name: "James Williams",
        email: "email@gmail.com",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        date: "02/09/2023",
        time: "03:33 pm",
        image: "/images/review1.svg",
        stars: 5
    },

  ]
  const reviewsPerPage = 6;
  const [currentReviewPage, setCurrentReviewPage] = useState(1);

  const indexOfLastReview = currentReviewPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const totalReviewPages = Math.ceil(reviews.length / reviewsPerPage);

  const handleReviewPagination = (pageNumber) => {
    setCurrentReviewPage(pageNumber);
  };

  const handleNextReviewPage = () => {
    setCurrentReviewPage((prevPage) => prevPage + 1);
  };

  const handlePrevReviewPage = () => {
    setCurrentReviewPage((prevPage) => prevPage - 1);
  };

  const reviewPageNumbers = [];
  for (let i = 1; i <= totalReviewPages; i++) {
    reviewPageNumbers.push(i);
  }

  
  return (
    <div className="w-full bg-[F9F9F9]">
      <Head>
        <title>Reviews</title>
      </Head>
      <div className="h-full w-full bg-[#F9F9F9] my-4">
        <div className="flex justify-between mx-[2rem] bg-[#FFFFFF] rounded-md shadow-md px-4 py-4">
          <div>
            <h1 className="text-[24px] font-[600]">Reviews</h1>
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

      <div className="flex items-center mx-4">
        {/* First Box */}
        <div className="flex flex-col h-[155px] w-[175px] text-center items-center bg-[#FFFFFF] py-4 px-6 rounded-md shadow-md mx-2">
          <div className="relative">
            <Image
              src="/images/Start.svg"
              width={40}
              height={40}
              alt="4 Stars"
            />
          </div>
          <p className="mt-2 text-xl font-bold">4.8</p>
          <p className="text-sm font-[600] text-[#000000A8]">Review Score</p>
        </div>

        {/* Second Box */}
        <div className="flex flex-col h-[155px] w-[175px] items-center bg-[#FFFFFF] text-center py-4 px-6 rounded-md shadow-md mx-2">
          <div className="w-10 h-10 bg-[#0852C1] rounded-md"></div>
          <p className="mt-2 text-xl font-bold">567</p>
          <p className="text-sm text-sm font-[600] text-[#000000A8]">Customer Score</p>
        </div>

        {/* Third Box */}
        <div className="flex flex-col h-[155px] w-[175px] items-center bg-[#FFFFFF] text-center py-4 px-6 rounded-md shadow-md mx-2">
          <div className="w-10 h-10 bg-[#FF5924] rounded-md"></div>
          <p className="mt-2 text-xl font-bold">567</p>
          <p className="text-sm text-sm font-[600] text-[#000000A8]">Customer Score</p>
        </div>

        {/* Fourth Box */}
        <div className="flex flex-col h-[155px] w-[175px] items-center bg-[#FFFFFF] text-center py-4 px-6 rounded-md shadow-md mx-2">
          <div className="w-10 h-10 bg-[#08C11B] rounded-md"></div>
          <p className="mt-2 text-xl font-bold">567</p>
          <p className="text-sm text-sm font-[600] text-[#000000A8]">Customer Score</p>
        </div>
        <div className="flex flex-col w-[50%] items-center bg-[#FFFFFF] text-center py-4 px-6 rounded-md shadow-md mx-3">
        <RatingProgressBar label={5} percentage={80} />
      <RatingProgressBar label={4} percentage={60} />
      <RatingProgressBar label={3} percentage={40} />
      <RatingProgressBar label={2} percentage={20} />
      <RatingProgressBar label={1} percentage={10} />
        </div>
      </div>

      <div>
      <div className="h-full w-full bg-[#F9F9F9] my-4">
        <div className="flex justify-between mx-[2rem] bg-[#FFFFFF] rounded-md shadow-md px-4 py-4">
          <div>
            <h1 className="text-[18px] font-[600]">Latest Accepeted Reviews</h1>
          </div>
          <div className="items-center hidden md:flex">
          <h1 className="text-[16px] font-[400]">Latest Accepeted Reviews</h1>
          </div>
        </div>
      </div>
      <ReviewTable reviews={currentReviews} />
      <div className="flex justify-center mt-4">
        {currentReviewPage > 1 && (
          <div
            className={`w-8 h-8 rounded-full mx-1 flex items-center justify-center cursor-pointer bg-white text-[#0852C1]`}
            onClick={handlePrevReviewPage}
          >
            {"<"}
          </div>
        )}
        {reviewPageNumbers.map((pageNumber) => (
          <div
            key={pageNumber}
            onClick={() => handleReviewPagination(pageNumber)}
            className={`w-8 h-8 rounded-full mx-1 flex items-center justify-center cursor-pointer ${
              currentReviewPage === pageNumber
                ? "bg-[#0852C1] text-white"
                : "bg-white text-[#0852C1]"
            }`}
          >
            {pageNumber}
          </div>
        ))}
        {currentReviewPage < totalReviewPages && (
          <div
            className={`w-8 h-8 rounded-full mx-1 flex items-center justify-center cursor-pointer bg-white text-[#0852C1]`}
            onClick={handleNextReviewPage}
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
//   const categories = await categoryApi.getCategories();
//   const products = await productApi.getProdcuts();
//   return { props: { categories, products } };
// };
