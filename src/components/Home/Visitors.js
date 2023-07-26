import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const Visitors = () => {
  const [chartInstance, setChartInstance] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy the previous chart instance before creating a new one
    if (chartInstance) {
      chartInstance.destroy();
    }

    const data = {
      labels: [
        "New Customers- 66%, which is 17,788",
        "Frequent Customers- 44%, which is 18,788",
        "Frequent Customers- 12%, which is 18,788",
        "Frequent Customers- 22%, which is 18,788",
      ],
      datasets: [
        {
          data: [66, 44, 12, 22],
          backgroundColor: ["#F45959", "#EE54BA", "#49E258", "#D9D9D9"],
          borderWidth: 0,
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
            font: { size: 12, weight: 500 },
          },
        },
        tooltip: {
          enabled: false,
        },
        datalabels: {
          display: true,
          color: "#333",
          formatter: (value, ctx) => {
           
            const total = data.datasets[0].data.reduce((acc, val) => acc + val, 0);
            
            const percentage = ((value * 100) / total).toFixed(0);
            return `${percentage}%`;
          },
          anchor: "end",
          align: "start",
          offset: 10,
        },
      },
    };

    const newChartInstance = new Chart(ctx, {
      type: "pie",
      data: data,
      options: chartOptions,
      plugins: [ChartDataLabels], 
    });

    
    setChartInstance(newChartInstance);

   
    return () => {
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="flex flex-col justify-center p-4 rounded-md bg-[#FFFFFF] shadow-md my-4 w-[60%]">
      <h1 className="text-xl font-[700]">Visitors</h1>
      <div className="relative h-48 w-full flex flex-wrap">
        <canvas ref={chartRef} width={200} height={200} />
      </div>
    </div>
  );
};

export default Visitors;
