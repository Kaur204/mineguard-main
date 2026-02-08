import React from "react";

const ChatHistorySidebar = ({
  chatHistory,
  currentChatId,
  showHistory,
  chatToDelete,
  onCreateNewChat,
  onLoadChat,
  onSetChatToDelete,
  onDeleteChat,
  onToggleHistory,
}) => {
  const getUserData = () => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      return JSON.parse(userData);
    }
    return { username: "User", email: "user@example.com" };
  };

  const userData = getUserData();
  const username = userData.username || userData.email || "User";

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-full">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">mineguard</h1>
        <button
          onClick={onToggleHistory}
          className="text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          title="Close sidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      <div className="p-3">
        <button
          onClick={onCreateNewChat}
          className="w-full p-3 text-gray-900 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors hover:bg-gray-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New chat
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-2">
        {chatHistory.map((chat) => (
          <div key={chat.id} className="mb-2">
            <div
              className={`group relative p-3 cursor-pointer transition-all rounded-lg ${
                currentChatId === chat.id 
                  ? "bg-purple-100 border border-purple-300" 
                  : "hover:bg-gray-200 border border-transparent"
              }`}
              onClick={() => onLoadChat(chat.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <div className={`text-sm font-medium truncate ${
                    currentChatId === chat.id ? "text-purple-900" : "text-gray-900"
                  }`}>
                    {chat.title}
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSetChatToDelete(chat.id);
                  }}
                  className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-600 p-1 ml-2 transition-opacity flex-shrink-0"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>

              {chatToDelete === chat.id && (
                <div className="absolute right-0 top-12 bg-white shadow-lg rounded-md p-2 z-20 border border-gray-200">
                  <p className="text-sm mb-2 text-gray-900 whitespace-nowrap">Delete this chat?</p>
                  <div className="flex justify-end space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSetChatToDelete(null);
                      }}
                      className="text-xs px-2 py-1 border border-gray-300 rounded text-gray-900 hover:bg-gray-100"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeleteChat(chat.id);
                      }}
                      className="text-xs px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatHistorySidebar;