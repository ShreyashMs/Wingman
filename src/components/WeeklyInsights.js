import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { GiNetworkBars } from "react-icons/gi";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WeeklyInsights = () => {
  const [barThickness, setBarThickness] = useState(10);
  const [fontSize, setFontSize] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setBarThickness(10);
        setFontSize(5);
      } else if (window.innerWidth < 1024) {
        setBarThickness(20);
        setFontSize(7);
      } else {
        setBarThickness(25);
        setFontSize(9);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = {
    labels: ["This Week", "Last Week"],
    datasets: [
      {
        label: "Consultations",
        data: [20, 13],
        backgroundColor: "#CCFBEF",
        borderColor: "#CCFBEF",
        borderWidth: 1,
        barThickness: barThickness,
      },
      {
        label: "Orders Closed",
        data: [14, 12],
        backgroundColor: "#134E48",
        borderColor: "#134E48",
        borderWidth: 1,
        barThickness: barThickness,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
          max: 20,
          min: 0,
          font: {
            size: fontSize,
          },
        },
        grid: {
          borderColor: "#E5E7EB",
          borderWidth: 1,
        },
      },
      x: {
        ticks: {
          font: {
            size: fontSize,
          },
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
      },
    },
    barPercentage: 0,
    categoryPercentage: 0.1,
  };

  return (
    <div className="flex flex-col w-full ">
      <div className="h-full w-full flex flex-row">
        <div className="text-[0.5rem] ml-3 text-[#667085] px-3 gap-1 sm:text-[0.rem] md:text-[0.7rem] lg:text-[0.7rem] font-medium flex justify-center items-center">
          <GiNetworkBars />{" "}
          VS PAST PERIOD
        </div>
      </div>
      <div className="flex flex-col w-full sm:mr-0">
        <div className="rounded-lg w-48 h-[300px] flex-grow">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default WeeklyInsights;
