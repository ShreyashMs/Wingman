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
  PointElement,
  LineElement,
} from "chart.js";
import { BsChatFill } from "react-icons/bs";
import { PiTrendUpBold } from "react-icons/pi";
import WeeklyInsights from "./WeeklyInsights";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const Insights = () => {
  const [barThickness, setBarThickness] = useState(10);
  const [fontSize, setFontSize] = useState();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setBarThickness(10);
        setFontSize(5);
      } else if (window.innerWidth < 1024) {
        setBarThickness(20);
        setFontSize(10);
      } else {
        setBarThickness(30);
        setFontSize(14);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = {
    labels: ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Experts Online",
        data: [28, 28, 30, 50, 32, 35, 35],
        backgroundColor: "#FFE587",
        borderColor: "#FFE587",
        borderWidth: 1,
        barThickness: barThickness,
        yAxisID: "y1",
      },
      {
        label: "Answered",
        data: [28, 26, 32, 33, 45, 32, 33],
        fill: false,
        borderColor: "#15B79F",
        borderWidth: 2,
        tension: 0.9,
        type: "line",
        pointStyle: "circle",
        pointRadius: 0,
        pointBackgroundColor: "#15B79F",
        yAxisID: "y2",
        zIndex: 10,
      },
      {
        label: "Incoming",
        data: [35, 34, 39, 45, 45, 48, 50],
        fill: false,
        borderColor: "#8A94A6",
        borderWidth: 2,
        tension: 0.9,
        type: "line",
        pointStyle: "circle",
        pointRadius: 0,
        pointBackgroundColor: "#8A94A6",
        yAxisID: "y2",
        zIndex: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y1: {
        beginAtZero: false,
        min: 10,
        grid: {
          borderColor: "#E5E7EB",
          borderWidth: 1,
        },
        position: "right",
        title: {
          display: true,
          text: "EXPERTS ONLINE",
          font: {
            size: fontSize + 2,
            rotate: 45,
          },
          color: "#C4C4C4",
        },
        ticks: {
          font: {
            size: fontSize,
          },
        },
      },
      y2: {
        beginAtZero: false,
        min: 10,
        grid: {
          borderColor: "#E5E7EB",
          borderWidth: 1,
        },
        position: "left",
        title: {
          display: true,
          text: "CONSULTATIONS",
          font: {
            size: fontSize + 2,
          },
          color: "#C4C4C4",
        },
        ticks: {
          stepSize: 10,
          max: 60,
          min: 0,
          font: {
            size: fontSize,
          },
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
    barPercentage: 0.7,
    categoryPercentage: 0.8,
  };

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="h-full w-full p-3 flex flex-row items-center justify-between">
        <div className="text-[1.1rem] sm:text-[1.5rem] md:text-[2remm] lg:text-[2rem] font-normal flex justify-center text-black items-center">
          Insights
        </div>
      </div>
      <div className="flex flex-col sm:flex-row md:flex-row w-full mr-5 gap-2 sm:mr-0">
        {/* Left Section */}
        <div className="sm:p-8 rounded-lg h-44 w-full sm:w-[60%] sm:h-auto">
          <div className="text-[0.5rem] text-[#667085] ml-4 px-3 gap-1 sm:text-[0.8rem] md:text-[1.0.8rem] lg:text-[0.85rem] font-medium flex  items-center"></div>
          <Bar data={data} options={options} />
        </div>

        {/* Right Section */}
        <div className="flex w-full sm:w-[40%] overflow-hidden p-2 gap-3">
          <div className="rounded-xl w-[40%]">
            <WeeklyInsights />
          </div>
          <div className="bg-[#18a18c] w-[60%] h-80 bg-[radial-gradient(circle_at_top_left,_#15B79F_35%,_transparent_31%),_radial-gradient(circle_at_top_left,_#1ea894_60%,_transparent_61%),_radial-gradient(circle_at_top_left,_#18a18c_90%,_transparent_91%)] rounded-xl p-2 mr-8 sm:p-4">
            <div className="text-[0.8rem] flex-row flex gap-1 items-center">
              <BsChatFill />
              FORECASTS
            </div>
            <div className="text-[1.8rem] flex-row flex my-5 justify-between">
              +15%
              <PiTrendUpBold />
            </div>
            <p className="text-[0.6rem]">
              forecasted increase in your sales closed by the end of the current
              month
            </p>
            <div className="text-[1.8rem] flex-row flex my-5 justify-between">
              +20%
              <PiTrendUpBold />
            </div>
            <p className="text-[0.6rem]">
              forecasted increase in your sales closed by the end of the current
              month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
