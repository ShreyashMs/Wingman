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
        className={`flex justify-center items-center rounded-lg p-2 ${
          isClicked ? "bg-[#FFFFFF]" : "bg-transparent"
        }`}
        aria-label={ariaLabel}
        onClick={onClick}
        type="button"
        style={{ width: "50px", height: "50px" }} // Set the desired width and height
      >
        {/* Icon color: changes to blue if clicked, default is white */}
        <span
          style={{
            color: isClicked ? "#115E56" : "#CCFBEF", // Adjust the clicked state color
            fontSize: "24px", // Adjust icon size
          }}
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
    <div className="h-full bg-[#115E56] shadow-lg pb-10">
      {/* Logo Button */}
      <button
        className="flex justify-center items-center p-1 w-full"
        type="button"
        aria-label="Navigate to Home"
      >
        <img
          src="/assets/Logo.png"
          alt="Brand Logo"
          className="h-[65.2px] mt-5 rounded border-b-[1px] mb-6 pb-5 border-b-[#134E48]"
        />
      </button>
      <div className="h-[50rem] pb-7">
        {/* Navigation Buttons (First three buttons only) */}
        <div className="flex flex-col items-center space-y-4 h-full p-4">
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

        {/* Settings Button (last one) */}
        <div className="flex justify-center items-center">
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
