import React, { useState } from "react";

const Orders = () => {
  // Dummy data for table rows
  const tableData = [
    {
      project: { icon: "🌐", name: "Project Alpha" },
      date: "2024-12-19",
      timeSpent: "5 hours",
      orderValue: "$1000",
      commission: "$150",
    },
    {
      project: { icon: "📦", name: "Project Beta" },
      date: "2024-12-18",
      timeSpent: "3 hours",
      orderValue: "$500",
      commission: "$75",
    },
    {
      project: { icon: "💻", name: "Project Gamma" },
      date: "2024-12-17",
      timeSpent: "7 hours",
      orderValue: "$1200",
      commission: "$180",
    },
    {
      project: { icon: "🔧", name: "Project Delta" },
      date: "2024-12-16",
      timeSpent: "6 hours",
      orderValue: "$800",
      commission: "$120",
    },
  ];

  // Columns and their keys for dynamic headers
  const columns = [
    { name: "Project", key: "project" },
    { name: "Date", key: "date" },
    { name: "Time Spent", key: "timeSpent" },
    { name: "Order Value", key: "orderValue" },
    { name: "Commission", key: "commission" },
    { name: "", key: "actions" },
  ];

  // Sorting state
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });
  const [selectedSort, setSelectedSort] = useState(""); // Track selected sorting column

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 4;

  // Chat state
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [userMessage, setUserMessage] = useState("");

  // Function to convert time string (e.g., "5 hours") into a number (5)
  const extractTimeSpent = (timeSpent) => {
    return parseInt(timeSpent.split(" ")[0], 10);
  };

  // Function to convert currency string (e.g., "$1000") to number (1000)
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
        result = aValue.name.localeCompare(bValue.name); // Sort by project name
      } else if (sortConfig.key === "date") {
        result = new Date(aValue) - new Date(bValue); // Sort by date
      } else if (sortConfig.key === "timeSpent") {
        result = extractTimeSpent(aValue) - extractTimeSpent(bValue); // Sort by time spent
      } else if (
        sortConfig.key === "orderValue" ||
        sortConfig.key === "commission"
      ) {
        result = extractValue(aValue) - extractValue(bValue); // Sort by order value or commission
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

  // Function to handle chat message send
  const handleSendMessage = () => {
    if (userMessage.trim()) {
      // Add user's message to chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: userMessage, sender: "user" },
      ]);

      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "I'm an Elon Musk. How can I help you with your project?",
            sender: "bot",
          },
        ]);
      }, 1000);

      // Clear user input
      setUserMessage("");
    }
  };

  // Handle Enter key press to send message
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  // Toggle chat visibility
  const toggleChat = () => {
    setIsChatOpen((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col justify-center items-center px-16">
      <div className="h-full w-full py-5 px-8 flex flex-row items-center justify-between">
        <div className="text-[2.5rem] font-normal flex justify-center text-black items-center">
          Orders
        </div>
        <div className="flex space-x-4 text-[#212636]">
          <select
            className="p-2 border rounded"
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

      {/* Table Section */}
      <div className="w-full py-5 px-8">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              {/* Dynamically generate column headers */}
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`border px-4 py-4 font-normal cursor-pointer ${
                    column.key !== "actions" ? "text-black" : "text-blue-500"
                  }`}
                  onClick={() => requestSort(column.key)}
                >
                  {column.name}
                  {/* Show sorting arrows */}
                  {sortConfig.key === column.key ? (
                    sortConfig.direction === "asc" ? (
                      <span className="cursor-pointer">↗</span> // North-East Arrow for Ascending
                    ) : (
                      <span className="cursor-pointer">↖</span> // South-West Arrow for Descending
                    )
                  ) : null}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Dynamically generate rows */}
            {currentRows.map((row, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={`border px-4 py-4 font-medium text-center ${
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
                        <span className="mr-2">{row[column.key].icon}</span>
                        {row[column.key].name}
                      </span>
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

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2">
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

      {/* Chat Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-96 h-96 p-4 rounded-lg shadow-lg relative">
            {/* Close Button */}
            <button
              onClick={toggleChat}
              className="absolute top-2 right-2 text-2xl text-red-600 hover:scale-105 transition-all duration-300"
            >
              ✖
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
                      className={`p-2 rounded-lg inline-block ${
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
                className="border w-full text-black p-2"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                onKeyDown={handleKeyDown} // Listen for Enter key press
                placeholder="Type a message..."
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-500 text-white p-2 rounded ml-2"
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
