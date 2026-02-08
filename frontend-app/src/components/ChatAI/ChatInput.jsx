import React from "react";

const ChatInput = ({ input, loading, onInputChange, onSend }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSend(e);
  };

  return (
    <div className="bg-white border-t border-gray-200 p-4 sticky bottom-0">
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={onInputChange}
            placeholder="Ask me anything..."
            className="flex-1 px-4 py-3 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full font-medium disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all"
          >
            {loading ? (
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5.951-1.429 5.951 1.429a1 1 0 001.169-1.409l-7-14z" />
              </svg>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInput;