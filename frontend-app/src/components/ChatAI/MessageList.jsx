import React from "react";
import ReactMarkdown from "react-markdown";

const MessageList = ({ messages, messagesEndRef }) => {
  return (
    <div className="flex-1 overflow-y-auto bg-white px-4 py-6">
      <div className="max-w-3xl mx-auto space-y-4">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-center">
            <div>
              <p className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-3">
                Hello
              </p>
              <p className="text-gray-600 text-lg">Ask me anything about mining laws and regulations</p>
            </div>
          </div>
        ) : (
          <>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
              >
                {msg.isUser ? (
                  <div className="max-w-2xl">
                    <div className="bg-purple-100 text-gray-900 rounded-2xl px-5 py-3 rounded-tr-none">
                      <ReactMarkdown
                        components={{
                          p: (props) => <p className="text-gray-900 mb-0" {...props} />,
                          strong: (props) => <strong className="font-bold text-gray-900" {...props} />,
                          em: (props) => <em className="italic text-gray-900" {...props} />,
                          a: (props) => <a className="text-purple-600 hover:text-purple-700 underline" {...props} />,
                        }}
                      >
                        {msg.text}
                      </ReactMarkdown>
                    </div>
                  </div>
                ) : (
                  <div className="max-w-2xl w-full">
                    <ReactMarkdown
                      components={{
                        h1: (props) => <h1 className="text-2xl font-bold text-gray-900 mb-3 mt-0" {...props} />,
                        h2: (props) => <h2 className="text-xl font-bold text-gray-900 mb-2 mt-3" {...props} />,
                        h3: (props) => <h3 className="text-lg font-bold text-gray-900 mb-2 mt-2" {...props} />,
                        p: (props) => <p className="text-gray-800 mb-2 leading-relaxed" {...props} />,
                        ul: (props) => <ul className="list-disc list-inside mb-2 space-y-1 text-gray-800" {...props} />,
                        ol: (props) => <ol className="list-decimal list-inside mb-2 space-y-1 text-gray-800" {...props} />,
                        li: (props) => <li className="text-gray-800 ml-2" {...props} />,
                        strong: (props) => <strong className="font-bold text-gray-900" {...props} />,
                        em: (props) => <em className="italic text-gray-800" {...props} />,
                        a: (props) => <a className="text-purple-600 hover:text-purple-700 underline" {...props} />,
                        code: (props) => {
                          const { inline, children } = props;
                          return inline ? (
                            <code className="bg-gray-100 px-2 py-1 rounded text-red-600 font-mono text-sm" {...props} />
                          ) : (
                            <pre className="bg-gray-100 p-3 rounded-lg mb-2 overflow-x-auto border border-gray-200">
                              <code className="text-gray-800 font-mono text-sm">{children}</code>
                            </pre>
                          );
                        },
                        blockquote: (props) => <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-600 my-2" {...props} />,
                      }}
                    >
                      {msg.text}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>
    </div>
  );
};

export default MessageList;