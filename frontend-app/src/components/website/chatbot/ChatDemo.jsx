import React from "react";
import { useNavigate } from "react-router";

const ChatDemo = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Chat Demo Section */}
      <section className="flex justify-center items-center bg-white py-20 px-4">
        <div className="flex flex-col justify-between w-full max-w-4xl h-[65vh] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <header className="flex justify-between items-center px-5 py-3 bg-gray-50 border-b border-gray-200">
            <div className="flex items-center gap-2 text-gray-900 font-semibold">
              <i className="fas fa-robot text-purple-600"></i>
              <span>MineGuard Chatbot</span>
            </div>
            <div className="text-gray-600 hover:text-gray-900 cursor-pointer transition">
              <i className="fas fa-cog"></i>
            </div>
          </header>

          {/* Chat area */}
          <main className="flex-1 overflow-y-auto p-5 bg-white">
            {/* Left message (Bot) */}
            <div className="flex items-end gap-3 mb-6">
              <div
                className="w-11 h-11 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://cdn-icons-png.flaticon.com/512/4712/4712104.png')`,
                }}
              />
              <div className="bg-gray-100 text-gray-900 p-4 rounded-2xl rounded-bl-none max-w-md shadow-sm border border-gray-200">
                <div className="flex justify-between items-center text-xs text-gray-600 mb-1">
                  <span>BOT</span>
                  <span>12:45</span>
                </div>
                <p>
                  Hi, I'm{" "}
                  <span className="font-semibold text-purple-600">
                    MineGuard
                  </span>{" "}
                  👷‍♂️ — your safety assistant. How can I help you ensure
                  compliance today?
                </p>
              </div>
            </div>

            {/* Right message (User) */}
            <div className="flex items-end gap-3 justify-end mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-2xl rounded-br-none max-w-md shadow-sm">
                <div className="flex justify-between items-center text-xs text-purple-100 mb-1">
                  <span>Gaurav</span>
                  <span>12:46</span>
                </div>
                <p>
                  What are the safety protocols for operating heavy machinery in
                  Zone 3?
                </p>
              </div>
              <div
                className="w-11 h-11 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://cdn-icons-png.flaticon.com/512/145/145867.png')`,
                }}
              />
            </div>
          </main>

          {/* Input area */}
          <form className="flex items-center gap-3 p-4 bg-gray-50 border-t border-gray-200">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 bg-white text-gray-900 px-4 py-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-gray-500 border border-gray-200 transition"
            />
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                navigate("/dashboard/chatbot");
              }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-5 py-2.5 rounded-md transition"
            >
              Send
            </button>
          </form>
        </div>
      </section>

      {/* Description Section */}
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg text-gray-600 sm:text-lg">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900">
              Powering innovation at{" "}
              <span className="font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                200,000+
              </span>{" "}
              companies worldwide
            </h2>
            <p className="mb-4 font-light">
              Track work across the enterprise through an open, collaborative
              platform. Link issues across Jira and ingest data from other
              software development tools, so your IT support and operations
              teams have richer contextual information to rapidly respond to
              requests, incidents, and changes.
            </p>
            <p className="mb-4 font-medium">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions. Accelerate critical development work,
              eliminate toil, and deploy changes with ease.
            </p>
            <a
              href="/dashboard/chatbot"
              className="inline-flex items-center font-medium text-purple-600 hover:text-purple-700 transition"
            >
              Try Chatbot
              <svg
                className="ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatDemo;