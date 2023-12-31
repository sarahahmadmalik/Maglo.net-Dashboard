import {useRef, useEffect, useState} from 'react'
import Chart from "chart.js/auto";
const ConversationRate = () => {
  const data = [
    { year: "2022", customers: "3,235", trend: "30%", revenue: "$678" },
    { year: "2023", customers: "12,887", trend: "66%", revenue: "$6798" },
  ];

  const [chartInstance, setChartInstance] = useState(null);

  const canvasRef = useRef(null);
  const progress = 86; 

  useEffect(() => {
   
    if (chartInstance) {
      chartInstance.destroy();
    }
    const ctx = canvasRef.current.getContext("2d");
    const config = {
      type: "doughnut",
      data: {
        labels: ["Progress", "Remaining"],
        datasets: [
          {
            data: [progress, 100 - progress],
            backgroundColor: ["#0852C1", "#E1DBDB"],
            borderColor: ["#0852C1", "#E1DBDB"],
          },
        ],
      },
      options: {
        responsive: true,
      
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    };

    const newChartInstance = new Chart(ctx, config);
    setChartInstance(newChartInstance);
   
    return () => {
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };

    
  }, [progress]);
  return (
    <div className="p-4 rounded-md bg-[#FFFFFF] shadow-md my-4 flex md:flex-row flex-col items-center md:justify-between md:items-center">
      <div>
         <h1 className="text-xl font-bold">Conversation Rate</h1>
        <table className="table-auto mt-4 bg-transparent">
          <thead>
            <tr>
              <th className="pr-4 font-[400]">Year</th>
              <th className="pr-4 font-[400]">Customers</th>
              <th className="pr-4 font-[400]">Trend</th>
              <th className="pr-4 font-[400]">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={index === data.length - 1 ? "border-t border-[#E1DBDB]" : ""}>
                <td className="pr-4 font-[600]">{row.year}</td>
                <td className="pr-4 font-[600]">{row.customers}</td>
                <td className="pr-4 font-[600]">{row.trend}</td>
                <td className="pr-4 font-[600]">{row.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* todo 1 */}
        <table className=" mt-4 bg-transparent">
          <thead>
            <tr>
              <th className="pr-4 text-left font-[700] text-[24px]">50,555</th>
              <th className="pr-4 text-left font-[700] text-[24px]">+23,555</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pr-4 text-[13px]">Regular Customers</td>
              <td className="pr-4 text-[13px]">New Customers</td>
            </tr>
            <tr>
            <td className="pr-4 text-green-500 font-[400]">
                {/* <ArrowDropUpIcon className="text-green-500" /> +45.45% */}
                +45.45%
              </td>
              <td className="pr-4 text-green-500 font-[400]">
                {/* <ArrowDropUpIcon className="text-green-500" /> +67.45% */}
                +67.45%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className=" md:w-full w-40 ml-2 md:my-0 my-5">
        {/* <div className="relative"> */}
        <canvas ref={canvasRef} width={100} height={100}></canvas>
      
        <div className="text-center md:mt-2 text-[#0852C1] font-bold text-lg">{progress}%</div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ConversationRate;