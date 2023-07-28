import React, { useState } from "react";

const ReviewTable = ({ reviews }) => {
    const renderStars = (rating) => {
        const filledStarsCount = rating;
        const unfilledStarsCount = 5 - filledStarsCount;
        
      
        return (
          <div className="flex">
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
    <table className="w-full my-4 px-3">
      <tbody className="py-3">
        {reviews.map((review, index) => (
          <tr
            key={review.id}
            className={`hover:bg-blue-100 py-3 px-2 flex items-center justify-evenly  ${review.id % 2 === 0 ? "bg-white shadow-md rounded-md" : ""}`}
          >
            <td className="px-4 py-6 flex">
              <div className="w-10 h-10 bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src={review.image}
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col ml-3">
                <span className="font-[600] text-[16px]">{review.name}</span>
                <span className="text-[#777777] text-[14px] font-[400]">{review.email}</span>
              </div>
            </td>
            <td className="px-4 py-2">{renderStars(review.stars)}</td>
            <td className="px-4 py-2 w-[40%]">
                  <div className="border border-[#0852C12B] p-4 mt-1 rounded-md ">
                    {review.review}
                  </div>
                
            </td>
            <td className="px-4 py-3 my-2 flex items-start">
              <img
                src="/images/clock1.svg" 
                alt="Clock Icon"
                className="w-4 h-4 my-2"
              />
              <div className="flex flex-col ml-2">
                <span className="font-[600] text-[16px]">{review.date}</span>
                <span className="font-[400] text-[14px]">at {review.time}</span>
              </div>
            </td>
            <td className="px-4 py-2">
              <img
                src="/images/dots.svg" // Replace with the path to your three dots icon image
                alt="Three Dots Icon"
                className="w-4 h-4"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReviewTable;
