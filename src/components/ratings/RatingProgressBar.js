import React from "react";

const RatingProgressBar = ({ label, percentage }) => {
  return (
    <div className="flex w-full items-center mb-1 group">
      <div className="w-1/5 flex-shrink-0 mr-2 flex items-center">
        <p className="font-semibold text-[14px] mr-2">{label}</p>
        <img
          src="/images/start.svg" // Replace with the actual path to your star image
          alt="Star"
          className="w-3 h-3 transition-transform transform group-hover:scale-125"
        />
      </div>
      <div className="w-3/5 bg-[#D9D9D9] h-3 rounded-full overflow-hidden relative">
        <div
          className="bg-yellow-500 rounded-full h-full transition-all duration-300 ease-out group-hover:w-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="w-1/5 flex-shrink-0 text-[14px] font-[500] ml-2">
        {percentage}%
      </div>
    </div>
  );
};

export default RatingProgressBar;
