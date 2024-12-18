import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from "chart.js";

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
    labels: ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Days of the week
    datasets: [
      {
        label: 'Experts Online',
        data: [28, 28, 30, 50, 32, 35, 35], // Data for Experts Online
        backgroundColor: '#FFE587', // Bar color for Experts Online
        borderColor: '#FFE587',
        borderWidth: 1,
        barThickness: 40, // Bar width
        yAxisID: 'y1', // Linking to right y-axis
        zIndex: 1, // Bars below the lines
      },
      {
        label: 'Answered',
        data: [28, 26, 32, 33, 45, 32, 33], // Data for Answered (line chart)
        fill: false,
        borderColor: '#15B79F', // Line color for Answered
        borderWidth: 2,
        tension: 0.9, // Adjust tension for zigzag lines
        type: 'line',
        pointStyle: 'circle',
        pointRadius: 0, // Remove points
        pointBackgroundColor: '#15B79F',
        yAxisID: 'y2', // Linking to left y-axis
        zIndex: 2, // Lines above the bars
      },
      {
        label: 'Incoming',
        data: [35, 34, 39, 45, 45, 48, 50], // Data for Incoming (line chart)
        fill: false,
        borderColor: '#8A94A6', // Line color for Incoming
        borderWidth: 2,
        tension: 0.9, // Adjust tension for zigzag lines
        type: 'line',
        pointStyle: 'circle',
        pointRadius: 0, // Remove points
        pointBackgroundColor: '#8A94A6',
        yAxisID: 'y2', // Linking to left y-axis
        zIndex: 2, // Lines above the bars
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      // Left y-axis for Consultations
      y: {
        beginAtZero: false,
        ticks: {
          font: {
            size: 7,
          },
        
        },
        grid: {
          borderColor: '#E5E7EB',
          borderWidth: 1,
        },
        position: 'left',
        title: {
          display: true,
          text: 'Consultations !!!',
          font: {
            size: 16,
          },
          color: '#000',
        },
        ticks: {
          font: {
            size: 14,
          },
        },
      },
      // Right y-axis for Experts Online
      y1: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 14,
          },
          stepSize: 10, // Custom step size for y-axis on the right
          callback: function(value) {
            return value + ' Experts Online';
          },
        },
        grid: {
          borderColor: '#E5E7EB',
          borderWidth: 1,
        },
        position: 'right',
        title: {
          display: true,
          text: 'EXPERTS ONLINE',
          font: {
            size: 16,
          },
          color: '#000',
        },
        ticks: {
          font: {
            size: 14,
            rotate: 90, // Rotate right axis labels vertically
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
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: false, // Disable tooltips
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
      <div className="grid grid-cols-2 gap-6 p-4 w-full">
        {/* Left Section: Chart */}
        <div className="col-span-2 sm:col-span-1">
          <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg mx-auto">
            <div className="relative">
              <Bar data={data} options={options} />
            </div>
          </div>
        </div>

        {/* Right Section: Placeholder */}
        <div className="col-span-2 sm:col-span-1 bg-green-600 flex justify-center items-center">
          <p className="text-white text-xl">More Insights Here</p>
        </div>
      </div>
    </div>
  );
};

export default Insights;
