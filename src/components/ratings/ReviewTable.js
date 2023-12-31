import React, { useState } from "react";

const ReviewTable = ({ reviews }) => {
  const [expandedReviewId, setExpandedReviewId] = useState(null);
    const renderStars = (rating) => {
        const filledStarsCount = rating;
        const unfilledStarsCount = 5 - filledStarsCount;
        
      
        return (
          <div className="flex justify-center items-center h-full ">
            {Array(filledStarsCount).fill(null).map((_, index) => (
              <img
                key={index}
                src="/images/start.svg" // Replace with the path to your star image
                alt="Filled Star"
                className="w-4 h-4"
              />
            ))}
            {Array(unfilledStarsCount).fill(null).map((_, index) => (
              <img
                key={index}
                src="/images/unfilledStar.svg" // Replace with the path to your unfilled star image
                alt="Unfilled Star"
                className="w-4 h-4"
              />
            ))}
          </div>
        );
      };
      

  return (
    <div className="w-full  ">
    <table className="w-full overflow-x-auto my-4 px-3 hidden lg:table ">
    <tbody className="py-3 w-full ">
      {reviews.map((review) => (
        <tr
          key={review.id}
          className={`w-full hover:bg-blue-100 py-3 px-2 md:flex ${
            review.id % 2 === 0
              ? "bg-white shadow-md rounded-md my-4"
              : "hover:bg-blue-200"
          }`}
        >
          {/* User Info Column */}
          <td className="md:flex md:items-center md:w-1/4 xl:w-full md:px-4 md:py-6">
            <div className="lg:w-20 lg:h-20 w-10 h-10 bg-gray-300 rounded-lg overflow-hidden mr-4">
              <img src={review.image} alt="User Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-base">{review.name}</span>
              <span className="text-gray-600 text-sm">{review.email}</span>
            </div>
          </td>
          {/* Stars Column */}
          <td className="md:w-1/8 xl:w-1/4 md:px-4 md:py-2 text-center">{renderStars(review.stars)}</td>
          {/* Review Column */}
          <td className="md:w-1/2 xl:w-full md:px-4 md:py-2">
            <div className="border border-gray-300 p-4 mt-1 rounded-md">

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
                {/* If the review text is not longer than 150 characters, show it as is */}
                {!expandedReviewId && review.review.length <= 150 && review.review}
              </div>
            </div>
          </td>
          {/* Date Column */}
          <td className="md:w-1/4 xl:w-1/2 md:px-4 md:py-3">
            <div className="flex items-start h-full justify-center">
              <img src="/images/clock1.svg" alt="Clock Icon" className="w-4 h-4 my-2 md:mr-2" />
              <div className="flex flex-col h-full ">
                <span className="font-semibold text-base">{review.date}</span>
                <span className="font-normal text-sm">at {review.time}</span>
              </div>
            </div>
          </td>
          {/* Actions Column */}
          <td className="md:w-1/8 md:px-4 md:py-2 md:flex md:justify-center items-center">
            <img
              src="/images/dots.svg" // Replace with the path to your three dots icon image
              alt="Three Dots Icon"
              className="w-4 h-4 cursor-pointer"
            />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  </div>
  );
};

export default ReviewTable;
