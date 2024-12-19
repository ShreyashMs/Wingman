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
  // State to store barThickness based on screen size
  const [barThickness, setBarThickness] = useState(10);
  const [fontSize, setFontSize] = useState(); // State to store font size

  useEffect(() => {
    // Function to adjust barThickness and fontSize based on screen width
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setBarThickness(10); // Smaller thickness for small screens
        setFontSize(5); // Smaller font size for small screens
      } else if (window.innerWidth < 1024) {
        setBarThickness(20); // Medium thickness for medium screens
        setFontSize(10); // Medium font size for medium screens
      } else {
        setBarThickness(30); // Default thickness for large screens
        setFontSize(14); // Default font size for large screens
      }
    };

    // Run on mount
    handleResize();

    // Attach event listener on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = {
    labels: ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"], // Days of the week
    datasets: [
      {
        label: "Experts Online",
        data: [28, 28, 30, 50, 32, 35, 35], // Data for Experts Online
        backgroundColor: "#FFE587", // Bar color for Experts Online
        borderColor: "#FFE587",
        borderWidth: 1,
        barThickness: barThickness, // Dynamic bar thickness
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
    maintainAspectRatio: false, // Allow chart to resize dynamically without aspect ratio constraint
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
            size: fontSize + 2, // Adjust title font size based on screen size
            rotate: 45,
          },
          color: "#C4C4C4",
        },
        ticks: {
          font: {
            size: fontSize, // Adjust tick font size based on screen size
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
            size: fontSize + 2, // Adjust title font size based on screen size
          },
          color: "#C4C4C4",
        },
        ticks: {
          stepSize: 10,
          max: 60,
          min: 0,
          font: {
            size: fontSize, // Adjust tick font size based on screen size
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: fontSize, // Adjust tick font size based on screen size
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
    // Adjust bar spacing by tweaking the following
    layout: {
      padding: {
        left: 20, // Add padding to the left side of the chart
        right: 20, // Add padding to the right side of the chart
      },
    },
    // Adjust spacing between bars
    barPercentage: 0.7, // Make the bars thinner, adding space between them
    categoryPercentage: 0.8, // Space between each bar group
  };

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="h-full w-full py-5 px-8 flex items-center justify-between">
        <div className="text-[1rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-normal flex justify-center text-black items-center">
          Insights
        </div>
      </div>
      <div className="flex flex-col sm:flex-row md:flex-row w-full mr-5 gap-2 sm:mr-0">
        {/* Left Section: Chart */}
        <div className="sm:p-8 rounded-lg h-44 w-full sm:w-[60%] sm:h-auto">
          <Bar data={data} options={options} />
        </div>

        {/* Right Section: Placeholder */}
        <div className="flex w-[90%] py-5 sm:w-[40%] overflow-hidden p-2 gap-2">
          <div className="bg-red-600 rounded-xl p-11">
            JMD
          </div>
          <div className="bg-[#18a18c] bg-[radial-gradient(circle_at_top_left,_#15B79F_30%,_transparent_31%),_radial-gradient(circle_at_top_left,_#1ea894_60%,_transparent_61%),_radial-gradient(circle_at_top_left,_#18a18c_90%,_transparent_91%)] rounded-xl p-2 sm:p-4">
            <div className="flex flex-row justify-start items-center gap-1 text-[0.8rem] sm:text-[1rem]">
              <BsChatFill />
              FORECASTS
            </div>
            <div className="flex text-white flex-row items-center py-2 gap-2 text-[1.5rem] sm:text-[2.2rem] p-4">
              +15%
              <PiTrendUpBold />
            </div>
            <p className="p-3">
              forecasted increase in your sales closed by the end of the current
              month
            </p>
            <div className="flex flex-row justify-between items-center py-2 gap-2 text-[4rem] p-4">
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
