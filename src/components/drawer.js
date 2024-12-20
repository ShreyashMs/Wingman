import React, { useState } from "react";
import { PiUsersFourFill, PiHouseFill } from "react-icons/pi";
import { BsChatFill } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";

const Drawer = () => {
  const [clicked, setClicked] = useState(null); // State to track clicked button index

  // IconButton component
  const IconButton = ({ icon, ariaLabel, onClick, isClicked }) => {
    return (
      <button
        className={`flex justify-center items-center rounded-lg p-1 ${
          isClicked ? "bg-[#FFFFFF]" : "bg-transparent"
        }`}
        aria-label={ariaLabel}
        onClick={onClick}
        type="button"
      >
        {/* Icon color: changes to blue if clicked, default is white */}
        <span
          style={{
            color: isClicked ? "#115E56" : "#CCFBEF", // Adjust the clicked state color
          }}
          className={`text-[1rem] sm:text-[1.5rem] md:text-[1.6rem] lg:text-[1.6rem]`}
        >
          {icon}
        </span>
      </button>
    );
  };

  const buttons = [
    {
      icon: <PiHouseFill />,
      alt: "Home Icon",
      ariaLabel: "Go to Home",
    },
    {
      icon: <BsChatFill />,
      alt: "/assets/Chats.png",
      ariaLabel: "Chat",
    },
    {
      icon: <PiUsersFourFill />,
      alt: "UsersFour",
      ariaLabel: "Users",
    },
    {
      icon: <IoIosSettings />,
      alt: "Settings Icon",
      ariaLabel: "Settings",
    },
  ];

  // Function to handle button click
  const handleButtonClick = (index) => {
    setClicked(index); // Set the clicked button index
  };

  return (
    <div className="h-screen py-4 bg-[#115E56] px-1 shadow-lg fixed z-20 flex flex-col">
      {/* Logo Button */}
      <button
        className="flex justify-center items-center w-full"
        type="button"
        aria-label="Navigate to Home"
      >
        <img
          src="/assets/Logo.png"
          alt="Brand Logo"
          className="h-[40.2px] sm:h-[50.2px] md:h-[62.2px] lg:h-[62.2px] rounded border-b-[1px] pb-5 border-b-[#134E48]"
        />
      </button>
      {/* Main Buttons Container */}
      <div className="flex-grow flex flex-col justify-between">
        <div className="flex flex-col items-center space-y-3">
          {buttons.slice(0, 3).map((button, index) => (
            <IconButton
              key={index}
              icon={button.icon} // Pass the icon directly here
              ariaLabel={button.ariaLabel}
              onClick={() => handleButtonClick(index)} // Trigger the color change
              isClicked={clicked === index} // Check if this button is clicked
            />
          ))}
        </div>
        <div className="flex justify-center items-center mt-6  className={`text-[1rem] sm:text-[1.5rem] md:text-[1.8rem] lg:text-[1.8rem]`">
          <IconButton
            icon={buttons[buttons.length - 1].icon} // Pass the icon directly here
            ariaLabel={buttons[buttons.length - 1].ariaLabel}
            onClick={() => handleButtonClick(buttons.length - 1)} // Trigger the color change for the settings button
            isClicked={clicked === buttons.length - 1} // Check if this button is clicked
          />
        </div>
      </div>
    </div>
  );
};

export default Drawer;
