import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const MostVisited = () => {
  const [chartInstance, setChartInstance] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy the previous chart instance before creating a new one
    if (chartInstance) {
      chartInstance.destroy();
    }

    const data = {
      labels: ["Product Name", "Product Name", "Product Name", "Product Name", "Product Name", "Product Name"],
      datasets: [
        {
          data: [66, 44, 7, 24, 15, 21],
          backgroundColor: ["#ECCE33", "#42CBE9", "#D9D9D9", "#F45959", "#49E258", "#EE54BA"],
          borderColor: ["#ECCE33", "#42CBE9", "#D9D9D9", "#F45959", "#49E258", "#EE54BA"],
          borderWidth: 0,
          hoverOffset: 4,
        },
      ],
    };
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "right",
          labels: {
            usePointStyle: true,
            font: { size: 12 },
          },
        },
        tooltip: {
          enabled: false,
        },
        datalabels: {
          display: true,
          color: "#333",
          font: { size: 12 },
          formatter: (value) => `${value}%`, // Format the label to include the percentage
          anchor: "center", // Place the label in the center of the segment
        },
      },
    };

    const newChartInstance = new Chart(ctx, {
      type: "pie",
      data: data,
      options: chartOptions,
      plugins: [ChartDataLabels], // Add the datalabels plugin
    });

    // Save the new chart instance to state
    setChartInstance(newChartInstance);

    // Cleanup function to destroy the chart instance when component unmounts
    return () => {
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full flex flex-col p-4 rounded-md bg-[#FFFFFF] shadow-md my-4 mx-3 md:w-[40%]">
      <h1 className="md:text-xl text-medium font-[700]">Most Visited Customers</h1>
      <div className="relative h-48 w-full flex">
        <canvas ref={chartRef} width={200} height={200} />
      </div>
    </div>
  );
};

export default MostVisited;
