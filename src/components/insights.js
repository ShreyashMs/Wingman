import React from "react";
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

// Register chart.js components
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
  const data = {
    labels: ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"], // Days of the week
    datasets: [
      {
        label: "Experts Online",
        data: [28, 28, 30, 50, 32, 35, 35], // Data for Experts Online
        backgroundColor: "#FFE587", // Bar color for Experts Online
        borderColor: "#FFE587",
        borderWidth: 1,
        barThickness: 50, // Bar width
        yAxisID: "y1", // Linking to right y-axis
      },
      {
        label: "Answered",
        data: [28, 26, 32, 33, 45, 32, 33], // Data for Answered (line chart)
        fill: false,
        borderColor: "#15B79F", // Line color for Answered
        borderWidth: 2,
        tension: 0.9, // Adjust tension for zigzag lines
        type: "line",
        pointStyle: "circle",
        pointRadius: 0, // Remove points
        pointBackgroundColor: "#15B79F",
        yAxisID: "y2", // Linking to left y-axis
        zIndex: 10, // Lines above the bars
      },
      {
        label: "Incoming",
        data: [35, 34, 39, 45, 45, 48, 50], // Data for Incoming (line chart)
        fill: false,
        borderColor: "#8A94A6", // Line color for Incoming
        borderWidth: 2,
        tension: 0.9, // Adjust tension for zigzag lines
        type: "line",
        pointStyle: "circle",
        pointRadius: 0, // Remove points
        pointBackgroundColor: "#8A94A6",
        yAxisID: "y2", // Linking to left y-axis
        zIndex: 10, // Lines above the bars
      },
    ],
  };

  const options = {
    responsive: true,
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
            size: 16,
            rotate:45
          },
          color: "#C4C4C4",
        },
        ticks: {
          font: {
            size: 14,
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
            size: 16,
          },
          color: "#C4C4C4",
        },
        ticks: {
          // Define custom tick values for the left Y-Axis
          stepSize: 10,
          max: 60, // Define the maximum value on the left Y-axis
          min: 0, // Define the minimum value on the left Y-axis
          font: {
            size: 14,
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 14,
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
  };

  return (
    <div className="flex flex-col justify-center items-center px-16">
      <div className="h-full w-full py-5 px-8 flex flex-row items-center justify-between">
        <div className="text-[2.5rem] font-normal flex justify-center text-black items-center">
          Insights
        </div>
      </div>
      <div className="flex-row flex w-full p-4">
        {/* Left Section: Chart */}
        <div className="w-full bg-white p-8 rounded-lg mx-auto">
          <div className="relative">
            <Bar data={data} options={options} />
          </div>
        </div>

        {/* Right Section: Placeholder */}
        <div className="col-span-2 gap-3 flex flex-row">
          <div class="w-full  rounded-xl">
            <div className="flex flex-row justify-center items-center gap-1">
              <BsChatFill />
              FORECASTS
            </div>
            <div className=" flex flex-row justify-center items-center text-3xl">
              +15%
              <img
                src={"/assets/TrendUp.png"}
                alt={"Up Trend"}
                className="w-5 h-5"
              />
            </div>
            <p>
              forecasted increase in your sales closed by the end of the current
              month
            </p>
            <div className=" flex flex-row justify-center items-center text-3xl">
              +15%
              <img
                src={"/assets/TrendUp.png"}
                alt={"Up Trend"}
                className="w-5 h-5"
              />
            </div>
            <p>
              forecasted increase in consultations by the end of the current
              month
            </p>
          </div>
          <div class="w-full bg-[#18a18c] bg-[radial-gradient(circle_at_top_left,_#15B79F_30%,_transparent_31%),_radial-gradient(circle_at_top_left,_#1ea894_60%,_transparent_61%),_radial-gradient(circle_at_top_left,_#18a18c_90%,_transparent_91%)] rounded-xl">
            <div className="flex flex-row justify-start items-center gap-1 p-3">
              <BsChatFill />
              FORECASTS
            </div>
            <div className=" flex flex-row justify-between items-center py-2 gap-2 text-[4rem] p-4">
              +15%
              <PiTrendUpBold />
            </div>
            <p className="p-3">
              forecasted increase in your sales closed by the end of the current
              month
            </p>
            <div className=" flex flex-row justify-between items-center py-2 gap-2 text-[4rem] p-4">
              +15%
              <PiTrendUpBold />
            </div>
            <p className="p-3">
              forecasted increase in consultations by the end of the current
              month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
