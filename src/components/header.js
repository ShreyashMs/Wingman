import { useState } from "react";
import Glance from "./Glance";
import Insights from "./insights";

const Header = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "Summary", icon: "/assets/ChartPieSlice.png" },
    { title: "Sales", icon: "/assets/Tag.png" },
    { title: "Chats", icon: "/assets/ChatTeardropText.png" },
  ];

  return (
    <header className="border-b-2 text-white top-0 left-16 z-10 h-full w-full">
      <div className="flex justify-start px-4 py-6 border-b-[2px] flex-row items-center">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`text-lg text-[#212636] flex items-center font-medium py-3 px-12 rounded-3xl ${
              activeTab === index
                ? "bg-[#CCFBEF] border-b-2 border-white"
                : "[#FFFFFF]"
            }`}
            onClick={() => setActiveTab(index)}
          >
            <img src={tab.icon} alt="Logo" className="h-[20] mr-2" />
            {tab.title}
          </button>
        ))}
      </div>

      <Glance />
      <Insights />
    </header>
  );
};

export default Header;
