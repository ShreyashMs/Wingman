import React from "react";

const Glance = () => {
  const cardData = [
    {
      icon: "/assets/ChatTeardrop.png",
      title: "CONSULTATIONS",
      value: "24",
      trend: "up",
      trendPercentage: "15%",
    },
    {
      icon: "/assets/Tag2.png",
      title: "ORDERS PLACED",
      value: "12",
      trend: "down",
      trendPercentage: "15%",
    },
    {
      icon: "/assets/CheckFat.png",
      title: "CONVERSION",
      value: "50%",
      trend: "down",
      trendPercentage: "15%",
    },
    {
      icon: "/assets/TOTAL-SALES-VALUE.png",
      title: "TOTAL SALES VALUE",
      value: "$2,400",
      trend: "up",
      trendPercentage: "15%",
    },
    {
      icon: "/assets/AVG-ORDER-VALUE.png",
      title: "AVG ORDER VALUE",
      value: "$240",
      trend: "up",
      trendPercentage: "15%",
    },
    {
      icon: "/assets/COMMISSION-PAID.png",
      title: "COMMISSION PAID",
      value: "$24",
      trend: "up",
      trendPercentage: "15%",
    },
  ];

  const Card = ({ icon, title, value, trend, trendPercentage }) => {
    return (
      <div className="p-5 border rounded-lg shadow-md w-full relative">
        <div className="flex-row flex items-center justify-start gap-2 font-semibold text-[#667085]">
          <img src={icon} alt={title} className="w-3 h-3" />
          {title}
        </div>
        <p className="text-3xl font-bold mt-2 text-[#212636]">{value}</p>
        <p
          className={`gap-1 justify-center items-center inline-flex flex-row ${
            trend === "up" ? "text-green-500" : "text-red-500"
          }`}
        >
          <img
            src={
              trend === "up" ? "/assets/TrendUp.png" : "/assets/TrendDown.png"
            }
            alt={trend === "up" ? "Up Trend" : "Down Trend"}
            className="w-5 h-5"
          />
          <span className="text-xl">{trendPercentage}</span>
          <span className="text-[#667085]">
            {trend === "up" ? "increase" : "decrease"}
          </span>
        </p>
      </div>
    );
  };
  return (
    <div className="flex flex-col justify-center items-center px-16 overflow-y-auto">
      <div className="h-full w-full py-5 px-8 flex flex-row items-center justify-between">
        <div className="text-[2.5rem] font-normal flex justify-center text-black items-center">
          At a glance
        </div>
        <div className="flex justify-center items-center border rounded px-2">
          <select className="text-[#212636] bg-white focus:outline-none focus:border-transparent">
            <option value="1">1 day</option>
            <option value="2">7 days</option>
            <option value="3">1 month</option>
            <option value="4">1 year</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 p-4 w-full">
        {cardData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            value={card.value}
            trend={card.trend}
            trendPercentage={card.trendPercentage}
          />
        ))}
      </div>
    </div>
  );
};

export default Glance;
