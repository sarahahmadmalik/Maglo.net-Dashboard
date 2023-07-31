import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const ProfitPerformance = () => {
  const [chartInstance, setChartInstance] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy the previous chart instance before creating a new one
    if (chartInstance) {
      chartInstance.destroy();
    }

    const data = {
      labels: ["Profit 2022", "Profit 2023"],
      datasets: [
        {
          data: [33, 88],
          backgroundColor: ["#0852C1", "#D9D9D9"],
          borderColor: ["#0852C1", "#D9D9D9"],
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
          position: "bottom",
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
      type: "doughnut",
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
    <div className="flex flex-col md:flex-1 md:items-stretch  p-4 rounded-md bg-[#FFFFFF] shadow-md my-4  md:w-[232px] md:h-[245px] w-full">
      <h1 className="text-[16px] font-bold">Profit Performance</h1>
      <div className="relative h-36 w-38 flex md:mt-[1.4rem]">
        <canvas ref={chartRef} width={200} height={200} />
      </div>
    </div>
  );
};

export default ProfitPerformance;
