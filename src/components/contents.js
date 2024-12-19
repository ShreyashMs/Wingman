import { useState } from "react";
import Glance from "./Glance";
import Insights from "./insights";
import Orders from "./orders";

const Contents = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "Summary", icon: "/assets/ChartPieSlice.png" },
    { title: "Sales", icon: "/assets/Tag.png" },
    { title: "Chats", icon: "/assets/ChatTeardropText.png" },
  ];

  return (
    <header className="border-b-2 ml-10 sm:ml-14 md:ml-16 lg:ml-20 text-white top-0 left-16 0 h-full w-full">
      {/* header */}
      <div className="flex w-full justify-start overflow-hidden px-2 gap-2 py-6 border-b-[2px] flex-row items-center ">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`text-[0.6rem] sm:text-[1rem] md:text-[1.1rem] text-[#212636] flex items-center font-medium px-1 py-1 sm:py-3 sm:px-5 rounded-2xl ${
              activeTab === index
                ? "bg-[#CCFBEF] border-b-2 border-white"
                : "[#FFFFFF]"
            }`}
            onClick={() => setActiveTab(index)}
          >
            <img src={tab.icon} alt="Logo" className="h-[0.5rem] sm:h-[0.8rem] md:h-[1rem] lg:h-[1rem] mr-1 sm:mr-2" />
            {tab.title}
          </button>
        ))}
      </div>
      <Glance />
      <Insights />
      <Orders />
    </header>
  );
};

export default Contents;
