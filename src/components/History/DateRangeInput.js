import { useState } from "react";
import { DatePicker } from "antd";

import { CalendarOutlined } from "@ant-design/icons";

const DateRangeInput = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="bg-transparent rounded-md p-1 flex items-center space-x-2">
        <DatePicker
          value={startDate}
          onChange={handleStartDateChange}
          suffixIcon={<CalendarOutlined style={{ color: "#1E7FCB",  }} />}
          className="rounded-md  border border-[#0852C12B] focus:outline-none "
        />
        <span className="text-gray-600 font-medium">-</span>
        <DatePicker
          value={endDate}
          onChange={handleEndDateChange}
          suffixIcon={<CalendarOutlined style={{ color: "#1E7FCB" }} />}
          className="rounded-md focus:outline-none  border border-[#0852C12B]"
        />
      </div>
    </div>
  );
};

export default DateRangeInput;
