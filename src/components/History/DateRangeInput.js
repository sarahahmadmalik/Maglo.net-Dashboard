import { useState } from "react";
import Image from "next/image";

const DateRangeInput = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  return (
    <div className="flex flex-col mx-3">
      <div className="bg-transparent flex  rounded-md">
        <div className="">
        <input
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          className=" px-2 py-1 rounded-md border border-[#0852C12B] focus:outline-none"
        />
        <span className="px-2 font-[500]">To</span>
        <input
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
          className=" px-2 py-1 rounded-md border border-[#0852C12B] focus:outline-none"
        />
      </div>
      </div>
     
    </div>
  );
};

export default DateRangeInput;
