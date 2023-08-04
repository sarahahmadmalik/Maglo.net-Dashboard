"use client"

import { Modal, Button } from "antd";
import Head from "next/head";
import Image from "next/image";
import RatingProgressBar from '../../components/ratings/RatingProgressBar'
import { useState, useEffect, useRef } from "react";
import ReviewTable from '../../components/ratings/ReviewTable'

const Index = () => {
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
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
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
  const [expandedReviewId, setExpandedReviewId] = useState(null);
  const actionsRef = useRef();
  const [showActions, setShowActions] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showModifyModal, setShowModifyModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
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

  const handleDeleteConfirmation = () => {
    const updatedOrders = reviews.filter((order) => order.id !== selectedProductId);
    const updated = reviews.filter((order) => order.id !== selectedProductId);
   
    
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
        <title>Reviews</title>
      </Head>
      <div className="h-full w-full md:my-4 mb-4">
        <div className="hidden md:flex justify-between mx-[2rem] bg-[#FFFFFF] rounded-md shadow-md px-4 py-4">
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

      <div className="flex flex-row justify-center sm:justify-start flex-wrap lg:flex-nowrap items-center md:mx-4 ">
        {/* First Box */}
        <div className="flex flex-col w-30 sm:w-[130px] h-[155px] md:w-[175px] text-center items-center bg-[#FFFFFF] py-4 px-6 rounded-md shadow-md mx-2 my-2 md:my-0">
          <div className="relative">
            <Image
              src="/images/start.svg"
              width={40}
              height={40}
              alt="4 Stars"
            />
          </div>
          <p className="mt-2 text-xl font-bold">4.8</p>
          <p className="text-sm font-[600] text-[#000000A8]">Review Score</p>
        </div>

        {/* Second Box */}
        <div className="flex flex-col w-[130px]  h-[155px] md:w-[175px] items-center bg-[#FFFFFF] text-center py-4 px-6 rounded-md shadow-md mx-2  my-2 md:my-0">
          <div className="w-10 h-10 bg-[#0852C1] rounded-md"></div>
          <p className="mt-2 text-xl font-bold">567</p>
          <p className="text-sm text-sm font-[600] text-[#000000A8]">Customer Score</p>
        </div>

        {/* Third Box */}
        <div className="flex flex-col w-[130px] h-[155px] md:w-[175px] items-center bg-[#FFFFFF] text-center py-4 px-6 rounded-md shadow-md mx-2  my-2 md:my-0">
          <div className="w-10 h-10 bg-[#FF5924] rounded-md"></div>
          <p className="mt-2 text-xl font-bold">567</p>
          <p className="text-sm text-sm font-[600] text-[#000000A8]">Customer Score</p>
        </div>

        {/* Fourth Box */}
        <div className="flex flex-col w-[130px] h-[155px] md:w-[175px] items-center bg-[#FFFFFF] text-center py-4 px-6 rounded-md shadow-md mx-2  my-2 md:my-0">
          <div className="w-10 h-10 bg-[#08C11B] rounded-md"></div>
          <p className="mt-2 text-xl font-bold">567</p>
          <p className="text-sm text-sm font-[600] text-[#000000A8]">Customer Score</p>
        </div>
        <div className="flex flex-col w-full md:w-[50%] items-center bg-[#FFFFFF] text-center py-4 px-6 rounded-md shadow-md mx-3 my-2 md:my-0">
        <RatingProgressBar label={5} percentage={80} />
      <RatingProgressBar label={4} percentage={60} />
      <RatingProgressBar label={3} percentage={40} />
      <RatingProgressBar label={2} percentage={20} />
      <RatingProgressBar label={1} percentage={10} />
        </div>
      </div>

      <div>
      <div className="h-full w-full my-4">
        <div className="flex justify-between mx-3 md:mx-[2rem] bg-[#FFFFFF] rounded-md shadow-md px-4 py-4">
          <div>
            <h1 className="md:text-[18px] text-[14px] sm:text-[16px] font-[600]">Latest Accepeted Reviews</h1>
          </div>
          <div className="items-center hidden md:flex">
          <h1 className="text-[16px] font-[400]">Latest Accepeted Reviews</h1>
          </div>
        </div>
      </div>
      <ReviewTable reviews={currentReviews} />
      <div className="lg:hidden px-3 flex flex-col space-y-4">
            {currentReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-md shadow-md p-4"
                
              >
                <div className="flex items-center mb-4 ">
                  <div className="rounded-lg overflow-hidden mr-4">
                    <Image
                      src={review.image}
                      width={60}
                      height={60}
                      alt="Product Image"
                    />
                  </div>
                  <div>
                  <p className="font-semibold text-base">{review.name}</p>
                  <div>
                  <p>{review.email}</p>
                  </div>
                 
                  </div>
                  
                 
                  <div className="ml-auto">
                    <button
                      className="p-1 rounded-md hover:bg-gray-200"
                      onClick={() => handleActionsToggle(review.id)}
                    >
                      <Image
                        src="/images/more.svg"
                        width={3}
                        height={3}
                        alt="More Actions"
                      />
                    </button>
                    <div className="relative md:block" ref={actionsRef}>
                      {showActions && selectedProductId === review.id && (
                        <div
                          className="absolute right-0 top-0  w-32 bg-white rounded-md shadow-lg overflow-hidden border "
                          style={{ border: '1px solid #E5E7EB' }}
                        >
                          <button
                            className="block w-full py-1 text-sm text-left px-4 transition-colors duration-200 hover:bg-red-600 text-white overflow-hidden"
                            style={{ backgroundColor: '#F73B3F' }}
                            onClick={() => handleDelete(review.id)}
                           
                          >
                            Delete
                          </button>
                         
                        </div>

                      )}
                    </div>
                  </div>
                </div>
              
                <div className="flex justify-between border-b border-blue-500 pb-3 sm:text-[17px]   flex-wrap items-center mb-2">
                  <p className="text-[#777777] font-[400]  flex">
                    <p className="text-[#0852C1] mr-1">Date:</p>{" "}{review.date}
                  </p>
                  <p className="text-[#777777] font-[400] flex ">
                  <p className="text-[#0852C1] mr-1">Time:</p> {" "}{review.time}
                  </p>
  
                  
                 
                </div>
                <div className="flex justify-between pt-3  pb-3 mb-2 flex-wrap  sm:text-[17px]">
                  <p className="text-[#777777] font-[400]  flex items-center">
                  <p className="text-[#0852C1] mr-1">Rating:</p> 
                  <div className="flex">
                  {Array.from({ length: review.stars }, (_, index) => (
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
                  <div>
                {review.review.length > 150 && expandedReviewId !== review.id && (
                  <>
                  
                    {review.review.substring(0, 150)}...
                    <span
                      className="text-blue-500 cursor-pointer ml-2"
                      onClick={() => setExpandedReviewId(review.id)}
                    >
                      Read More
                    </span>
                  </>
                )}
                {expandedReviewId === review.id && (
                  <>
                    {review.review}
                    <span
                      className="text-blue-500 cursor-pointer ml-2"
                      onClick={() => setExpandedReviewId(null)}
                    >
                      Read Less
                    </span>
                  </>
                )}
               
                {!expandedReviewId && review.review.length <= 150 && (
                  <div className="">
                  <p className="text-[#0852C1] mt-2 mb-1">Review: </p>
                  {review.review}
                  </div>
                  )
                  }
              </div>
                  
                </div>
               
              </div>
            ))}
          </div>  
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
      <Modal
  title="Delete Review"
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
  <p>Do you want to delete this Review?</p>
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
