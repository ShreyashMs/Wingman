import React, { useState } from "react";

const Orders = () => {
  const tableData = [
    {
      project: { icon: "/assets/dummy-icon.png", name: "Project Alpha" },
      date: "2024-12-19",
      timeSpent: "5 hours",
      orderValue: "$1000",
      commission: "$150",
    },
    {
      project: { icon: "/assets/dummy-icon.png", name: "Project Beta" },
      date: "2024-12-18",
      timeSpent: "3 hours",
      orderValue: "$500",
      commission: "$75",
    },
    {
      project: { icon: "/assets/dummy-icon.png", name: "Project Gamma" },
      date: "2024-12-17",
      timeSpent: "7 hours",
      orderValue: "$1200",
      commission: "$180",
    },
    {
      project: { icon: "/assets/dummy-icon.png", name: "Project Delta" },
      date: "2024-12-16",
      timeSpent: "6 hours",
      orderValue: "$800",
      commission: "$120",
    },
    {
      project: { icon: "/assets/dummy-icon.png", name: "Project Beta" },
      date: "2024-12-18",
      timeSpent: "3 hours",
      orderValue: "$500",
      commission: "$75",
    },
    {
      project: { icon: "/assets/dummy-icon.png", name: "Project Gamma" },
      date: "2024-12-17",
      timeSpent: "7 hours",
      orderValue: "$1200",
      commission: "$180",
    },
    {
      project: { icon: "/assets/dummy-icon.png", name: "Project Delta" },
      date: "2024-12-16",
      timeSpent: "6 hours",
      orderValue: "$800",
      commission: "$120",
    },
    {
      project: { icon: "/assets/dummy-icon.png", name: "Project Beta" },
      date: "2024-12-18",
      timeSpent: "3 hours",
      orderValue: "$500",
      commission: "$75",
    },
    {
      project: { icon: "/assets/dummy-icon.png", name: "Project Gamma" },
      date: "2024-12-17",
      timeSpent: "7 hours",
      orderValue: "$1200",
      commission: "$180",
    },
    {
      project: { icon: "/assets/dummy-icon.png", name: "Project Delta" },
      date: "2024-12-16",
      timeSpent: "6 hours",
      orderValue: "$800",
      commission: "$120",
    },
    {
      project: { icon: "/assets/dummy-icon.png", name: "Project Beta" },
      date: "2024-12-18",
      timeSpent: "3 hours",
      orderValue: "$500",
      commission: "$75",
    },
    {
      project: { icon: "/assets/dummy-icon.png", name: "Project Gamma" },
      date: "2024-12-17",
      timeSpent: "7 hours",
      orderValue: "$1200",
      commission: "$180",
    },
    {
      project: { icon: "/assets/dummy-icon.png", name: "Project Delta" },
      date: "2024-12-16",
      timeSpent: "6 hours",
      orderValue: "$800",
      commission: "$120",
    },
  ];

  const columns = [
    { name: "Project Name", key: "project" },
    { name: "Date", key: "date" },
    { name: "Time Spent", key: "timeSpent" },
    { name: "Order Value", key: "orderValue" },
    { name: "Commission", key: "commission" },
    { name: "", key: "actions" },
  ];

  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });
  const [selectedSort, setSelectedSort] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 4;

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [userMessage, setUserMessage] = useState("");

  const extractTimeSpent = (timeSpent) => {
    return parseInt(timeSpent.split(" ")[0], 10);
  };

  const extractValue = (value) => {
    return parseFloat(value.replace("$", ""));
  };

  const sortedData = [...tableData].sort((a, b) => {
    if (sortConfig.key) {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      const isAscending = sortConfig.direction === "asc";

      let result = 0;
      if (sortConfig.key === "project") {
        result = aValue.name.localeCompare(bValue.name);
      } else if (sortConfig.key === "date") {
        result = new Date(aValue) - new Date(bValue);
      } else if (sortConfig.key === "timeSpent") {
        result = extractTimeSpent(aValue) - extractTimeSpent(bValue);
      } else if (
        sortConfig.key === "orderValue" ||
        sortConfig.key === "commission"
      ) {
        result = extractValue(aValue) - extractValue(bValue);
      }

      return isAscending ? result : -result;
    }
    return 0;
  });

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = sortedData.slice(indexOfFirstRow, indexOfLastRow);

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSortChange = (event) => {
    const selectedColumn = event.target.value;
    setSelectedSort(selectedColumn);

    let sortKey = "";
    switch (selectedColumn) {
      case "Name":
        sortKey = "project";
        break;
      case "Date":
        sortKey = "date";
        break;
      case "Time Spent":
        sortKey = "timeSpent";
        break;
      case "Order Value":
        sortKey = "orderValue";
        break;
      case "Commission":
        sortKey = "commission";
        break;
      default:
        break;
    }

    if (sortKey) {
      requestSort(sortKey);
    }
  };

  const handleSendMessage = () => {
    if (userMessage.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: userMessage, sender: "user" },
      ]);

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "I'm an Elon Musk. How can I help you with your project?",
            sender: "bot",
          },
        ]);
      }, 1000);

      setUserMessage("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsChatOpen((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col mr-5 ml-2 justify-center items-center">
      <div className="h-full w-full py-2 px-2 flex flex-row items-center justify-between">
        <div className="text-[1.1rem] sm:text-[1.5rem] md:text-[2remm] lg:text-[2rem] font-normal flex justify-center text-black items-center">
          Orders
        </div>
        <div className="flex text-[0.6rem] text-black border-none sm:text-[0.8rem] md:text-[0.8rem] justify-center items-center border rounded px-5">
          <select
            className="p-1 border rounded"
            value={selectedSort}
            onChange={handleSortChange}
          >
            <option value="">Sort By</option>
            <option value="Name">Sort by Name</option>
            <option value="Date">Sort by Date</option>
            <option value="Time Spent">Sort by Time Spent</option>
            <option value="Order Value">Sort by Order Value</option>
            <option value="Commission">Sort by Commission</option>
          </select>
        </div>
      </div>

      <div className="w-full py-5 px-2 mr-10 sm:mr-0 overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`border sm:px-4  text-[#667085] py-1 px-1 sm:py-4 text-[0.6rem] sm:text-[0.7rem] font-normal cursor-pointer ${
                    column.key !== "actions" ? "text-black" : "text-blue-500"
                  }`}
                  onClick={() => requestSort(column.key)}
                >
                  {column.name}
                  {sortConfig.key === column.key ? (
                    sortConfig.direction === "asc" ? (
                      <span className="cursor-pointer">↗</span>
                    ) : (
                      <span className="cursor-pointer">↖</span>
                    )
                  ) : null}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={`border px-3 sm:px-4 sm:py-1 py-1 text-[0.6rem] sm:text-[0.8rem] md:px-3 md:py-3 font-normal text-center ${
                      column.key === "actions" ? "text-blue-500" : "text-black"
                    }`}
                  >
                    {column.key === "actions" ? (
                      <button
                        className="text-blue-500 hover:underline"
                        onClick={toggleChat}
                      >
                        View Chat ↗
                      </button>
                    ) : column.key === "project" ? (
                      <span className="flex items-center">
                        <span className="h-4 bg-gray-200 w-4 mr-2 rounded-lg">
                          <img
                            src={row[column.key].icon}
                            alt={row[column.key].icon}
                          />
                        </span>
                        {row[column.key].name}
                      </span>
                    ) : column.key === "commission" ? (
                      <span className="font-bold">{row[column.key]}</span> // Make commission bold
                    ) : (
                      row[column.key]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center space-x-2 text-[0.6rem] sm:text-[0.8rem] md:text-[1rem]">
        <button
          className="text-blue-500 px-4 py-2 rounded"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-[#212636]">Page {currentPage}</span>
        <button
          className="text-blue-500 px-4 py-2 rounded"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={indexOfLastRow >= sortedData.length}
        >
          Next
        </button>
      </div>

      {isChatOpen && (
        <div className="fixed inset-0 bg-gray-500 p-2 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white max-h-72 overflow-y-scroll p-4 rounded-lg shadow-lg relative">
            <button
              onClick={toggleChat}
              className="absolute top-2 font-bold right-2 text-2xl text-red-600 hover:scale-105 transition-all duration-300"
            >
              X
            </button>

            <div className="h-4/5 overflow-y-auto">
              <div className="flex flex-col space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={
                      message.sender === "user" ? "text-right" : "text-left"
                    }
                  >
                    <p
                      className={`p-2 rounded-lg text-[0.8rem] inline-block ${
                        message.sender === "user"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-black"
                      }`}
                    >
                      {message.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex">
              <input
                type="text"
                className="border w-full text-black p-2 text-[0.8rem] sm:text-[1rem]"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-500 text-white p-2 rounded ml-2  text-[0.8rem] sm:text-[1rem]"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
