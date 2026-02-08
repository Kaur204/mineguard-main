import React from "react";

const ChatHeader = ({ onToggleHistory, currentChatTitle, sidebarOpen }) => {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center sticky top-0 z-10">
      <button
        onClick={onToggleHistory}
        className="text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
        title={sidebarOpen ? "" : "Open sidebar"}
      >
        {!sidebarOpen && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
      <div className="flex-1 flex justify-center">
        <h1 className="text-lg font-medium text-gray-900">
          {currentChatTitle || "Mining Assistant"}
        </h1>
      </div>
      <div className="w-10" />
    </div>
  );
};

export default ChatHeader;