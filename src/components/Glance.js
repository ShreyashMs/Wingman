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
      <div className="p-2  overflow-hidden border rounded-lg w-full relative">
        <div className="flex-row flex items-center justify-start gap-0 sm:gap-2 font-semibold text-[#667085] text-[0.4rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[0.9rem] lg:gap-2">
          <img
            src={icon}
            alt={title}
            className="w-2 h-2 sm:w-4 sm:h-4 md:w-4 md:h-4"
          />
          {title}
        </div>
        <p className="text-[0.9rem] sm:text-[1.4rem] md:text-[1.8rem] text- font-medium mt-2 text-[#212636]">
          {value}
        </p>
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
            className="w-2 h-2 sm:h-3 sm:w-3 md:h-5 md:w-5"
          />
          <span className="text-[0.6rem] sm:text-[1rem] md:text[1rem] lg:text-[1rem]">
            {trendPercentage}
          </span>
          <span className="text-[#667085] text-[0.6rem] sm:text-[0.8rem] md:text[0.8rem] lg:text-[0.8rem]">
            {trend === "up" ? "increase" : "decrease"}
          </span>
        </p>
      </div>
    );
  };
  return (
    <div className="pr-10 sm:pr-16 flex flex-col justify-center items-center px-2 mr-1 overflow-y-auto">
      <div className="h-full w-full px-3 flex flex-row items-center justify-between">
        <div className="text-[1.1rem] sm:text-[1.5rem] md:text-[2remm] lg:text-[2rem] font-normal flex justify-center text-black items-center">
          At a glance
        </div>
        <div className="flex text-[0.6rem] sm:text-[0.8rem] md:text-[1rem] justify-center items-center border rounded px-5">
          <select className="text-[#212636] bg-white focus:outline-none focus:border-transparent">
            <option value="1">1 day</option>
            <option value="2">7 days</option>
            <option value="3">1 month</option>
            <option value="4">1 year</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1 sm:gap-3 w-full">
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
